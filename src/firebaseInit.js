// src/firebaseInit.js
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAUEwllvqWnZJcGuHs6tM2Fpdfx1LsR7Gc",
    authDomain: "pda-app-33f95.firebaseapp.com",
    projectId: "pda-app-33f95",
    storageBucket: "pda-app-33f95.appspot.com",
    messagingSenderId: "453724456807",
    appId: "1:453724456807:web:ed59873230ac66940791c2"
  };

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);