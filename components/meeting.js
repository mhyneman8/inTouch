import React from 'react';
import { View, Text, Button } from 'react-native';

export default class Meeting extends React.Component {
  render() {
    return (
      <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Back arrow</Text>
        <Text>Notifications</Text>
        
        <Text>Calendar meeting info</Text>
        <Text>Notes and edit option</Text>
        <Text>Share documents</Text>

        {/* button to join meeting */}
        <Button 
            title="VideoChat"
            onPress={() => this.props.navigation.navitate('VideoChat')}
        />
        {/* button for call settings */}
        
        <Button
          title="Fundraising"
          onPress={() => this.props.navigation.navigate('Fundraising')}
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