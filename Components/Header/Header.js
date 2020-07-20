import React from 'react'
import { ScrollView, Text, StyleSheet } from 'react-native'
import { preventAutoHide } from 'expo/build/launch/SplashScreen'

export default function IncidentCard() {

    return(
        <ScrollView>
            <Text style={styles.header}>CopWatch</Text>
        </ScrollView>
    )
    
}

const styles = StyleSheet.create({
    header: {
        fontSize: 50,
        textAlign: 'center',
        borderBottomWidth: 3,
        borderBottomColor: 'black'
        // backgroundColor: 'red',
        // color: 'blue'
    }
})