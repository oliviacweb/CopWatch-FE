import React, { useState } from 'react'
import { View, TextInput, Text, StyleSheet, Button } from 'react-native'

export default function Report() {
    const [ parties, updateParties ] = useState('')
    // option to automatically get?
    const [ date, updateDate ] = useState('')
    // option to automatically get? 
    const [ time, updateTime ] = useState('')
    // option to automatically get? 
    const [ location, updateLocation ] = useState('')
    const [ officerName, updateOfficerName ] = useState('')
    const [ badgeNum, updateBadgeNum ] = useState('')
    const [ description, updateDescription ] = useState('')

    const handleSubmit = () => {
        const report = createReportObject()
        console.log(report)
    }

    const createReportObject = () => {
        return ({
            parties,
            date,
            time,
            location,
            officerName,
            badgeNum,
            description
        })
    }

    return (
        <View>
            <Text style={styles.title}>File a New Report</Text>
            <Text style={styles.label}>Involved Parties:</Text>
            <TextInput 
                placeholder="Enter Involved Parties" 
                onChangeText={updateParties} 
                style = {styles.input}

            />
            <Text style={styles.label}>Date:</Text>
            <TextInput 
                placeholder="Enter Date" 
                onChangeText={updateDate} 
                style = {styles.input}

            />
            <Text style={styles.label}>Time:</Text>
            <TextInput 
                placeholder="Enter Time" 
                onChangeText={updateTime} 
                style = {styles.input}

            />
            <Text style={styles.label}>Location:</Text>
            <TextInput 
                placeholder="Enter Location" 
                onChangeText={updateLocation} 
                style = {styles.input}

            />
            <Text style={styles.label}>Officer Name:</Text>
            <TextInput 
                placeholder="Enter Officer Name(s)" 
                onChangeText={updateOfficerName} 
                style = {styles.input}

            />
            <Text style={styles.label}>Officer Badge Number:</Text>
            <TextInput 
                placeholder="Enter Officer Badge Number(s)" 
                onChangeText={updateBadgeNum} 
                style = {styles.input}

            />
            
            <Text style={styles.label}>Description:</Text>
            <TextInput 
                placeholder="Enter A Description Of What Happened" 
                onChangeText={updateDescription}
                style = {styles.largeInput}
            />
            <Button 
                title="Submit Report"
                onPress={()=> handleSubmit()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 25,
        margin: 10,
        textAlign: 'center'
    },

    label: {
        fontSize: 15,
        marginLeft: 5    
    },

    input: {
        margin: 10,
        fontSize: 15,
        backgroundColor: '#fff',
    },

    largeInput: {
        margin: 10,
        fontSize: 15,
        backgroundColor: '#fff',
        height: 100
    }
})