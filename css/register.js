import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fAfBfc'
    },
    begin_title: {
        textAlign: 'center',
        fontSize: 23,
        padding: (0, 25, 0, 25),
    },
    faceBookBtn: {
        borderWidth: 1,
        width: 320,
        alignItems: 'center',
        height: 65,
        justifyContent: "center",
        backgroundColor: '#4267B2',
        borderRadius: 10,
        borderColor: '#4267B2',
        display: "flex",
        flexDirection: 'row',
    },
    emailBtn: {
        borderWidth: 1,
        width: 320,
        alignItems: 'center',
        height: 65,
        justifyContent: "center",
        borderRadius: 10,
        borderColor: '#4487AF',
    },
    googleBtn: {
        borderWidth: 1,
        width: 320,
        alignItems: 'center',
        height: 65,
        justifyContent: "center",
        borderRadius: 10,
        borderColor: '#4267B2',
        marginBottom: 13,
        marginTop: 13,
        display: "flex",
        flexDirection: 'row',
    },
    facebookIcon: {
        marginRight: 15,
        color: 'white',
    },
    faceBookText: {
        color: "white",
        fontSize: 18
    },
    googleImage: {
        width: 30,
        height: 30,
        marginRight: 15
    },
    googleText: {
        fontSize: 18
    },
    emailText: {
        color: "#4487AF",
        fontSize: 18
    }
});