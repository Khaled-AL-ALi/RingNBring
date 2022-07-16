import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCCE0zOQPrWPTXixgFY37hITu65SqGhvvk",
    authDomain: "ringnbring-b4bb0.firebaseapp.com",
    projectId: "ringnbring-b4bb0",
    storageBucket: "ringnbring-b4bb0.appspot.com",
    messagingSenderId: "204912159187",
    appId: "1:204912159187:web:f2be420a753eabf9582726"
};

const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
export const provider = new GoogleAuthProvider();
