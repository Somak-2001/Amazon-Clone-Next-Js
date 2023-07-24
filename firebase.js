// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA4YbD_PxHsbdZ6LxM9ijMlvpn-0dOUQ10",
    authDomain: "clone-a314c.firebaseapp.com",
    projectId: "clone-a314c",
    storageBucket: "clone-a314c.appspot.com",
    messagingSenderId: "94044729576",
    appId: "1:94044729576:web:80319fa7bcaafc067d595d",
    measurementId: "G-4NFY74TNHM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const db = app.firestore();

// const analytics = getAnalytics(app);

const auth = getAuth(app);
//const auth = app.auth(); --- So, we need not to import getauth explicitly

export { auth };