import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from './Components/Home/Home'
import ReportForm from './Components/ReportForm/ReportForm'
import IncidentsContainer from './Components/Incidents/IncidentsContainer/IncidentsContainer'
import IncidentDetails from './Components/Incidents/IncidentDetails/IncidentDetails'
import SubmissionConfirmation from './Components/SubmissionConfirmation/SubmissionConfirmation'

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
          <Stack.Screen 
            name="Home"
            component={Home}
          />
          <Stack.Screen 
            name="Report Form"
            component={ReportForm}
          />
          <Stack.Screen
            name="Incidents Container"
            component={IncidentsContainer}
          />
          <Stack.Screen 
            name="Submission Confirmation"
            component={SubmissionConfirmation}
          />
          <Stack.Screen
            name="Incident Details"
            component={IncidentDetails}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
