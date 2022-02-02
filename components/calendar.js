import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import * as Calendar from 'expo-calendar';
import { StatusBar } from 'expo-status-bar';
import { TextInput } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';

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

const Stack = createStackNavigator();

export default function CalendarScreen({ navigation }) {
    const [selectedStartDate, setSelectedStartDate] = useState(null);
    // const [granted, setGranted] = useState(false);
    const [eventIdInCalendar, setEventIdInCalendar] = useState('');

    const [friendNameText, setFriendNameText] = useState('');
    const startDate = selectedStartDate
        ? selectedStartDate.format('MM-DD-YY').toString()
        : '';

    const openCalendarRequest = async () => {
        const {status} = await Permissions.askAsync(Permissions.CALENDAR)
        if (status === 'granted') {
            setGranted(true)
        }
    }

    useEffect(() => {
        (async () => {
            const { status } = await Calendar.requestCalendarPermissionsAsync();
            
            if (status === 'granted') {
                const calendars = await Calendar.getCalendarsAsync(
                    Calendar.EntityTypes.EVENT
                );
                console.log('here are your calendars');
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
            color: 'blue',
            entityType: Calendar.EntityTypes.EVENT,
            sourceId: defaultCalendarSource.id,
            source: defaultCalendarSource,
            name: 'internalCalendarName',
            ownerAccount: 'personal',
            accessLevel: Calendar.CalendarAccessLevel.OWNER,
        });
    }

    const addNewEvent = async () => {
        try {
            const calendarId = await createCalendar().sourceId;

            const res = await Calendar.createEventAsync(calendarId, {
                endDate: (startDate),
                startDate: (startDate),
                title: 'Happy Birthday buddy ' + friendNameText,
            });
            Calendar.openEventInCalendar(res)
            Alert.alert('Event Created!');
        } catch (e) {
            console.log(e);
        }
    }

    const getEvents = async () => {
        const calendarId = await createCalendar();
        const events = await Calendar.getEventsAsync(calendarId, startDate)
        console.log(events);
    }

    return (
      <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
        <StatusBar style="auto"/>

        <CalendarPicker 
            onDateChange={setSelectedStartDate} 
            onChange={getEvents}
        />
        
        <Text style={styles.dateText} >Selected Date: {startDate}</Text>
        <TextInput
            onChangeText={setFriendNameText}
            value={friendNameText}
            placeholder="Enter the name of your friend"
            style={styles.input}
        />
        <Button 
            title={"Add to Calendar"}
            onPress={addNewEvent}
        />

        <Text>Show tasks at bottom when clicked on day</Text>
        <Text>Click meeting event to see details</Text>

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

      </View>
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
  })
