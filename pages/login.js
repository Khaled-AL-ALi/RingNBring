import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import styles from '../css/login';
import React from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigation } from '@react-navigation/core';
import { authentication } from '../firebase';
import { Formik } from 'formik';
import * as Yup from 'yup';

export default function Login() {

    const navigation = useNavigation()

    const userInfo = {
        email: '',
        password: '',
    }

    const LoginSchema = Yup.object().shape({
        email: Yup.string().email('Email should be an Email').required('Email required'),
        password: Yup.string().required('password required'),
    });

    const loginUser = (values) => {
        const email = values.email;
        const password = values.password;
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
        <Formik initialValues={userInfo} validationSchema={LoginSchema} onSubmit={(values) => loginUser(values)} >

            {({ values, handleChange, errors, handleBlur, touched, handleSubmit }) => (
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
                            <Text style={styles.RegisterText} >LogIn</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.subContainer}>
                        <Text style={styles.noAccount}>dont have account?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Create New Account')}>
                            <Text style={styles.createNew}>Create New</Text>
                        </TouchableOpacity>
                    </View>
                </>
            )}
        </Formik>
    );
}