import React from 'react'
import { ScrollView, Text, StyleSheet, Button, View, Div } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from "@react-navigation/stack";
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableHighlight } from 'react-native-gesture-handler';

const homeIcon = <Icon name="home" size={60} color="#003366" />;
const addReportIcon = <Icon name="edit" size={60} color="#003366" />;
const viewIncidentsIcon = <Icon name="list-alt" size={60} color="#003366" />;
const twitterIcon = <Icon name="twitter" size={60} color="#003366" />;

// const Stack = createStackNavigator();

export default function Footer({ navigation }) {
    const handleIncidentsView = () => {
        navigation.navigate("Incidents Container")
    }
    const handleHomeView = () => {
        navigation.navigate("Home")
    }
    const handleFileReportView = () => {
        navigation.navigate("Report Form");
    }

    return (
      <View style={styles.footer}>
        <TouchableHighlight onPress={() => handleHomeView()}>
            <View style={styles.button}>
                {homeIcon}
                <Text>Home</Text>
            </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => handleFileReportView()}>
          <View style={styles.button}>
            {addReportIcon}
            <Text>File A Report</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => handleIncidentsView()}>
          <View style={styles.button}>
            {viewIncidentsIcon}
            <Text>View Incidents</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
}

const styles = StyleSheet.create({
    footer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: '15%',
        // display: 'flex',
        backgroundColor: '#fff',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    button: {
        // backgroundColor: 'red',
        width: '100%',
    },
    icon: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"  
    },
    iconTitle: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
})