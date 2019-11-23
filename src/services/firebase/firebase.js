import * as firebase from "firebase/app";
import 'firebase/auth'
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyB0uyEWhGAYjf862ymV3Jyef30rBcxC2SU",
    authDomain: "hackaton-f2263.firebaseapp.com",
    databaseURL: "https://hackaton-f2263.firebaseio.com",
    projectId: "hackaton-f2263",
    storageBucket: "hackaton-f2263.appspot.com",
    messagingSenderId: "156445942119",
    appId: "1:156445942119:web:9165f952a8a40873df8fc2"
};

let firebaseApp = firebase.initializeApp(firebaseConfig);

let database = firebaseApp.database();



export function createRoom(roomId, maze) {
    database.ref('/' + roomId).set({
        maze: maze,
        players: []
    })
}

export function checkIfRoomExists(roomId) {
    return database.collection(roomId).doc();
}

export function joinRoom(roomId, playerId) {
    database.ref('/' + roomId + '/players/' + playerId).update({
        position: [0,0]
    })
}

export function updatePlayerPosition(roomId, playerId, position) {
    database.ref('/' + roomId + '/players/' + playerId).update({
        position: position
    })
}
