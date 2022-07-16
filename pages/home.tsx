import { View, Image, Text, TouchableOpacity, ScrollView, TextInput, Alert } from 'react-native';
import styles from '../css/home';
import home1 from '../images/home1.png';
import home2 from '../images/home2.png';
import home3 from '../images/home3.png';
import insta from '../images/insta.png';
import me from '../images/me.jpeg';
import React, { useCallback, useState, useRef } from 'react';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import * as ImagePicker from 'expo-image-picker'
import { getDownloadURL, getStorage, ref, uploadBytesResumable, uploadBytes } from "firebase/storage";


export default function Home() {

    const sheetref = useRef<BottomSheet>(null);
    const [isOpen, setIsOpen] = useState(false);
    const snapPoints = ["85%"];
    const handleSnapPress = useCallback((index) => {
        sheetref.current?.snapToIndex(index);
        setIsOpen(true)
    }, []);

    const storage = getStorage();
    const [image, setImage] = useState(null);

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

    const uploadImage = () => {
        const storageRef = ref(storage, 'image');

        uploadBytes(storageRef, image).then((snapshot) => {
            console.log('Uploaded a blob or file!');
            setImage(null)
        }).catch((error) => {
            console.log(error);

        })

    }

    // const uploadImage = (file) => {
    //     if (!file) return;
    //     const storageRef = ref(storage, `/file/${file.name}`)
    //     const uploadTask = uploadBytesResumable(storageRef, file);

    //     uploadTask.on("state_changed", (snapshot) => {
    //         const prog = Math.round(
    //             (snapshot.bytesTransferred / snapshot.totalBytes) * 100
    //         );

    //         setProgress(prog);
    //     },
    //         (err) => console.log(err),
    //         () => {
    //             getDownloadURL(uploadTask.snapshot.ref).then((url) => console.log(url))
    //         }
    //     )
    // }

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
                    <TouchableOpacity style={styles.ShareBtn} onPress={() => handleSnapPress(0)}>
                        <Text style={styles.shareText}>Share</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.linkText}>Go to the restoscenes insta account</Text>
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

                <BottomSheet
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
                            />
                            <TextInput
                                style={styles.instacaption}
                                placeholder="Enter caption here (include hashtags)*"
                            />

                            <Text>Photo*</Text>
                            <View style={styles.btnContainer}>
                                <TouchableOpacity style={styles.UploadButton} onPress={pickImage}>
                                    <Text style={styles.UploadText}>Upload photo</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.TakePhotoBtn}>
                                    <Text style={styles.TakePhotoText}>Take photo</Text>
                                </TouchableOpacity>
                            </View>
                            {image ? <Image source={{ uri: image.uri }} style={{ width: 100, height: 100 }} /> : null}
                            <TouchableOpacity style={styles.sendImgBtn} onPress={() => uploadImage(image)}>
                                <Text style={styles.UploadText} >Share</Text>
                            </TouchableOpacity>
                        </View>
                    </BottomSheetView>
                </BottomSheet>

            </View>
        </ScrollView>
    );
}