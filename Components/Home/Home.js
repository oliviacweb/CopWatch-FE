import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';

import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import ReportForm from '../ReportForm/ReportForm'
import { NavigationContainer } from '@react-navigation/native';

export default function Home({ navigation }) {
    const [ location, updateLocation ] = useState('')
    
    // routing
    const handleReportView = () => {
        navigation.navigate("Report Form")
    }

    // get location on page load


    return (
        <View style={styles.home}>
            <Header />
            <View style={styles.reportBtn}>
                <Button 
                    title="File a Report"
                    onPress={() => handleReportView()}
                />
            </View>
              
         
            {/* <Text>Home Screen</Text> */}
            {/* <ReportForm /> */}
            <Footer />
        </View>
    )
}

const styles = StyleSheet.create({
    reportBtn: {
        marginBottom: 250,
        // height: 100
    },

    home: {
        height: '100%'
    }
})