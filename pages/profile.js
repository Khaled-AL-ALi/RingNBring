import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import styles from '../css/profile';
import React, { useState } from 'react';
import Modal from "react-native-modal";
import { signOut } from "firebase/auth";
import { authentication, db } from '../firebase';
import { doc, updateDoc } from 'firebase/firestore';
import { useNavigation } from '@react-navigation/core';
import { Formik } from 'formik';
import * as Yup from 'yup';

export default function Profile() {

    const navigation = useNavigation()

    const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };


    const userInfo = {
        fullName: '',
        phoneNumber: '',
        email: authentication.currentUser.email
    }

    const ProfileSchema = Yup.object().shape({
        fullName: Yup.string().required('fullName required'),
    });


    // const [fullName, setFullname] = useState("");
    // const [phoneNumber, setphoneNumber] = useState("");
    // const email = authentication.currentUser.email;


    const Logout = async () => {

        signOut(authentication).then((result) => {
            console.log(result);
            navigation.navigate("Login or sign up")
        }).catch((error) => {
            console.log(error.message);
        });
    }

    const updateProfile = async (values) => {
        const fullName = values.fullName;
        const phoneNumber = values.phoneNumber;
        const eamil = authentication.currentUser.email;
        try {
            await updateDoc(doc(db, "accounts", authentication.currentUser.uid), {
                fullName: fullName,
                phoneNumber: phoneNumber,
                eamil: eamil
            })
            console.log('Profile updated');
            setModalVisible(!isModalVisible);
        } catch (err) {
            console.log(err.message)
        }
    }

    return (
        <Formik initialValues={userInfo} validationSchema={ProfileSchema} onSubmit={(values) => updateProfile(values)} >

            {({ values, handleChange, errors, handleBlur, touched, handleSubmit }) => (
                <>
                    <View style={styles.container}>
                        <Text style={styles.savebtn} onPress={toggleModal}>save</Text>
                        <View style={styles.subContainer}>
                            <Text style={errors.fullName && touched.fullName ? { color: 'red' } : { color: 'black' }}>Full name</Text>
                            <TextInput
                                style={errors.fullName && touched.fullName ? styles.inputFieldError : styles.inputField}
                                placeholder="Sara nassif"
                                onChangeText={handleChange('fullName')}
                                onBlur={handleBlur('fullName')}
                            />
                            {
                                errors.fullName && touched.fullName ?
                                    <Text style={styles.errorMessage}>{errors.fullName}</Text>
                                    : null
                            }
                            <Text>phone number (optional)</Text>
                            <TextInput
                                style={styles.inputField}
                                placeholder="Enter you phone number"
                                keyboardType="numeric"
                                onChangeText={handleChange('phoneNumber')}
                                onBlur={handleBlur('phoneNumber')}

                            />
                            <Text>Email adress</Text>
                            <TextInput
                                style={styles.inputField}
                                placeholder="Sara-nassif@gmail.com"
                                value={values.email}
                            />
                            <TouchableOpacity >
                                <Text style={styles.logOutText} onPress={Logout}>Logout</Text>
                            </TouchableOpacity>
                        </View>

                        <Modal isVisible={isModalVisible}>
                            <View style={styles.modalContainer}>
                                <Text style={styles.discardText}>Discard changes</Text>
                                <Text style={styles.discriptionText}>are you sure  want to discard changes ? By confirming all the changes will be lost </Text>
                                <View style={styles.btnContainer}>
                                    <TouchableOpacity style={styles.YesBtn} onPress={handleSubmit}>
                                        <Text style={styles.YesText}>Yes</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.noBtn} onPress={toggleModal}>
                                        <Text style={styles.NoText}>No</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </Modal>

                    </View>
                </>
            )}
        </Formik>
    );
}