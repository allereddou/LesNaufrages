import database from './firebase'

function createRoom(roomId, maze, player1) {
    const { positionX, positionY, playerId } = player1
    let players = {}
    players[playerId] = { positionX, positionY }
    database.ref('/' + roomId).set({
        maze: maze,
        players
    })
}

function checkIfRoomExists(roomId) {
    let ref = database.ref('/');
    ref.once('value', function (snapshot) {
        console.log('YO', snapshot.val())
        return snapshot.val()
    });
}

function joinRoom(roomId, playerId) {
    console.log('JOIN', roomId, playerId)
    database.ref('/' + roomId + '/players/' + playerId).set({
        positionX: 0,
        positionY: 0
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
    createRoom,
    checkIfRoomExists,
    joinRoom,
    updatePlayerPosition,
    getPlayerPositions,
    getMaze
}
