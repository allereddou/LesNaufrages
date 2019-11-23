import database from './firebase'

function createRoom(roomId, maze, player1) {
    let players = []
    players.push(player1)
    database.ref('/' + roomId).set({
        maze: maze,
        players: players
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
