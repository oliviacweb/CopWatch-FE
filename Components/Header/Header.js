import React from 'react'
import { ScrollView, Text, StyleSheet, Image } from 'react-native'

export default function Header() {

    return(
        <ScrollView>
            <Text style={styles.header}>
                <Text style={styles.cop}>Cop
                <Image source={require('../../assets/watchhalf.png')} style={styles.icon}/>
                </Text>
            Watch</Text>
        </ScrollView>
    )
    
}

const styles = StyleSheet.create({
    header: {
        fontSize: 50,
        textAlign: 'center',
        // borderBottomWidth: 3,
        // borderBottomColor: 'black',
        // backgroundColor: 'red',
        color: '#fff'
    },
    cop: {
        color: '#0da2ff',
        fontWeight: "bold",

    },
    icon: {
        // height: '1%',
        // width: '1%'
    }
})