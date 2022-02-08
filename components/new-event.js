import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function NewEvent(props) {
    // const [eventTitle, setEventTitle] = useState('');
    // const [eventDate, setEventDate] = useState(props.startDate);
    // const [eventStartTime, setEventStartTime] = useState('');
    // const [eventEndTime, setEventEndTime] = useState('');
    // const [eventInvitees, setEventInvitees] = useState('');
    // const [eventNotes, setEventNotes] = useState('');

    const closeProject = () => {
        // console.log('close');
        props.setAddTask(!props.addTask)
        props.setEventTitle('');
        props.setEventInvitees('');
        props.setEventNotes('');
      }

    const eventAdded = () => {
        if(props.eventTitle === '') {
        alert("Event must have a title")
      } else {
        props.setEventInvitees((eventInvitees) => 
            [...eventInvitees, {email: eventInvitees}]
        )
        props.setEventTitle('');
        props.setEventInvitees('');
        props.setEventNotes('');
        props.setAddTask(!props.addTask);
        alert("Event has been added");
        props.setEventShow(true);
    }
}

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={[styles.inputContainer, styles.ScrollView]}>
                <MaterialCommunityIcons
                    name="close"
                    color="grey"
                    size={30}
                    onPress={closeProject}
                />
                <TextInput
                    style={styles.input}
                    value={props.eventTitle}
                    placeholder={"Enter Event Name"}
                    onChangeText={props.setEventTitle}
                />
                
                <TextInput
                    style={styles.input}
                    value={props.startDate}
                    onChangeText={props.setEventDate}
                    placeholder={props.startDate}
                /> 

                <TextInput
                    style={styles.input}
                    value={props.eventStartTime}
                    onChangeText={props.setEventStartTime}
                    placeholder={'7:00 pm'}
                    keyboardType='numeric'
                /> 
                <TextInput
                    style={styles.input}
                    value={props.eventEndTime}
                    onChangeText={props.setEventEndTime}
                    placeholder={"8:00 pm"}
                    keyboardType='numeric'
                /> 
                        
                <TextInput
                    style={styles.input}
                    value={props.eventInvitees}
                    onChangeText={props.setEventInvitees}
                    placeholder={"Invite guests"}
                    multiline
                />

                <TextInput
                    style={styles.input}
                    value={props.eventNotes}
                    onChangeText={props.setEventNotes}
                    placeholder={"Add Event Notes"}
                    multiline
                />

                <TouchableOpacity 
                    title="Submit"
                    style={styles.button }
                    onPress={eventAdded}
                >
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
            </ScrollView>
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%'
    },
    inputContainer: {
        flex: 1,
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        backgroundColor: 'white',
        borderRadius: 8,
        paddingVertical: 45,
        paddingHorizontal: 25,
        width: '100%',
        marginVertical: 10,
        margin: 5,
        textAlign: 'center',
      },
      input: {
          height: 40,
          width: '90%',
          margin: 12,
          borderWidth: 1,
          justifyContent: 'center', 
          alignItems: 'center',
          borderRadius: 8,
          padding: 10,
          
      },
      scrollView: {
        marginHorizontal: 20,
        width: '100%',
        height: '100%'
      },
      button: {
        backgroundColor: '#694fad',
        width: '70%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
      }, 
      buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
        },
})
