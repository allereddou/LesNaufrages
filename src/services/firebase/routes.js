import database from './firebase'
import randomHex from 'random-hex'

function check(roomId, resolve) {
    database.ref('/').once('value').then((snapshot) => {
        const data = snapshot.val()
        resolve(data[roomId])
    })
}

function createRoom(roomId, playerId, maze) {
    let players = {}
    players[playerId] = { positionX: 0, positionY: 0, color: randomHex.generate() }
    database.ref('/' + roomId).set({
        maze: maze,
        players
    })
}

function joinRoom(roomId, playerId) {
    database.ref('/' + roomId + '/players/' + playerId).set({
        positionX: 0,
        positionY: 0,
        color: randomHex.generate(),
    })
}

function updatePlayerPosition(roomId, playerId, positionX, positionY) {
    database.ref('/' + roomId + '/players/' + playerId).update({
        positionX,
        positionY
    })
}

function getPlayerPositions(roomId, setPlayers) {
    let ref = database.ref('/' + roomId + '/players')
    const val = ref.on('value', (snapshot) => {
        setPlayers(snapshot.val())
    })
    return val
}

function getMaze(roomId, setMaze) {
    let ref = database.ref('/' + roomId + '/maze')
    const val = ref.once('value', (snapshot) => {
        setMaze(snapshot.val())
    })
    return val
}

function cleanUpDatabase() {
    database.ref('/').set({});
}

export {
    check,
    createRoom,
    joinRoom,
    updatePlayerPosition,
    getPlayerPositions,
    getMaze,
    cleanUpDatabase
}
