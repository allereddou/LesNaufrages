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
    console.log(roomId, playerId, positionX, positionY)
    database.ref('/' + roomId + '/players/' + playerId).update({
        positionX,
        positionY
    })
}

export {
    createRoom,
    checkIfRoomExists,
    joinRoom,
    updatePlayerPosition
}
