import database from './firebase'

function createRoom(roomId, maze) {
    database.ref('/' + roomId).set({
        maze: maze,
        players: []
    })
}

function checkIfRoomExists(roomId) {
    return database.collection(roomId).doc();
}

function joinRoom(roomId, playerId) {
    database.ref('/' + roomId + '/players/' + playerId).update({
        position: [0,0]
    })
}

function updatePlayerPosition(roomId, playerId, positionX, positionY) {
    database.ref('/' + roomId + '/players/' + playerId).update({
        positionX: positionX,
        positionY: positionY
    })
}

export {
    createRoom,
    checkIfRoomExists,
    joinRoom,
    updatePlayerPosition
}
