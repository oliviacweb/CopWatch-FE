import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import Footer from '../../Footer/Footer'

export default function IncidentDetails(props) {
    const incident = props.route.params.incident
    const { navigation } = props
    const {image} = incident
    return (
        <View>
            <View style={styles.container}>
            <Text style={styles.text}>Incident Id: {incident.id}</Text>
                <Text style={styles.text}>Date: {incident.created_date}</Text>
                <Text style={styles.text}>City: {incident.city}</Text>
                <Text style={styles.text}>State: {incident.state}</Text>
                <Text style={styles.text}>Zip: {incident.zip_code}</Text>
                <Text style={styles.text}>Parties Involved: {incident.parties}</Text>
                <Text style={styles.text}>Officer Name(s): {incident.officer_name}</Text>
                <Text style={styles.text}>Badge Number(s): {incident.badge_number}</Text>
                <Text style={styles.text}>Description: {incident.description}</Text>
            <Image source={image} style={{ width: 150, height: 150 }} />                
            </View>
            <Footer navigation={navigation}/>
        </View>
    )
    
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#003366",
        color: '#fff',
        padding: 10,
        height: '100%',

    },
    text: {
        color: '#fff',
        fontSize: 20,
        margin: 5,
    }
})