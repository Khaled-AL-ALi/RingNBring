import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import styles from '../css/login';
import React from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigation } from '@react-navigation/core';
import { doc, setDoc } from 'firebase/firestore';
import { authentication, db } from '../firebase';
import { Formik } from 'formik';
import * as Yup from 'yup';

export default function Signup() {

    const navigation = useNavigation()

    const userInfo = {
        email: '',
        password: '',
    }

    const registerSchema = Yup.object().shape({
        email: Yup.string().email('Email should be an Email').required('Email required'),
        password: Yup.string().required('password required'),
    });

    const registerUser = (values) => {
        const email = values.email;
        const password = values.password;
        createUserWithEmailAndPassword(authentication, email, password)
            .then((result) => {
                console.log(result);
                navigation.navigate("Log In")
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

    return (

        <Formik initialValues={userInfo} validationSchema={registerSchema} onSubmit={(values) => registerUser(values)} >


            {({ values, handleChange, errors, handleBlur, touched, validateOnBlur, handleSubmit }) => (
                <>
                    <Text style={errors.email && touched.email ? { color: 'red' } : { color: 'black' }}>Email</Text>
                    <TextInput
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        style={errors.email && touched.email ? styles.InputFieldError : styles.InputField}
                        placeholder="Sara-nassif@gmail.com"
                    />
                    {
                        errors.email && touched.email ?
                            <Text style={styles.errorMessage}>{errors.email}</Text>
                            : null
                    }
                    <Text style={errors.email && touched.email ? { color: 'red' } : { color: 'black' }}>Password</Text>
                    <TextInput
                        onBlur={handleBlur('password')}
                        style={errors.password && touched.password ? styles.InputFieldError : styles.InputField}
                        placeholder="Sara123456"
                        onChangeText={handleChange('password')}
                        secureTextEntry
                    />
                    {
                        errors.password && touched.password ?
                            <Text style={styles.errorMessage}>{errors.password}</Text>
                            : null
                    }
                    <View style={styles.container}>
                        <TouchableOpacity style={styles.RegisterBtn} onPress={handleSubmit}>
                            <Text style={styles.RegisterText} >Signup</Text>
                        </TouchableOpacity>
                    </View>

                </>
            )}

        </Formik>

    );
}