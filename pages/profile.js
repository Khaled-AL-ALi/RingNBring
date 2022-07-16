import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import styles from '../css/profile';
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