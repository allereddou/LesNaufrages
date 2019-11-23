import database from './firebase'

function check(roomId, resolve) {
    database.ref('/').once('value').then((snapshot) => {
        const data = snapshot.val()
        console.log('reeee',data[roomId])
        resolve(data[roomId])
    })
}

function createRoom(roomId, playerId, maze) {
    let players = {}
    players[playerId] = { positionX: 0, positionY: 0 }
    database.ref('/' + roomId).set({
        maze: maze,
        players
    })
}

function joinRoom(roomId, playerId) {
    database.ref('/' + roomId + '/players/' + playerId).set({
        positionX: 0,
        positionY: 0,
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
    const val = ref.on('value', (snapshot) => {
        setMaze(snapshot.val())
    })
    return val
}

export {
    check,
    createRoom,
    joinRoom,
    updatePlayerPosition,
    getPlayerPositions,
    getMaze
}
