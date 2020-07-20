import React from 'react'
import { ScrollView, Text, StyleSheet } from 'react-native'

export default function Header() {

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