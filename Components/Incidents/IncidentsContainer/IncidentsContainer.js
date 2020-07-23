import React, { useEffect, useState } from 'react'
import { ScrollView, Text } from 'react-native'
import { fetchIncidents } from '../../../apiCalls'
import IncidentCard from '../IncidentCard/IncidentCard'

export default function IncidentsContainer() {
    const [ incidents, updateIncidents ] = useState([])
    
    // api call to get all incidents?
    // use hook to make call on render and hook to store incidents
    // map over incidents to cerate an IncidentCard for each
    
  useEffect(() => {
    async function getIncidents() {
        const incidentsData = await fetchIncidents()
            // .then(response => response.json())

        console.log('data', incidentsData)
        if (incidentsData !== undefined) {
            updateIncidents(incidentsData)
        }
    }
    getIncidents()
    
  }, [])

    const allIncidentCards = () => {
        console.log('allIncidentsCards', incidents)
        if (incidents !== undefined) {
            return incidents.map(incident => <IncidentCard incident={incident} key={incident.id}/>)

        }
    }
    
    return (
        <ScrollView>
            {allIncidentCards()}
        </ScrollView>
    )
}