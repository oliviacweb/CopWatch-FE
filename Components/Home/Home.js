import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';

import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import ReportForm from '../ReportForm/ReportForm'
import { NavigationContainer } from '@react-navigation/native';

export default function Home({ navigation }) {

    const handleReportView = () => {
        navigation.navigate("Report Form")
    }
    return (
        <View>
            <Header />
            <Button 
                title="File a Report"
                onPress={() => handleReportView()}
            />
              
         
            {/* <Text>Home Screen</Text> */}
            {/* <ReportForm /> */}
            <Footer />
        </View>
    )
}