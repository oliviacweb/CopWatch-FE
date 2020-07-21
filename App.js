import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from './Components/Home/Home'
import ReportForm from './Components/ReportForm/ReportForm'

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
          {/* <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#00BCD4" translucent = {true}/> */}
        {/* <View style={styles.container}> */}


          {/* <Text>App!</Text> */}
          <Stack.Screen 
            name="Home"
            component={Home}
          />
          <Stack.Screen 
            name="Report Form"
            component={ReportForm}
          />
          {/* <Home /> */}
        {/* </View> */}
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
