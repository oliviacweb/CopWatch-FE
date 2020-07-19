import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { preventAutoHide } from 'expo/build/launch/SplashScreen'

export default function IncidentCard() {

    return(
        <View>
            <Text style={styles.header}>CopWatch</Text>
        </View>
    )
    
}

const styles = StyleSheet.create({
    header: {
        fontSize: 50,
        textAlign: 'center',
    }
})