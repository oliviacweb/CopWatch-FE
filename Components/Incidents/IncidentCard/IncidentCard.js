import React from 'react'
import { View, Text, StyleSheet, Button, ImageBackground } from 'react-native'
// import IncidxentsContainer from '../IncidentsContainer/IncidentsContainer'


export default function IncidentCard(props) {
  const { incident } = props
  // const { navigation } = props
  
      const handleDetailsView = () => {
        props.navigation.navigate("Incident Details", {
            incident
        })
    }
    

    return (
        <View style={styles.card}> 
        {/* <ImageBackground source={incident.image} > */}
            <Text style={styles.details}>Date: {incident.created_date}</Text>
            <Text style={styles.details}>City: {incident.city}, {incident.state} {incident.zip_code}</Text>
            <Text style={styles.description}>Description: {incident.description}</Text>
            <Button 
              title='Incident Details'
              onPress={handleDetailsView}
            />
        {/* </ImageBackground> */}
       </View>
    )
}

const styles = StyleSheet.create({
    card: {
      fontSize: 25,
      padding: 10,
      marginLeft: 10,
      marginRight: 10,
      marginTop: 10,
      borderStyle: "solid",
      borderRadius: 10,
      backgroundColor: "#fff",
      borderWidth: 1,
      borderColor: "black"
    },
    details: {
      fontSize: 20,
    },
    description: {
      fontStyle: 'italic',
      fontSize: 18,
    }
 
})