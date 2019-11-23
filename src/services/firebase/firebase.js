import * as firebase from "firebase/app";
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyB0uyEWhGAYjf862ymV3Jyef30rBcxC2SU",
    authDomain: "hackaton-f2263.firebaseapp.com",
    databaseURL: "https://hackaton-f2263.firebaseio.com",
    projectId: "hackaton-f2263",
    storageBucket: "hackaton-f2263.appspot.com",
    messagingSenderId: "156445942119",
    appId: "1:156445942119:web:9165f952a8a40873df8fc2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.database();


export default database


