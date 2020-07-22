import React from 'react'
import { ScrollView, Text, StyleSheet, Button, View } from 'react-native'
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
        <View style={styles.footer}>
            <Text></Text>

            <View style={styles.button}>
                <Button 
                    title="home" 
                    
                    onPress={() => handleHomeView()}
                />
            </View>

            <View style={styles.button}>
                <Button 
                    title="Incidents" 
                    
                    onPress={() => handleIncidentsView()}
                />
            </View>
            {/* <Button title="home"></Button> */}
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: '15%',
        // display: 'flex',
        backgroundColor: '#fff',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    button: {
        // backgroundColor: 'red',
        width: '25%',
        
       

    }
})