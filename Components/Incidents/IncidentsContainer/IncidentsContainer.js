import React, { useEffect, useState } from 'react'
import { ScrollView, TextInput, StyleSheet, Button, View, Text, Platform } from 'react-native'
import { fetchIncidents } from '../../../apiCalls'
import IncidentCard from '../IncidentCard/IncidentCard'
import Footer from '../../Footer/Footer'


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
        <View style={styles.container}>
            <ScrollView style={styles.incidents}>
                <Text style={styles.searchTitle}>Search Incidents</Text>
                <TextInput
                    placeholder="search incidents"
                    value={searchInput}
                    onChangeText={updateSearchInput}
                    style={styles.search}
            />
            <View style={styles.searchButton}>
                <Button 
                    color="#fff"
                    title="SEARCH"
                    onPress={handleSearch}
                />
            </View>
            <View style={styles.clearSearchButton}>
                <Button 
                    color = "#fff"
                    title="CLEAR RESULTS"
                    onPress={handleClear}
                />
            </View>
                {allIncidentCards()}
            </ScrollView>
            <Footer navigation={navigation}/>
        </View>
    )
}

const styles = StyleSheet.create({
    searchTitle: {
        fontSize: 30,
        color: "#fff",
        flex: 1,
        textAlign: 'center',
        margin: 15,
    },
    search: {
        backgroundColor: '#fff',
        height: 40,
        width: '90%',
        marginLeft: '5%',
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 10,
    },
    container: {
        backgroundColor: "#003366",
    },
    incidents: {
        height: '100%'
    },
    searchButton: {
        width: "90%",
        marginLeft: 18,
        marginTop: 10,
        borderRadius: 30,
        height: 55,
        backgroundColor: Platform.OS === "ios" ? "#0018f0" : null,
        borderColor: Platform.OS === "ios" ? "#FFF" : null,
        borderStyle: Platform.OS === "ios" ? "solid" : null,
        borderWidth: Platform.OS === "ios" ? 2 : null,
        flex: 1,
        justifyContent: "center",   
    },
    clearSearchButton: {
        width: "90%",
        paddingLeft: 5,
        marginLeft: 18,
        marginTop: 10,
        borderRadius: 30,
        height: 55,
        backgroundColor: Platform.OS === "ios" ? "red" : null,
        borderColor: Platform.OS === "ios" ? "#FFF" : null,
        borderStyle: Platform.OS === "ios" ? "solid" : null,
        borderWidth: Platform.OS === "ios" ? 2 : null,
        display: "flex",
        justifyContent: "center",   
    }

})