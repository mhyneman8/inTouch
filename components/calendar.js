import React from 'react';
import { View, Text, Button } from 'react-native';

export default class Calendar extends React.Component {
  render() {
    return (
      <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>menu</Text>
        <Text>Title</Text>
        <Text>Notifications</Text>
        
        <Text>Calendar</Text>
        <Text>Show tasks at bottom when clicked on day</Text>
        <Text>Click meeting event to see details</Text>
        
        <Button
          title="Dashboard"
          onPress={() => this.props.navigation.navigate('Dashboard')}
        />
        <Button
          title="Connect"
          onPress={() => this.props.navigation.navigate('Connect')}
        />
        <Button
          title="Calendar"
          onPress={() => this.props.navigation.navigate('Calendar')}
        />
      </View>
    )
  }
}