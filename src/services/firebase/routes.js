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
    let ref = database.ref('/' + roomId);
    ref.once('value', function (snapshot) {
        return snapshot.val()
    });
}

function joinRoom(roomId, playerId) {
    database.ref('/' + roomId + '/players/' + playerId).update({
        position: [0, 0]
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

function cleanUpGame(roomId) {
    database.ref('/' + roomId).remove();
}

export {
    createRoom,
    checkIfRoomExists,
    joinRoom,
    updatePlayerPosition,
    getPlayerPositions,
    cleanUpGame
}
