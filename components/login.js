import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/core';
// import { auth } from '../services/firebase';

const LoginScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigation = useNavigation();

    // useEffect(() => {
    //     const unsubscribe = auth.onAuthStateChanged(user => {
    //         if(user) {
    //             navigation.replace('Home')
    //         }
    //     })
    //     return unsubscribe
    // }, [])

    // const handleSignup = () => {
    //     auth
    //     .createUserWithEmailAndPassowrd(email, password)
    //     .then(userCredentials => {
    //         const user = userCredentials.user;
    //         console.log('Registered with: ', user.email);
    //     })
    //     .catch(error => alert(error.message))
    // }

    // const handleLogin = () => {
    //     auth
    //     .signInWithEmailAndPassword(email, password)
    //     .then(userCredentials => {
    //         const user = userCredentials.user;
    //         console.log('Logged in with: ', user.email);
    //     })
    //     .catch(error => alert(error.messsage))
    // }

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior="padding"
        >
            <Image source={require('../assets/logo.png')} style={styles.logo} />
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder='Email'
                    value={email}
                    onChangeText={text => setEmail(text)}
                    style={styles.input}
                />
                <TextInput
                    placeholder='Password'
                    value={password}
                    onChangeText={text => setPassword(text)}
                    style={styles.input}
                    secureTextEntry
                />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    // onPress={handleLogin}
                    onPress={() => navigation.navigate('Connect')}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>
                        Login
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    // onPress={handleSignup}
                    style={[styles.button, styles.buttonOutline]}
                >
                    <Text style={styles.buttonOutlineText}>
                        Register
                    </Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
    inputContainer: {
        width: '80%'
    },
    input: {
        backgroundColor: '#fff',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
    },
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    button: {
        backgroundColor: '#523d87',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonOutline: {
        backgroundColor: '#fff',
        marginTop: 5,
        borderColor: '#523d87',
        borderWidth: 2,
    },
    buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
    },
    buttonOutlineText: {
    color: '#523d87',
    fontWeight: '700',
    fontSize: 16,
    },
    logo: {
        width: '80%',
        height: 200,
        resizeMode: 'contain',
        marginBottom: 40
    }
})