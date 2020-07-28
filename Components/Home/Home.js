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
    const [ address, updateAddress ] = useState({street: '', city: '', state: '', zip: '', formattedAddress: ''})
    const [ coordinates, updateCoordinates ] = useState('')


    // routing
    const handleReportView = () => {
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


    //   find address
    const getAddress = async () => {
      console.log('some bullshit', coordinates)
      if(coordinates !== '') {
        const locationArray = coordinates.split(':')

        const long =
          Platform.OS === "ios"
            ? locationArray[6].split("").splice(0, 14).join("")
            : locationArray[6].split("").splice(0, 8).join("");
        const lat =
          Platform.OS === "ios"
            ? locationArray[4].split("").splice(0, 12).join("")
            : locationArray[8].split("").splice(0, 8).join("");
        const latLong = `${lat},${long}`
        const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latLong}&key=${apiKey}`
        // move to api calls?
        await fetch(url)
          .then(res => res.json())
          .then(data => updateAddress({street: `${data.results[0].address_components[0].long_name} ${data.results[0].address_components[1].long_name}`, city: data.results[0].address_components[3].long_name, state: data.results[0].address_components[5].long_name, zip: data.results[0].address_components[7].long_name, formattedAddress: data.results[0].formatted_address}))
          .catch(err => console.error(err))
      }
    }

      // refresh or update???
    //   get coordinates, address on mount
    useEffect(() => {
        findCoordinates()
    }, [])



    useEffect(() => {
        if (coordinates !== ' ') {
            getAddress()
        }
    }, [coordinates])

    return (
        <View style={styles.home}>
            <Header />
              <Text style={styles.missionStatement}>CopWatch is dedicated to providing civilians with a fast and easy way to document incidents of police misconduct. Simply click the 'Log An Incident' button below to get started. </Text>
            <View style={styles.reportBtn}>
                <Button
                    color= {Platform.OS === 'ios' ? '#fff' : null}
                    title="Log An Incident"
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
        backgroundColor: Platform.OS === 'ios'? '#0018f0' : null,
        borderColor: Platform.OS === 'ios'? '#FFF' : null,
        borderStyle: Platform.OS === 'ios'? 'solid' : null,
        borderWidth: Platform.OS === 'ios'? 2 : null,
        display: 'flex',
        justifyContent: 'center',
    },
    missionStatement: {
      marginBottom: 170,
      fontSize: 17,
      // fontStyle: 'bold',
      marginLeft: '10%',
      marginRight: '6%',
      justifyContent: 'center',
      color: 'white'

    },
    home: {
        height: '100%',
        backgroundColor: '#003366',
        display: 'flex',
        justifyContent: 'center'
    }
})
