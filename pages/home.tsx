import { View, Image, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import styles from '../css/home';
import home1 from '../images/home1.png';
import home2 from '../images/home2.png';
import home3 from '../images/home3.png';
import insta from '../images/insta.png';
import me from '../images/me.jpeg';
import React, { useState, useRef } from 'react';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import * as ImagePicker from 'expo-image-picker';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import Modal from "react-native-modal";
import { useNavigation } from '@react-navigation/core';
import { authentication, db } from '../firebase';
import { doc, setDoc, addDoc } from 'firebase/firestore';
import * as Linking from 'expo-linking';

export default function Home() {
    const storage = getStorage();
    const navigation = useNavigation()

    const [isModalVisible, setModalVisible] = useState(false);
    const [image, setImage] = useState(null);
    const [instauser, setInstaUser] = useState("");
    const [caption, setCaption] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    const snapPoints = ["85%"];
    const sheetref = useRef<BottomSheet>(null);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1
        });
        const source = { uri: result.uri };
        console.log(source);
        setImage(source)
    }

    const openCamera = async () => {

        const result = await ImagePicker.launchCameraAsync();

        if (!result.cancelled) {
            const source = { uri: result.uri }
            console.log(source);
            setImage(source);
        }
    }

    const uploadImage = async () => {

        const imgRef = ref(storage, `avatar / ${new Date().getTime()}`);

        try {
            const snap = await uploadBytes(imgRef, image)
            const url = await getDownloadURL(ref(storage, snap.ref.fullPath));
            await setDoc(doc(db, "potentialFeedbacks", authentication.currentUser.uid), {
                username: instauser,
                caption: caption,
                imageURL: url
            })
            console.log('Uploaded a blob or file!');
            setImage(null)
            setModalVisible(!isModalVisible);
        } catch (err) {
            console.log(err.message)
        }
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={[styles.TobContainer, { opacity: isOpen ? 0.2 : 1 }]}>
                    <View style={styles.SubTobContainer}>
                        <View style={styles.ImageItem}>
                            <Image source={home3} style={styles.SingleImage} />
                            <Text style={styles.TextUnderImage}>Take photo for your food</Text>
                        </View>
                        <View style={styles.ImageItem}>
                            <Image source={home1} style={styles.SingleImage} />
                            <Text style={styles.TextUnderImage}>Tshare it on <Text style={styles.BoldText}> Resto  Scenes</Text> account</Text>
                        </View>
                        <View style={styles.ImageItem}>
                            <Image source={home2} style={styles.SingleImage} />
                            <Text style={styles.TextUnderImage}>photo will be posted once  approved</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.goToProfile} onPress={() => navigation.navigate('Profile')}>
                        <Text style={styles.shareText}>Go to profile</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.ShareBtn} onPress={() => setIsOpen(true)}>
                        <Text style={styles.shareText}>Share</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.linkText} onPress={() => Linking.openURL('https://www.instagram.com/khaled.alali.7568/')}>Go to the restoscenes insta account</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.bottomContainer}>
                    <View style={styles.instaLogoContainer}>
                        <Image source={insta} style={styles.instaLogo} />
                        <Text style={styles.instaText}>restoscenes</Text>
                    </View>
                    <View style={styles.ImagesContainer}>
                        <Image source={me} style={styles.instaImages} />
                        <Image source={me} style={styles.instaImages} />
                        <Image source={me} style={styles.instaImages} />
                        <Image source={me} style={styles.instaImages} />
                        <Image source={me} style={styles.instaImages} />
                        <Image source={me} style={styles.instaImages} />
                        <Image source={me} style={styles.instaImages} />
                        <Image source={me} style={styles.instaImages} />
                        <Image source={me} style={styles.instaImages} />
                        <Image source={me} style={styles.instaImages} />
                    </View>
                </View>

                {isOpen ? <BottomSheet
                    ref={sheetref}
                    snapPoints={snapPoints}
                    enablePanDownToClose={true}
                    onClose={() => setIsOpen(false)}
                >
                    <BottomSheetView style={styles.bottomSheet}>
                        <View style={styles.bottomSheetHeaderContainer}>
                            <TextInput
                                style={styles.instaUsername}
                                placeholder="Enter your insta username *"
                                onChangeText={(text) => setInstaUser(text)}

                            />
                            <TextInput
                                style={styles.instacaption}
                                placeholder="Enter caption here (include hashtags)*"
                                onChangeText={(text) => setCaption(text)}
                            />

                            <Text>Photo*</Text>
                            <View style={styles.btnContainer}>
                                <TouchableOpacity style={styles.UploadButton} onPress={pickImage}>
                                    <Text style={styles.UploadText}>Upload photo</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.TakePhotoBtn}>
                                    <Text style={styles.TakePhotoText} onPress={openCamera}>Take photo</Text>
                                </TouchableOpacity>
                            </View>
                            {image ? <Image source={{ uri: image.uri }} style={{ width: 100, height: 100 }} /> : null}
                            <TouchableOpacity style={styles.sendImgBtn} onPress={uploadImage}>
                                <Text style={styles.UploadText} >Share</Text>
                            </TouchableOpacity>
                        </View>
                    </BottomSheetView>
                </BottomSheet> : null}

                <Modal isVisible={isModalVisible}>
                    <View style={styles.modalContainer}>
                        <Text style={styles.thanksMessage}>Your post is pending approval; Thank You!</Text>
                        <View style={styles.btnOkayContainer}>
                            <TouchableOpacity style={styles.YesBtn} onPress={toggleModal}>
                                <Text style={styles.YesText}>Okay</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>

            </View>
        </ScrollView>
    );
}