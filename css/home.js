import { StyleSheet } from 'react-native';

export default StyleSheet.create({
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
        marginTop: 15,
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
    },
    modalContainer: {
        width: '90%',
        backgroundColor: 'white',
        height: 150,
        borderRadius: 15,
        justifyContent: 'center',
        marginLeft: 'auto',
        marginRight: 'auto'
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
    thanksMessage: {
        textAlign: 'center',
        fontSize: 20
    },
    btnOkayContainer: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'center',
    },
    goToProfile: {
        borderWidth: 1,
        alignItems: 'center',
        height: 50,
        justifyContent: "center",
        borderRadius: 10,
        borderColor: '#4487AF',
        marginTop: 25,
        marginBottom: 2
    },
});