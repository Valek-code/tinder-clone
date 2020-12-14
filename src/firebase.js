import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDJfVcjFU4POcsqBF09IZamZ29wcLtfARo",
    authDomain: "tinder-clone-315c0.firebaseapp.com",
    projectId: "tinder-clone-315c0",
    storageBucket: "tinder-clone-315c0.appspot.com",
    messagingSenderId: "715483479045",
    appId: "1:715483479045:web:f68bad10fbafba2114b06c",
    measurementId: "G-MT0YRE2F2Y"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;