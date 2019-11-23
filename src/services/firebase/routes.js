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
        console.log('YO', Object.values(snapshot.val().players).length)
        return snapshot.val()
    });
}

function joinRoom(roomId, playerId, maze) {
    database.ref('/' + roomId + '/players/' + playerId).set({
        positionX: 0,
        positionY: 0
    }, () => {
        let players = {}
        console.log('hello in create')
        players[playerId] = { positionX: 0, positionY: 0 }
        database.ref('/' + roomId).set({
            maze: maze,
            players
        })

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

function cleanUpDatabase() {
    database.ref('/').set({});
}

export {
    createRoom,
    checkIfRoomExists,
    joinRoom,
    updatePlayerPosition,
    getPlayerPositions,
    getMaze,
    cleanUpDatabase
}
