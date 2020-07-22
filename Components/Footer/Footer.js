import React from 'react'
import { ScrollView, Text, StyleSheet, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from "@react-navigation/stack";

// const Stack = createStackNavigator();

export default function Footer({ navigation }) {
    console.log('footer', navigation)
    const handleIncidentsView = () => {
        navigation.navigate("Incidents Container")
    }
    const handleHomeView = () => {
        navigation.navigate("Home")
    }

    return(
        <ScrollView style={styles.footer}>
            <Text></Text>
            <Button 
                title="home" 
                style={styles.button}
                onPress={() => handleHomeView()}
            />
            <Button 
                title="Incidents" 
                style={styles.button}
                onPress={() => handleIncidentsView()}
            />
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
    },
    button: {
        display: 'flex',
        // flex: 1,
    }
})