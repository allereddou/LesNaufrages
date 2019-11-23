import React from "react";
import Labyrinth from "../Labyrinth";
import Rooms from "../Rooms";
import { compose, fromRenderProps } from "recompose";
import { RoomConsumer } from "../../services/rooms";
import { MazeConsumer } from "../../services/maze";
import { checkIfRoomExists, createRoom, joinRoom, updatePlayerPosition } from "../../services/firebase/routes";
import { LoginConsumer } from "../../services/login";

class Game extends React.Component {
  state = {
    started: false,
    finished: false,
  }

  handlePlayer = (way) => {
    const { players } = this.props
    switch (way) {
      case 'moveRight':
        players[this.findRightPlayerIndex(players)].positionX++
        if (players[0].positionX >= this.props.mazeX) {
          this.setState({ finished: true })
        }
        break;
      case 'moveLeft':
        if (!(players[this.findRightPlayerIndex(players)].positionX === 0 && players[this.findRightPlayerIndex(players)].positionY === 0)) {
          players[this.findRightPlayerIndex(players)].positionX--
        }
        break;
      case 'moveTop':
        players[this.findRightPlayerIndex(players)].positionY--
        break;
      case 'moveBottom':
        players[this.findRightPlayerIndex(players)].positionY++
        break;
      default:
        break;
    }
    this.setState({ players })
    updatePlayerPosition(this.props.currentRoom, this.props.currentUser.id, players[0].positionX, players[0].positionY)
  }

  findRightPlayerIndex(players) {
    console.log(players)
    return players.findIndex(player => player.playerId === this.props.currentUser.id)
  }


  handleCurrentRoom = (x, y, name) => {
    this.props.resizeMaze(x, y)
    this.props.useRoom(name)

    if (checkIfRoomExists(name)) {
      joinRoom(name)
    } else {
      createRoom(name, this.props.maze, { playerId: this.props.currentUser.id, positionX: 0, positionY: 0 })
    }
  }

  render() {
    const arrayPlayer = []
    Object.entries(this.props.players).forEach((value, index) => console.log(value, index))
    return (
      <>
        {
          this.props.currentRoom === '' ?
            <Rooms currentRoom={this.props.currentRoom} handleCurrentRoom={this.handleCurrentRoom} />
            :
            <Labyrinth players={this.props.players} currentPlayerId={this.findRightPlayerIndex(this.props.players)} maze={this.props.maze} handlePlayer={this.handlePlayer} />
        }
      </>
    )
  }
}

export default compose(
  fromRenderProps(RoomConsumer, props => props),
  fromRenderProps(MazeConsumer, (props) => props),
  fromRenderProps(LoginConsumer, props => props),
)(Game)
