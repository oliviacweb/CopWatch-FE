import React from 'react'
import { Text, View, Button, StyleSheet} from 'react-native'
// import Footer from '../Footer/Footer'


const SubmissionConfirmation = ({navigation}) => {

    const handleClick = () => {
        navigation.navigate("Home")
    }

    return (
        <View>
            <Text style={styles.submitMessage}>Thank you - you're report has been successfully submitted.</Text>
            <Text style={styles.twitterMessage}>See your report on Twitter</Text>

            <View style={styles.button}>
                <Button
                    title="See on Twitter"
                    onPress={() => console.log('tweet')}
                />
            </View>

            <View style={styles.button}>
                <Button 
                    title="Return to Home"
                    onPress={() => handleClick()}
                />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    submitMessage: {
        fontSize: 30,
        textAlign: 'center',
        margin: 25,
    },
    twitterMessage: {
        fontSize: 20,
        textAlign: 'center',
        margin: 25,
    },
    button: {
        width: "90%",
        paddingLeft: 5,
        margin: 10,
        borderRadius: 30,
        height: 55,
    }
})

export default SubmissionConfirmation