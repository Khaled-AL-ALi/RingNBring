import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import styles from '../css/login';
import React, { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigation } from '@react-navigation/core';
import { doc, setDoc } from 'firebase/firestore';
import { authentication, db } from '../firebase';


import { Formik } from 'formik';
import * as Yup from 'yup';

export default function Login() {

    const navigation = useNavigation()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')



    const registerUser = () => {
        createUserWithEmailAndPassword(authentication, email, password)
            .then((result) => {
                console.log(result);
                setDoc(doc(db, "accounts", authentication.currentUser.uid), {
                    fullName: "",
                    phoneNumber: "",
                    eamil: email
                })
            })
            .catch((error) => {
                console.log(error.message);
            })
    }

    const loginUser = async () => {
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

    // const LoginSchema = Yup.object().shape({
    //     email: Yup.string().email('Email should be an Email').required('Email required'),
    //     password: Yup.string().required('password required'),
    // });

    // const userInfo = {
    //     email: '',
    //     password: '',
    // }



    return (
        // <Formik initialValues={userInfo} validationSchema={LoginSchema}>
        //     {({ values, handleChange, errors, handleBlur, touched }) => {
        //         const { email, password } = values
        //         console.log(values);
        //         return <>
        <View style={styles.container}>
            <View style={styles.subContainer}>

                <Text>Email</Text>
                <TextInput
                    // onBlur={handleBlur(email)}
                    // value={values.email}
                    // error={Boolean(touched.email && errors.email)}
                    style={styles.InputField}
                    placeholder="Sara-nassif@gmail.com"
                    onChangeText={(Text) => setEmail(Text)}

                />

                <Text>Password</Text>
                <TextInput
                    // value={values.password}
                    // onBlur={handleBlur(password)}
                    // error={Boolean(touched.password && errors.password)}
                    style={styles.InputField}
                    placeholder="Sara123456"
                    onChangeText={(Text) => setPassword(Text)}
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
        //         </>
        //     }}

        // </Formik>

    );
}