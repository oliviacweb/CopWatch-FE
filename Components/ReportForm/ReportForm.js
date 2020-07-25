import React, { useState, useEffect } from 'react'
import { View, TextInput, Text, StyleSheet, Button, Platform, ScrollView, Image, TouchableOpacity } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { postIncident } from '../../apiCalls'
import DatePicker from 'react-native-datepicker';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as ImagePicker from 'expo-image-picker';
import DateTimePickerModal from "react-native-modal-datetime-picker";
// import ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';


export default function Report(props) {
    const [ parties, updateParties ] = useState('')
    const [ date, updateDate ] = useState('')
     const [isTimePickerVisible, setTimePickVis] = useState(false);
    // const [isTimePickerVisible, setTimePickVis] = useState(false);
    const [ time, updateTime ] = useState('')
    const [ location, updateLocation ] = useState('')
    const [ officerName, updateOfficerName ] = useState('')
    const [ badgeNum, updateBadgeNum ] = useState('')
    const [ description, updateDescription ] = useState('')
    const [ image, updateImage ] = useState('')

    // calls fn to create our report object and then posts the incident
    const handleSubmit = () => {
        const report = createReportObject()
        postIncident(report)
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


//time
const showTimePicker = () => {
   setTimePickVis(true);
 };

 const hideTimePicker = () => {
   setTimePickVis(false);
 };



 const handleConfirm = (time) => {
   hideTimePicker();
   setTime(time)


 };

 const setTime = (time) => {
   let fullTime = new Date(time)
   let hour = fullTime.getUTCHours()
   let minute = fullTime.getUTCMinutes()
   let hourMinTime = hour+":"+minute
   updateTime(hourMinTime)


 }


    //date
// const renderPicker = () => {
//   console.log('isthis runnningggg')
// return (
// <DatePicker
// style={{ width: 200 }}
// date={date}
// mode="date"
// placeholder="Select date"
// format="YYYY-MM-DD"
// minDate="2016-05-01"
// maxDate="2020-12-12"
// confirmBtnText="OK"
// cancelBtnText="Cancel"
// onDateChange={updateDate}
// customStyles={{
//           dateIcon: {
//             position: 'absolute',
//             left: 0,
//             top: 4,
//             marginLeft: 0
//           },
//           dateInput: {
//             marginLeft: 36
//           }
//         }}
// />
// );
//
// }

    // updates location based off of gps and autofills location input
    const useCurrentLocation = () => {
        if (props.route.params.address !== ' ') {
            updateLocation(props.route.params.address)
        }
    }

    // image
    const pickImage = async () => {
      try {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
         if (!result.cancelled) {
          updateImage(result.uri);
          // updateImage(result.uri);
        }
        } catch (error) {
        console.log(error);
      }
      console.log('image', image)
    }


    const getPermissionAsync = async () => {
      if (Constants.platform.ios) {
        const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    }

    useEffect(() => {
      getPermissionAsync()
    , []})


    return (
      <KeyboardAwareScrollView
        style={{ backgroundColor: "#003366" }}
        resetScrollToCoords={{ x: 0, y: 0 }}
        contentContainerStyle={styles.container}
        scrollEnabled={true}
      >
      <ScrollView>
        <Text style={styles.title}>File a New Report</Text>
        <Text style={styles.label}>Involved Parties:</Text>
        <TextInput
          placeholder="Enter Involved Parties"
          value={parties}
          onChangeText={updateParties}
          style={styles.input}
        />

        <Text style={styles.label}>Date:</Text>
          <DatePicker
          style={styles.input}
          date={date}
          mode="date"
          placeholder="Select date"
          format="YYYY-MM-DD"
          minDate="2016-05-01"
          maxDate={new Date}
          confirmBtnText="OK"
          cancelBtnText="Cancel"
          onDateChange={updateDate}
          customStyles={{
                    dateIcon: {
                      position: 'absolute',
                      left: 0,
                      top: 4,
                      marginLeft: 0
                    },
                    dateInput: {
                      marginLeft: 36
                    }
                  }}
          />
      <View>
      <Text style={styles.label}>Time: {time}</Text>
     <Button title="Select Time" onPress={showTimePicker} />
     <DateTimePickerModal
       isVisible={isTimePickerVisible}
       mode="time"
       time={time}
       value="time"
       onConfirm={handleConfirm}
       onCancel={hideTimePicker}
     />
   </View>




        <Text style={styles.label}>Location:</Text>
        <TextInput
          placeholder="Enter Location"
          value={location}
          onChangeText={updateLocation}
          style={styles.input}
        />
        <Button title="Use My Location" onPress={() => useCurrentLocation()} />
        <Text style={styles.label}>Officer Name:</Text>
        <TextInput
          placeholder="Enter Officer Name(s)"
          valuie={officerName}
          onChangeText={updateOfficerName}
          style={styles.input}
        />
        <Text style={styles.label}>Officer Badge Number:</Text>
        <TextInput
          placeholder="Enter Officer Badge Number(s)"
          value={badgeNum}
          onChangeText={updateBadgeNum}
          style={styles.input}
        />

        <Text style={styles.label}>Please Provide a Detailed Summary:</Text>
        <TextInput
          placeholder="Enter A Description Of What Happened"
          value={description}
          onChangeText={updateDescription}
          style={styles.largeInput}
          multiline={true}
        />

        <View>
        <Button title="Add an Image" onPress={pickImage} />
        {/* <Image source={{image}} /> */}
        {image !== '' && <Image source={{uri: image}} style={{ width: 150, height: 150 }} />}
        </View>

          <View style={styles.submitButton}>
            <Button
              color={Platform.OS === "ios" ? "#fff" : null}
              title="Submit Report"
              onPress={() => handleSubmit()}
            />
          </View>
        </ScrollView>
      </KeyboardAwareScrollView>
    );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    margin: 10,
    textAlign: "center",
    color: "#fff",
  },

  label: {
    fontSize: 15,
    marginLeft: 10,
    color: "#fff",
    flex: 1,
    justifyContent: "flex-end",
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
    justifyContent: "flex-start",
  },

  background: {
    backgroundColor: "#003366",
    padding: 24,
    flex: 1,
    justifyContent: "flex-start",
  },

  submitButton: {
    // marginTop: 5,
    width: "90%",
    paddingLeft: 5,
    margin: 10,
    borderRadius: 30,
    height: 55,
    backgroundColor: Platform.OS === "ios" ? "#0018f0" : null,
    borderColor: Platform.OS === "ios" ? "#FFF" : null,
    borderStyle: Platform.OS === "ios" ? "solid" : null,
    borderWidth: Platform.OS === "ios" ? 2 : null,
    display: "flex",
    justifyContent: "center",
  },
});
