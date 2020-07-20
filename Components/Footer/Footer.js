import React from 'react'
import { ScrollView, Text, StyleSheet, Button } from 'react-native'

export default function Footer() {

    return(
        <ScrollView style={styles.footer}>
            <Text>Footer</Text>
            <Button title="home"></Button>
            {/* <Button title="home"></Button> */}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    footer: {
        position: 'absolute',
        bottom: 0,
        display: 'flex'
    }
})