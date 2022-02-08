import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Alert, KeyboardAvoidingView } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import * as Calendar from 'expo-calendar';
import { StatusBar } from 'expo-status-bar';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
// import { createStackNavigator } from '@react-navigation/stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import NewEvent from './new-event';

// import VideoChat from './video-chat';
// import Meeting from './meeting';


// export default class CalendarScreen extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//         selectedStartDate: null,
//         };
//         this.onDateChange = this.onDateChange.bind(this);
//     }
        
    // onDateChange(date) {
    //     this.setState({
    //         selectedStartDate: date,
    //     });
    // }

    // render() {
    //     const { selectedStartDate } = this.state;
    //     const startDate = selectedStartDate 
    //         ? selectedStartDate.format('MM-DD-YYYY').toString() 
    //         : '';

// const Stack = createStackNavigator();

export default function CalendarScreen({ navigation }) {
    const [selectedStartDate, setSelectedStartDate] = useState(null);
    // const [granted, setGranted] = useState(false);
    const [eventIdInCalendar, setEventIdInCalendar] = useState('');
    const [addTask, setAddTask] = useState(false);
    const [eventShow, setEventShow] = useState(false);

    const [eventTitle, setEventTitle] = useState('');
    const [eventDate, setEventDate] = useState(startDate);
    const [eventStartTime, setEventStartTime] = useState('');
    const [eventEndTime, setEventEndTime] = useState('');
    const [eventInvitees, setEventInvitees] = useState([]);
    const [eventNotes, setEventNotes] = useState('');

    // const [friendNameText, setFriendNameText] = useState('');
    const startDate = selectedStartDate
        ? selectedStartDate.format('MM-DD-YY').toString()
        : '';

    // const openCalendarRequest = async () => {
    //     const {status} = await Permissions.askAsync(Permissions.CALENDAR)
    //     if (status === 'granted') {
    //         setGranted(true)
    //     }
    // }

    useEffect(() => {
        (async () => {
            const { status } = await Calendar.requestCalendarPermissionsAsync();
            
            if (status === 'granted') {
                const calendars = await Calendar.getCalendarsAsync(
                    Calendar.EntityTypes.EVENT
                );
                // console.log('here are your calendars');
                // console.log({ calendars });
            }
        })();
    }, []);

    async function getDefaultCalendarSource() {
        const calendars = await Calendar.getCalendarsAsync(
            Calendar.EntityTypes.EVENT
        );
        const defaultCalendars = calendars.filter(
            (each) => each.source.name === 'Default'
        );
        return defaultCalendars.length
            ? defaultCalendars[0].source
            : calendars[0].source;
    }
    
    async function createCalendar() {
        const defaultCalendarSource =
            Platform.OS === 'ios'
                ? await getDefaultCalendarSource()
                : { isLocalAccount: true, name: 'Expo Calendar' };
        const newCalendarID = await Calendar.createCalendarAsync({
            title: 'Expo Calendar',
            color: '#694fad',
            entityType: Calendar.EntityTypes.EVENT,
            sourceId: defaultCalendarSource.id,
            source: defaultCalendarSource,
            name: 'internalCalendarName',
            ownerAccount: 'personal',
            accessLevel: Calendar.CalendarAccessLevel.OWNER,
        });
    }

    const addNewEvent = async () => {
        if(selectedStartDate === null) {
            Alert.alert("Select Date first")
        } else {
            setAddTask(!addTask)
        }


        // try {
        //     const calendarId = await createCalendar().sourceId;

        //     const res = await Calendar.createEventAsync(calendarId, {
        //         endDate: (startDate),
        //         startDate: (startDate),
        //         title: 'Happy Birthday buddy ' + friendNameText,
        //     });
        //     Calendar.openEventInCalendar(res)
        //     Alert.alert('Event Created!');
        // } catch (e) {
        //     console.log(e);
        // }
    }

    const getEvents = async () => {
        const calendarId = await createCalendar();
        const events = await Calendar.getEventsAsync(calendarId, startDate)
        console.log(events);
    }

    return (
      <KeyboardAvoidingView style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
        <StatusBar style="auto"/>

        <CalendarPicker 
            todayBackgroundColor='#c9b6fc'
            selectedDayColor='#694fad'
            onDateChange={setSelectedStartDate} 
            onChange={getEvents}
        />
        
        {/* <Text style={styles.dateText} >Selected Date: {startDate}</Text> */}
        {/* <TextInput
            onChangeText={setFriendNameText}
            value={friendNameText}
            placeholder="Enter the name of your friend"
            style={styles.input}
        /> */}
        { addTask ? (
            <KeyboardAvoidingView style={styles.component}>
                <NewEvent addTask={addTask} 
                    setAddTask={setAddTask} 
                    startDate={startDate} 
                    setEventShow={setEventShow}
                    setEventTitle={setEventTitle}
                    eventTitle={eventTitle}
                    setEventStartTime={setEventStartTime}
                    eventStartTime={eventStartTime}
                    setEventEndTime={setEventEndTime}
                    eventEndTime={eventEndTime}
                    setEventInvitees={setEventInvitees}
                    eventInvitees={eventInvitees}
                    setEventNotes={setEventNotes}
                    eventNotes={eventNotes}
                />
            </KeyboardAvoidingView>
        ) : (
            <View>
                <MaterialCommunityIcons
                    style={ styles.add }
                    name="plus"
                    color="purple"
                    size={40}
                    onPress={addNewEvent}
                />  
            </View>
        )}

        { eventShow ? (
            <View style={styles.container}>
                <Text style={styles.text}>
                    {eventTitle}
                    {/*{eventStartTime}
                    {eventEndTime}
                    {eventInvitees}
                    {eventNotes} */}
                    Video Call - Joanna
                </Text>
                <Text style={styles.subtext}>
                    {startDate}
                </Text>
                <Text style={styles.subtext}>
                    7:00 pm - 7:30 pm
                </Text>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => navigation.navigate('Meeting')}
                >
                    <Text style={styles.buttonText}>Meeting Information</Text>
                </TouchableOpacity>
            </View>
        ) : (
            null
        )}
        

        {/* <Button 
            title={"Add to Calendar"}
            onPress={addNewEvent}
        /> */}
        

        {/* <Text>Show tasks at bottom when clicked on day</Text>
        <Text>Click meeting event to see details</Text> */}

        {/* <Stack.Navigator>
            <Stack.Screen
                name="VideoChat"
                component={VideoChat}
            />
            <Stack.Screen
                name="Meeting"
                component={Meeting}
            />
        </Stack.Navigator> */}

        {/* <Button 
            title="VideoChat"
            onPress={() => navigation.navigate('VideoChat')}
        /> */}

        {/* <Button
          title="Meeting"
          onPress={() => navigation.navigate('Meeting')}
        />  */}

      </KeyboardAvoidingView>
    )
  }

  const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
    },
    dateText: {
        margin: 16,
    },
    add: {
        backgroundColor: "#c9b6fc", 
        borderRadius: 30, 
        overflow: 'hidden',
        width: 60, 
        height: 60,
        margin: 15, 
        padding: 10,
        // position: 'absolute',
        // bottom: 0,
        // right: 0,
        // flex: 1,
    },
    component: {
        width: '90%'
    },
    container: {
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
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#694fad',
        width: '70%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20
        // textAlign: 'center'

    }, 
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    text: {
       color: 'black',
       textAlign: 'center',
       fontSize: 20
    },
    subtext: {
        textAlign: 'center',
        marginTop: 10
    }
  })
