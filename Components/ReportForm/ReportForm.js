import React, { useState } from 'react'
import { View, TextInput, Text, StyleSheet, Button } from 'react-native'

export default function Report(props) {
    // const { address } = props.route.params

    const [ parties, updateParties ] = useState('')
    const [ date, updateDate ] = useState('')
    const [ time, updateTime ] = useState('')
    const [ location, updateLocation ] = useState('')
    const [ officerName, updateOfficerName ] = useState('')
    const [ badgeNum, updateBadgeNum ] = useState('')
    const [ description, updateDescription ] = useState('')

    // calls fn to create our report object...just logs it for now but will eventually tie in api call here.
    const handleSubmit = () => {
        const report = createReportObject()
        console.log(report)
    }

    // creates report object from hooks/state
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

    // updates location based off of gps and autofills location input
    const useCurrentLocation = () => {
        if (props.route.params.address !== ' ') {
            updateLocation(props.route.params.address)
        }
    }


    return (
        <View>
            <Text style={styles.title}>File a New Report</Text>

            <Text style={styles.label}>Involved Parties:</Text>
            <TextInput
                placeholder="Enter Involved Parties"
                value={parties}
                onChangeText={updateParties}
                style = {styles.input}
            />

            <Text style={styles.label}>Date:</Text>
            <TextInput
                placeholder="Enter Date"
                value={date}
                onChangeText={updateDate}
                style = {styles.input}

            />

            <Text style={styles.label}>Time:</Text>
            <TextInput
                placeholder="Enter Time"
                value={time}
                onChangeText={updateTime}
                style = {styles.input}

            />

            <Text style={styles.label}>Location:</Text>
            <TextInput
                placeholder='Enter Location'
                value={location}
                onChangeText={updateLocation}
                style = {styles.input}
            />
            <Button
                title="Use My Location"
                onPress={() => useCurrentLocation()}
            />

            <Text style={styles.label}>Officer Name:</Text>
            <TextInput
                placeholder="Enter Officer Name(s)"
                valuie={officerName}
                onChangeText={updateOfficerName}
                style = {styles.input}

            />

            <Text style={styles.label}>Officer Badge Number:</Text>
            <TextInput
                placeholder="Enter Officer Badge Number(s)"
                value={badgeNum}
                onChangeText={updateBadgeNum}
                style = {styles.input}

            />

            <Text style={styles.label}>Description:</Text>
            <TextInput
                placeholder="Enter A Description Of What Happened"
                value={description}
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
