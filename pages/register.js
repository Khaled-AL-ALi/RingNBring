import { Text, View, TouchableOpacity, Image } from 'react-native';
import styles from '../css/register';
import * as React from "react";
import { AntDesign } from '@expo/vector-icons';
import googleIcon from '../images/googleIcon.png';
import { useNavigation } from '@react-navigation/core';
import { NavigationContainer } from '@react-navigation/native';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { authentication } from '../firebase';

export default function Register() {

    const navigation = useNavigation()

    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(authentication, provider).then((result) => {
            console.log(result)
            navigation.navigate("Share your experience")
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