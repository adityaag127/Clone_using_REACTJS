import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig={
    apiKey: "AIzaSyCLjd_6uuSTJOle-hIXv3-INPFHdyM3x1Y",
    authDomain: "clone-97193.firebaseapp.com",
    projectId: "clone-97193",
    storageBucket: "clone-97193.appspot.com",
    messagingSenderId: "555772492336",
    appId: "1:555772492336:web:c04542591dbc9d1a23cbf5",
    measurementId: "G-6HCB4CSZH5"
};

// const db = firebase.firestore();
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export {auth};