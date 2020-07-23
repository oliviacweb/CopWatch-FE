import React, { useEffect, useState } from 'react'
import { ScrollView, Text } from 'react-native'
import { fetchIncidents } from '../../../apiCalls'
import IncidentCard from '../IncidentCard/IncidentCard'

export default function IncidentsContainer() {
    const [ incidents, updateIncidents ] = useState([])
    

  // on component mount, get all incidents from the database
  useEffect(() => {
    async function getIncidents() {
        const incidentsData = await fetchIncidents()
        console.log('incidentsData', incidentsData)
        if (incidentsData !== undefined) {
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
        <ScrollView>
            {allIncidentCards()}
        </ScrollView>
    )
}