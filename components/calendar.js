import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import * as Calendar from 'expo-calendar';
import { StatusBar } from 'expo-status-bar';
import { TextInput } from 'react-native-gesture-handler';

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
        sourceId: defaultCalendarSource,
        name: 'internalCalendarName',
        ownerAccount: 'personal',
        accessLevel: Calendar.CalendarAccessLevel.OWNER,
    });
}

export default function CalendarScreen() {
    const [selectedStartDate, setSelectedStartDate] = useState(null);
    const [friendNameText, setFriendNameText] = useState('');
    const startDate = selectedStartDate
        ? selectedStartDate.format('MM-DD-YY').toString()
        : '';

    useEffect(() => {
        (async () => {
            const { status } = await Calendar.requestCalendarPermissionsAsync();
            if ( status === 'granted' ) {
                const calendars = await Calendar.getCalendarsAsync(
                    Calendar.EntityTypes.EVENT
                );
                console.log('here are your calendars');
                // console.log({ calendars });
            }
        })();
    })

    const addNewEvent = async () => {
        try {
            const calendarId = await createCalendar();

            const res = await Calendar.createEventAsync(calendarId, {
                endDate: getAppointmentDate(startDate),
                startDate: getAppointmentDate(startDate),
                title: 'Happy Birthday buddy ' + friendNameText,
            });
            Alert.alert('Event Created!');
        } catch (e) {
            console.log(e);
        }
    }

    return (
      <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
        <StatusBar style="auto"/>

        <TextInput
            onChangeText={setFriendNameText}
            value={friendNameText}
            placeholder="Enter the name of your friend"
            style={styles.input}
        />

        <Text>menu</Text>
        <Text>Title</Text>
        <Text>Notifications</Text>

        <CalendarPicker 
            onDateChange={setSelectedStartDate} 
        />
        
        <Text style={styles.dateText} >Selected Date: {startDate}</Text>
        
        <Button 
            title={"Add to Calendar"}
            onPress={addNewEvent}
        />

        <Text>Show tasks at bottom when clicked on day</Text>
        <Text>Click meeting event to see details</Text>

        <Button 
            title="VideoChat"
            onPress={() => this.props.navigation.navigate('VideoChat')}
        />

        <Button
          title="Meeting"
          onPress={() => this.props.navigation.navigate('Meeting')}
        />

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
