import React, { useState } from 'react'
import { View, TextInput, Text, StyleSheet, Button } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
export default function Report(props) {
    const { address } = props.route.params
    
    const [ parties, updateParties ] = useState('')
    // option to automatically get?
    const [ date, updateDate ] = useState('')
    // option to automatically get? 
    const [ time, updateTime ] = useState('')
    // option to automatically get? 
    const [ location, updateLocation ] = useState(address)
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
        
            <KeyboardAwareScrollView 
                style={{ backgroundColor: '#003366' }}
                resetScrollToCoords={{x: 0, y: 0}}
                contentContainerStyle={styles.container}
                scrollEnabled={true}>

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
                    placeholder={address} 
                    value={location}
                    onChangeText={updateLocation} 
                    style = {styles.input}

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
                
                <Text style={styles.label}>Please Provide a Detailed Summary:</Text>
                <TextInput 
                    placeholder="Enter A Description Of What Happened" 
                    value={description}
                    onChangeText={updateDescription}
                    style = {styles.largeInput}
                />
                <View style={styles.submitButton}>
                    <Button 
                        color='#fff'
                        title="Submit Report"
                        onPress={()=> handleSubmit()}
                    />
                </View>
            </KeyboardAwareScrollView>
    )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    margin: 10,
    textAlign: "center",
    color: "#003366",
  },

  label: {
    fontSize: 15,
    marginLeft: 10,
    color: "white",
    flex: 1,
    justifyContent: "flex-end"
  },

  input: {
    margin: 10,
    fontSize: 15,
    height: 33,
    backgroundColor: "#fff",
    paddingLeft: 5,
    width: "90%",
  },

  largeInput: {
    margin: 10,
    fontSize: 15,
    backgroundColor: "#fff",
    height: 100,
    paddingLeft: 5,
    width: "90%",
  },

  container: {
    backgroundColor: "#003366",
    flex: 1,
    marginLeft: 14,
    // alignItems: "center",
    justifyContent: "flex-start",
  },

  background: {
    backgroundColor: "#003366",
    padding: 24,
    flex: 1,
    justifyContent: "flex-start",
  },

  submitButton: {
    marginTop: 12,
    width: "88%",
    marginLeft: "6%",
    borderRadius: 30,
    height: 55,
    color: "#fff",
    backgroundColor: "#0018f9",
    borderColor: "#FFF",
    borderStyle: "solid",
    borderWidth: 2,
    display: "flex",
    justifyContent: "center",
    fontSize: 40,
  },
});