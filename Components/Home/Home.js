import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Button, Platform } from 'react-native';

import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import ReportForm from '../ReportForm/ReportForm'
import { NavigationContainer } from '@react-navigation/native';
import { apiKey } from './apiKey.js'
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";



export default function Home({ navigation }) {
    // const [ address, updateAddress ] = useState(' ')
    const [ address, updateAddress ] = useState({street: '', city: '', state: '', zip: '', formattedAddress: ''})
    const [ coordinates, updateCoordinates ] = useState(' ')
 

    // routing
    const handleReportView = () => {
        // console.log(address)
        navigation.navigate("Report Form", {
            address
        })
    }

    // get location on page load
    const findCoordinates = () => {
        navigator.geolocation.getCurrentPosition(
          position => {
            const location = JSON.stringify(position);
            if (location !== '{}') {
                updateCoordinates(location);
            }
          },
          error => print.alert(error.message),
          { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );
      };

    const getLocationAsync = async () => {
      let { status } = await Permissions.askAsync(Permissions.LOCATION);
      if (status !== 'granted') {
              alert('Permission to access location was denied');
      }
      let location = await Location.getCurrentPositionAsync({accuracy:Location.Accuracy.Highest});
      console.log(location)
      const { latitude, longitude } = location.coords
      this.getGeocodeAsync({latitude, longitude})
      if (location !== '{}') {
          updateCoordinates(location = {latitude, longitude})
      }
    }

    //   find address
    const getAddress = async () => {
        const locationArray = coordinates.split(':')
        const long = locationArray[6].split('').splice(0, 8).join('')
        const lat = locationArray[8].split('').splice(0, 8).join('')
        const latLong = `${lat},${long}`
        const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latLong}&key=${apiKey}`
        // move to api calls?
        await fetch(url)
          .then(res => res.json())
          .then(data => updateAddress({street: `${data.results[0].address_components[0].long_name} ${data.results[0].address_components[1].long_name}`, city: data.results[0].address_components[3].long_name, state: data.results[0].address_components[5].long_name, zip: data.results[0].address_components[7].long_name, formattedAddress: data.results[0].formatted_address}))
        //   .then(data => console.log(data.results[0]))
          .catch(err => console.error(err))
      }

      // refresh or update???
    //   get coordinates, address on mount
    useEffect(() => {
        findCoordinates()
        // getLocationAsync()
    }, [])

    useEffect(() => {
        if (coordinates !== ' ') {
            getAddress()
        }
    })

    return (
        <View style={styles.home}>
            <Header />
            <View style={styles.reportBtn}>
                <Button 
                    color= {Platform.OS === 'ios' ? '#fff' : null}
                    title="File a Report"
                    onPress={() => handleReportView()}
                />
            </View>
            <Footer navigation={navigation} address={address}/>
        </View>
    )
}

const styles = StyleSheet.create({
    reportBtn: {
        marginBottom: 250,
        width: '88%',
        marginLeft: '6%',
        borderRadius: 30,
        height: 55,
        // color: '#fff',
        backgroundColor: Platform.OS === 'ios'? '#0018f0' : null,
        borderColor: Platform.OS === 'ios'? '#FFF' : null,
        borderStyle: Platform.OS === 'ios'? 'solid' : null,
        borderWidth: Platform.OS === 'ios'? 2 : null,
        display: 'flex',
        justifyContent: 'center',
        // fontSize: 40,

        // height: 100
    },

    home: {
        height: '100%',
        backgroundColor: '#003366',
        display: 'flex',
        justifyContent: 'center'
    }
})
