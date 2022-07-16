import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import { authentication } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigation } from '@react-navigation/core';

export default function Login() {
    const navigation = useNavigation()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const registerUser = () => {
        createUserWithEmailAndPassword(authentication, email, password)
            .then((result) => {
                console.log(result);
            })
            .catch((error) => {
                console.log(error.message);
            })
    }

    const loginUser = () => {
        signInWithEmailAndPassword(authentication, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log('loged in !');
                navigation.navigate("Share your experience")
            })
            .catch((error) => {
                console.log(error.message);
            })
    }

    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>

                <Text>Email</Text>
                <TextInput
                    style={styles.InputField}
                    placeholder="Sara-nassif@gmail.com"
                    onChangeText={text => setEmail(text)}
                />

                <Text>Password</Text>
                <TextInput
                    style={styles.InputField}
                    placeholder="Sara123456"
                    onChangeText={text => setPassword(text)}
                    secureTextEntry
                />

                <View style={styles.btnContainer}>
                    <TouchableOpacity style={styles.LogInBtn} >
                        <Text style={styles.LoginText} onPress={loginUser}>LogIn</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.RegisterBtn} >
                        <Text style={styles.RegisterText} onPress={registerUser}>Register</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    RegisterBtn: {
        borderWidth: 1,
        width: "40%",
        alignItems: 'center',
        height: 50,
        justifyContent: "center",
        borderRadius: 10,
        borderColor: '#4487AF',
        margin: 7
    },
    RegisterText: {
        color: "#4487AF",
        fontSize: 18,
    },
    LogInBtn: {
        borderWidth: 1,
        width: "40%",
        alignItems: 'center',
        height: 50,
        justifyContent: "center",
        borderRadius: 10,
        borderColor: '#4487AF',
        margin: 7,
        backgroundColor: '#4487AF'
    },
    LoginText: {
        color: "white",
        fontSize: 18,
    },
    btnContainer: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'center',
        marginTop: 25
    },
    InputField: {
        borderBottomWidth: 1,
        borderColor: '#E5E9F2',
        borderRadius: 5,
        height: 75
    },
    container: {
        display: 'flex',
        alignItems: 'center'
    },
    subContainer: {
        width: '90%',
        marginTop: 20
    }


});



