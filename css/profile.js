import { StyleSheet } from 'react-native';

export default StyleSheet.create({
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