import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    apiKey: "AIzaSyBqSybCaKMe1urPNS0RHCZY-IwyZEXBjeE",
    authDomain: "water-a278f.firebaseapp.com",
    databaseURL: "https://water-a278f-default-rtdb.firebaseio.com",
    projectId: "water-a278f",
    storageBucket: "water-a278f.appspot.com",
    messagingSenderId: "189403777883",
    appId: "1:189403777883:web:ed5afa38ac227faecfa87e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
export const auth = getAuth(app);

