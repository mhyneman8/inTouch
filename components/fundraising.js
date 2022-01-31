import React from 'react';
import { View, Text, Button } from 'react-native';

export default class Fundraising extends React.Component {
  render() {
    return (
      <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Menu</Text>
        <Text>Title</Text>
        <Text>Notification</Text>

        <Text>Project Pics and progress bar</Text>
        <Text>Click on project to see updates and description of fundraising project</Text>

        <Text>Dashboard</Text>
        <Button title="add">+</Button>
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