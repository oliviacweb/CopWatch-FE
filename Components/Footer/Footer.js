import React from 'react'
import { ScrollView, Text, StyleSheet, Button, View, Div } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from "@react-navigation/stack";
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableHighlight } from 'react-native-gesture-handler';


// const Stack = createStackNavigator();

export default function Footer({ navigation, address }) {
    const homeIcon = <Icon name="home" size={60} color="#003366" />;
    const addReportIcon = <Icon style={styles.iconFileReport} name="edit" size={60} color="#003366" />;
    const viewIncidentsIcon = <Icon style={styles.iconViewReports} name="list-alt" size={60} color="#003366" />;
    const twitterIcon = <Icon name="twitter" size={60} color="#003366" />;
    const handleIncidentsView = () => {
        navigation.navigate("Incidents Container")
    }
    const handleHomeView = () => {
        navigation.navigate("Home")
    }
    const handleFileReportView = () => {
        navigation.navigate("Report Form", {
          address
        });
    }

    return (
      <View style={styles.footer}>
        <TouchableHighlight
          style={styles.navItem}
          onPress={() => handleHomeView()}
        >
          <View style={styles.button}>
            {homeIcon}
            <Text style={styles.iconTitle}>Home</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => handleFileReportView()}>
          <View style={styles.button}>
            {addReportIcon}
            <Text style={styles.iconTitle}>Log An Incident</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => handleIncidentsView()}>
          <View style={styles.button}>
            {viewIncidentsIcon}
            <Text style={styles.iconTitle}>View Incidents</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => handleIncidentsView()}>
          <View style={styles.button}>
            {twitterIcon}
            <Text style={styles.iconTitle}>Twitter</Text>
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
        height: 100,
        backgroundColor: '#fff',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: "center"
    },
    button: {
        width: '100%',
        textAlign: "center"
    },
    iconFileReport: {
        marginLeft: 20
    },
    iconViewReports: {
        marginLeft: 15
    },
    iconTitle: {
        textAlign: "center"
    },
    navItem: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
    }
})
