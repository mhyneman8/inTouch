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
                >
                    <Text>in</Text>
                    <Text style={{ fontWeight: 'bold' }}>
                        Touch
                    </Text>
                </Text>
                <MaterialCommunityIcons
                name="bell"
                activeColor="#f0edf6"
                inactiveColor="#3e2465"
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
        backgroundColor: '#694fad',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 10,
        paddingRight: 10
    },
    title: {
        fontSize: 25,
        color: 'white' 
    }
});
