import React, { useEffect, useState } from 'react'
import { ScrollView, TextInput, StyleSheet, Button } from 'react-native'
import { fetchIncidents } from '../../../apiCalls'
import IncidentCard from '../IncidentCard/IncidentCard'

export default function IncidentsContainer({ navigation }) {
    const [ incidents, updateIncidents ] = useState([])
    const [ incidentsToDisplay, updateIncidentsToDisplay ] = useState([])
    const [ searchInput, updateSearchInput ] = useState('')

  // on component mount, get all incidents from the database
  useEffect(() => {
    async function getIncidents() {
        const incidentsData = await fetchIncidents()
            // .then(response => response.json())
        if (incidentsData !== undefined && incidentsData !== false) {
            updateIncidents(incidentsData)
            updateIncidentsToDisplay(incidentsData)
        }
    }
    getIncidents()
  }, [])

    // maps over all incidents and creatre Incident Cards
    const allIncidentCards = () => {
        if (incidentsToDisplay !== undefined && incidents) {
            return incidentsToDisplay.map(incident => <IncidentCard incident={incident} key={incident.id} navigation={navigation}/>)
        }
    }

    // searches and updates incidentsToDisplay with matches
    const searchIncidents = () => {
        const matchingIncidents = incidents.filter(incident => {
            console.log(incident)
            let doesInclude = false
            const keys = Object.keys(incident)
            console.log(keys)
            keys.forEach(key => {
                console.log(typeof incident[key])
                if (key !== 'id') {
                    if (incident[key].toLowerCase().includes(searchInput.toLowerCase())) {
                        doesInclude = true
                    }
                }
            })
            if (doesInclude) {
                return incident
            }
        })
        updateIncidentsToDisplay(matchingIncidents)
    }

    // helper for search button
    const handleSearch = () => {
        searchIncidents()
        clearInput()
    }

    // helper for clear button
    const handleClear = () => {
        updateIncidentsToDisplay(incidents)
        clearInput()
    }

    // clears input field
    const clearInput = () => {
        updateSearchInput('')
    }
    
    return (
        <ScrollView >
            <TextInput
                placeholder="search incidents"
                value={searchInput}
                onChangeText={updateSearchInput}
                style={styles.search}
        />
            <Button 
                title="SEARCH"
                onPress={handleSearch}
            />
            <Button 
                title="CLEAR RESULTS"
                onPress={handleClear}
            />
            {allIncidentCards()}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    search: {
        backgroundColor: '#fff'
    }

})