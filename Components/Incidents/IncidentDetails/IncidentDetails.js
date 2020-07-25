import React from 'react'
import { View, Text } from 'react-native'

export default function IncidentDetails(props) {
    const incident = props.route.params.incident

    return (
        <View>
            <Text>Incident Id: {incident.id}</Text>
            <Text>Date: {incident.created_date}</Text>
            <Text>City: {incident.city}</Text>
            <Text>State: {incident.state}</Text>
            <Text>Zip: {incident.zip_code}</Text>
            <Text>Parties: {incident.parties}</Text>
            <Text>Description: {incident.description}</Text>
            <Text>Officer: {incident.officer_name}</Text>
            <Text>Badge Number: {incident.badge_number}</Text>
        </View>
    )
    
}