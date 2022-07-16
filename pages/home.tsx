
import { StyleSheet, View, Image, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import home1 from '../images/home1.png';
import home2 from '../images/home2.png';
import home3 from '../images/home3.png';
import insta from '../images/insta.png';
import me from '../images/me.jpeg';
import React, { useCallback, useState, useRef } from 'react';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet'

export default function Home() {

    const sheetref = useRef<BottomSheet>(null);
    const [isOpen, setIsOpen] = useState(false);
    const snapPoints = ["85%"];
    const handleSnapPress = useCallback((index) => {
        sheetref.current?.snapToIndex(index);
        setIsOpen(true)
    }, []);


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
                                <TouchableOpacity style={styles.UploadButton}>
                                    <Text style={styles.UploadText}>Upload photo</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.TakePhotoBtn}>
                                    <Text style={styles.TakePhotoText}>Take photo</Text>
                                </TouchableOpacity>
                            </View>
                            {/* <Image source={me} style={{ width: 100, height: 100 }} /> */}
                            <TouchableOpacity style={styles.sendImgBtn}>
                                <Text style={styles.UploadText}>Share</Text>
                            </TouchableOpacity>
                        </View>
                    </BottomSheetView>
                </BottomSheet>

            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fAfBfc'
    },
    TobContainer: {
        width: "90%",
        backgroundColor: 'white',
        padding: 20,
        marginTop: 15
    },
    SubTobContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: "100%"
    },
    ImageItem: {
        width: 100, alignItems: "center"
    },
    SingleImage: {
        width: 70, height: 70
    },
    BoldText: {
        fontWeight: 'bold'
    },
    TextUnderImage: {
        textAlign: 'center'
    },
    linkText: {
        fontSize: 15,
        textAlign: 'center',
        color: '#7C172F',
        textDecorationLine: 'underline'
    },
    ShareBtn: {
        borderWidth: 1,
        alignItems: 'center',
        height: 50,
        justifyContent: "center",
        borderRadius: 10,
        borderColor: '#4487AF',
        marginTop: 25,
        marginBottom: 20
    },
    shareText: {
        color: "#4487AF",
        fontSize: 18
    },
    bottomContainer: {
        width: "90%",
        backgroundColor: 'white',
        padding: 20,
        marginTop: 15
    },
    instaLogoContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15
    },
    instaLogo: {
        width: 30, height: 30
    },
    instaText: {
        marginLeft: 7,
        fontWeight: 'bold'
    },
    ImagesContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    instaImages: {
        width: "30%",
        height: 100,
        margin: 3
    },
    UploadButton: {
        borderWidth: 2,
        alignItems: 'center',
        width: '45%',
        height: 50,
        justifyContent: "center",
        borderRadius: 10,
        borderColor: '#4487AF',
        marginTop: 25,
        marginBottom: 20
    },
    TakePhotoBtn: {
        borderWidth: 2,
        alignItems: 'center',
        width: '45%',
        height: 50,
        justifyContent: "center",
        borderRadius: 10,
        borderColor: '#7C172F',
        marginTop: 25,
        marginBottom: 20
    },
    UploadText: {
        color: "#4487AF",
        fontSize: 18
    },
    TakePhotoText: {
        color: "#7C172F",
        fontSize: 18
    },
    sendImgBtn: {
        borderWidth: 2,
        alignItems: 'center',
        width: '100%',
        height: 50,
        justifyContent: "center",
        borderRadius: 10,
        borderColor: '#4487AF',
        marginTop: 25,
        marginBottom: 20
    },
    bottomSheet: {
        display: 'flex',
        alignItems: 'center'
    },
    bottomSheetHeaderContainer: {
        width: '80%'
    },
    instaUsername: {
        borderWidth: 1,
        borderColor: '#E5E9F2',
        borderRadius: 5,
        height: 35,
        marginTop: 15
    },
    instacaption: {
        borderWidth: 1,
        borderColor: '#E5E9F2',
        borderRadius: 5,
        height: 75,
        marginTop: 15,
        marginBottom: 10
    },
    btnContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});