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
            <Text>Involved Parties:</Text>
            <TextInput 
                placeholder="Enter Involved Parties" 
                onChangeText={updateParties} 
                style = {styles.input}

            />
            <Text>Date:</Text>
            <TextInput 
                placeholder="Enter Date" 
                onChangeText={updateDate} 
                style = {styles.input}

            />
            <Text>Time:</Text>
            <TextInput 
                placeholder="Enter Time" 
                onChangeText={updateTime} 
                style = {styles.input}

            />
            <Text>Location:</Text>
            <TextInput 
                placeholder="Enter Location" 
                onChangeText={updateLocation} 
                style = {styles.input}

            />
            <Text>Officer Name:</Text>
            <TextInput 
                placeholder="Enter Officer Name(s)" 
                onChangeText={updateOfficerName} 
                style = {styles.input}

            />
            <Text>Officer Badge Number:</Text>
            <TextInput 
                placeholder="Enter Officer Badge Number(s)" 
                onChangeText={updateBadgeNum} 
                style = {styles.input}

            />
            
            <Text>Description:</Text>
            <TextInput 
                placeholder="Enter A Description Of What Happened" 
                onChangeText={updateDescription}
                style = {styles.input}
            />
            <Button 
                title="Submit Report"
                onPress={()=> handleSubmit()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        margin: 10,
        fontSize: 15,
    }
})