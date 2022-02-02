import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default class TopBar extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text></Text>
                <Text
                    style={styles.title}
                >inTouch</Text>
                
                <MaterialCommunityIcons
                name="bell"
                color="purple"
                size={26}
                />
               
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        height: 52,
        flexDirection: 'row',
        backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 10,
        paddingRight: 10
    },
    title: {
        fontSize: 25, 
    }
});
