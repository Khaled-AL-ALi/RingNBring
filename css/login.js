import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    RegisterBtn: {
        borderWidth: 1,
        width: "40%",
        alignItems: 'center',
        height: 50,
        justifyContent: "center",
        borderRadius: 10,
        borderColor: '#4487AF',
        margin: 7
    },
    RegisterText: {
        color: "#4487AF",
        fontSize: 18,
    },
    LogInBtn: {
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
    LoginText: {
        color: "white",
        fontSize: 18,
    },
    btnContainer: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'center',
        marginTop: 25
    },
    InputField: {
        borderBottomWidth: 1,
        borderColor: '#E5E9F2',
        borderRadius: 5,
        height: 75
    },
    container: {
        display: 'flex',
        alignItems: 'center'
    },
    subContainer: {
        width: '90%',
        marginTop: 20
    }
});