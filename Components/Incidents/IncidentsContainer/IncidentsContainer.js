import React, { useEffect, useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { fetchIncidents } from '../../../apiCalls'
import IncidentCard from '../IncidentCard/IncidentCard'
import Footer from '../../Footer/Footer'

export default function IncidentsContainer({ navigation }) {
    const [ incidents, updateIncidents ] = useState([])
    

  // on component mount, get all incidents from the database
  useEffect(() => {
    async function getIncidents() {
        const incidentsData = await fetchIncidents()
            // .then(response => response.json())

        console.log('data', incidentsData)
        if (incidentsData !== undefined && incidentsData !== false) {
            updateIncidents(incidentsData)
        }
    }
    getIncidents()
    
  }, [])

    // maps over all incidents and creatre Incident Cards
    const allIncidentCards = () => {
        console.log('incidents', incidents)
        if (incidents !== undefined && incidents) {
            return incidents.map(incident => <IncidentCard incident={incident} key={incident.id}/>)

        }
    }
    
    return (
        <View>
            <ScrollView>
                {allIncidentCards()}
            </ScrollView>
            <Footer navigation={navigation}/>
        </View>
    )
}