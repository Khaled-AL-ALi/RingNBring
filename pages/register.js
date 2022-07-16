import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import * as React from "react";
import { AntDesign } from '@expo/vector-icons';
import googleIcon from '../images/googleIcon.png';
import { useNavigation } from '@react-navigation/core';
import { NavigationContainer } from '@react-navigation/native';
import { signInWithPopup } from "firebase/auth";
import { authentication, provider } from '../firebase';

export default function Register() {

    const navigation = useNavigation()

    const signInWithGoogle = () => {
        signInWithPopup(authentication, provider)
            .then((result) => {
                console.log(result)
            }).catch((error) => {
                console.log(error)
            });
    }

    return (
        <NavigationContainer independent={true}>
            <View style={styles.container}>
                <Text style={styles.begin_title}>Login to have  the full  experience and track your orders</Text>

                <TouchableOpacity style={styles.faceBookBtn} >
                    <AntDesign name="facebook-square" size={36} style={styles.facebookIcon} />
                    <Text style={styles.faceBookText}>Continue with Facebook</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.googleBtn} onPress={signInWithGoogle}>
                    <Image source={googleIcon} style={styles.googleImage} />
                    <Text style={styles.googleText}>Continue with Google</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.emailBtn} onPress={() => navigation.navigate('Create New Account')}>
                    <Text style={styles.emailText}>Continue with email</Text>
                </TouchableOpacity>

            </View>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fAfBfc'
    },
    begin_title: {
        textAlign: 'center',
        fontSize: 23,
        padding: (0, 25, 0, 25),
    },
    faceBookBtn: {
        borderWidth: 1,
        width: 320,
        alignItems: 'center',
        height: 65,
        justifyContent: "center",
        backgroundColor: '#4267B2',
        borderRadius: 10,
        borderColor: '#4267B2',
        display: "flex",
        flexDirection: 'row',
    },
    emailBtn: {
        borderWidth: 1,
        width: 320,
        alignItems: 'center',
        height: 65,
        justifyContent: "center",
        borderRadius: 10,
        borderColor: '#4487AF',
    },
    googleBtn: {
        borderWidth: 1,
        width: 320,
        alignItems: 'center',
        height: 65,
        justifyContent: "center",
        borderRadius: 10,
        borderColor: '#4267B2',
        marginBottom: 13,
        marginTop: 13,
        display: "flex",
        flexDirection: 'row',
    },
    facebookIcon: {
        marginRight: 15,
        color: 'white',
    },
    faceBookText: {
        color: "white",
        fontSize: 18
    },
    googleImage: {
        width: 30,
        height: 30,
        marginRight: 15
    },
    googleText: {
        fontSize: 18
    },
    emailText: {
        color: "#4487AF",
        fontSize: 18
    }
});