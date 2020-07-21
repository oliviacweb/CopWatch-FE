import React from 'react'
import { ScrollView, Text, StyleSheet, Button } from 'react-native'

export default function Footer() {

    return(
        <ScrollView style={styles.footer}>
            <Text></Text>
            <Button title="home"></Button>
            {/* <Button title="home"></Button> */}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    footer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: '10%',
        display: 'flex',
        backgroundColor: '#fff'
    }
})