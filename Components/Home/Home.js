import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';

import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import ReportForm from '../ReportForm/ReportForm'
import { NavigationContainer } from '@react-navigation/native';


export default function Home({ navigation }) {

    const [ address, updateAddress ] = useState(' ')
    const [ coordinates, updateCoordinates ] = useState(' ')
    
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
          error => Alert.alert(error.message),
          { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );
      };

    //   find address
    const getAddress = async () => {
        const apiKey = 'AIzaSyCdTuyV1d3k7iQBMlOWfqurzQy0HmxKdJU'
        const locationArray = coordinates.split(':')
        const long = locationArray[6].split('').splice(0, 8).join('')
        const lat = locationArray[8].split('').splice(0, 8).join('')
        const latLong = `${lat},${long}`
        const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latLong}&key=${apiKey}`
        await fetch(url)
          .then(res => res.json())
          .then(data => updateAddress(data.results[0].formatted_address))
        //   .then(data => console.log(data.results[0].formatted_address))
          .catch(err => console.error(err))
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
    })

    return (
        <View style={styles.home}>
            <Header />
            <View style={styles.reportBtn}>
                <Button 
                    color='#fff'
                    title="File a Report"
                    onPress={() => handleReportView()}
                />
            </View>
            <Footer />
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
        color: '#fff',
        backgroundColor: '#0018f9',
        borderColor: '#FFF',
        borderStyle: 'solid',
        borderWidth: 2,
        display: 'flex',
        justifyContent: 'center',
        fontSize: 40,

        // height: 100
    },

    home: {
        height: '100%',
        backgroundColor: '#003366',
        display: 'flex',
        justifyContent: 'center'
    }
})