import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

import React, { useState } from 'react';
import Modal from "react-native-modal";
export default function Profile() {
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <Text>Full name</Text>
                <TextInput
                    style={styles.inputField}
                    placeholder="Sara nassif"
                />
                <Text>phone number (optional)</Text>
                <TextInput
                    style={styles.inputField}
                    placeholder="Enter you phone number"
                    keyboardType="numeric"
                />
                <Text>Email adress</Text>
                <TextInput
                    style={styles.inputField}
                    placeholder="Sara-nassif@gmail.com"
                />
                <TouchableOpacity onPress={toggleModal}>
                    <Text style={styles.logOutText}>Logout</Text>
                </TouchableOpacity>
            </View>

            <Modal isVisible={isModalVisible}>
                <View style={styles.modalContainer}>
                    <Text style={styles.discardText}>Discard changes</Text>
                    <Text style={styles.discriptionText}>are you sure  want to discard changes ? By confirming all the changes will be lost </Text>
                    <View style={styles.btnContainer}>
                        <TouchableOpacity style={styles.YesBtn} onPress={toggleModal}>
                            <Text style={styles.YesText}>Yes</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.noBtn} onPress={toggleModal}>
                            <Text style={styles.NoText}>No</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

        </View>
    );
}

const styles = StyleSheet.create({
    noBtn: {
        borderWidth: 1,
        width: "40%",
        alignItems: 'center',
        height: 50,
        justifyContent: "center",
        borderRadius: 10,
        borderColor: '#4487AF',
        margin: 7
    },
    NoText: {
        color: "#4487AF",
        fontSize: 18,
    },
    YesBtn: {
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
    YesText: {
        color: "white",
        fontSize: 18,
    },
    container: {
        display: 'flex',
        alignItems: 'center'
    },
    subContainer: {
        width: '90%',
        marginTop: 20
    },
    inputField: {
        borderBottomWidth: 1,
        borderColor: '#E5E9F2',
        borderRadius: 5,
        height: 75,
        marginBottom: 20
    },
    logOutText: {
        textAlign: 'center',
        marginTop: 25,
        color: '#4487AF',
        textDecorationLine: 'underline',
        fontSize: 16
    },
    modalContainer: {
        width: '95%',
        backgroundColor: 'white',
        height: 200,
        borderRadius: 15
    },
    discardText: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        marginTop: 20
    },
    discriptionText: {
        textAlign: 'center',
        marginTop: 7,
        fontSize: 15
    },
    btnContainer: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'center',
        marginTop: 25
    }
});