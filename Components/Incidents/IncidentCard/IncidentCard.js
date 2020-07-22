import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import IncidentsContainer from '../IncidentsContainer/IncidentsContainer'


export default function IncidentCard({ incident }) {

    return (
        <View style={styles.card}> 
            <Text>Incident Id: {incident.id}</Text>
            <Text>Description: {incident.description}</Text>
            {/* <Text>{incident.self.created_date}</Text> */}
            <Text>City: {incident.city}</Text>
            <Text>State: {incident.state}</Text>
            <Text>Zip: {incident.zip_code}</Text>
            <Text>Officer: {incident.officer_name}</Text>
            <Text>Badge Number: {incident.badge_number}</Text>
       </View>
    )
}

const styles = StyleSheet.create({
    card: {
      fontSize: 25,
      margin: 10,
      textAlign: "center",
      color: "#003366",
      borderWidth: 1,
      borderColor: "black"
    }
})