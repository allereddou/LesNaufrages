import React from "react";
import Labyrinth from "../Labyrinth";
import Rooms from "../Rooms";
import { compose, fromRenderProps } from "recompose";
import { RoomConsumer } from "../../services/rooms";
import { MazeConsumer } from "../../services/maze";
import { check, createRoom, joinRoom, updatePlayerPosition, cleanUpDatabase } from "../../services/firebase/routes";
import { LoginConsumer } from "../../services/login";

class Game extends React.Component {
  state = {
    started: false,
    finished: false,
  }

  handlePlayer = (way) => {
    const { players } = this.props
    const arrayPlayer = this.getArrayPlayer(players)
    const rightIndex = this.findRightPlayerIndex(arrayPlayer)
    console.log(rightIndex, arrayPlayer)
    console.log(arrayPlayer)
    switch (way) {
      case 'moveRight':
        arrayPlayer[rightIndex].positionX++
        break;
      case 'moveLeft':
        if (!(arrayPlayer[rightIndex].positionX === 0 && arrayPlayer[rightIndex].positionY === 0)) {
          arrayPlayer[rightIndex].positionX--
        }
        break;
      case 'moveTop':
        arrayPlayer[rightIndex].positionY--
        break;
      case 'moveBottom':
        arrayPlayer[rightIndex].positionY++
        break;
      default:
        break;
    }
    updatePlayerPosition(this.props.currentRoom, this.props.currentUser.id, arrayPlayer[rightIndex].positionX, arrayPlayer[rightIndex].positionY)
  }

  findRightPlayerIndex(players) {
    return players.findIndex(player => player.playerId === this.props.currentUser.id)
  }


  handleCurrentRoom = async (x, y, name) => {
    this.props.resizeMaze(x, y)
    const a = await new Promise((resolve) => {
      check(name, resolve)
    })
    if (a == null) {
      createRoom(name, this.props.currentUser.id, this.props.maze)
      this.props.useRoom(name)
    }
    else {
      joinRoom(name, this.props.currentUser.id)
      this.props.getMaze(name)
      this.props.useRoom(name)
    }
  }

  getArrayPlayer = () => {
    const arrayPlayer = []
    Object.entries(this.props.players).forEach((value) => arrayPlayer.push({ playerId: value[0], positionX: value[1].positionX, positionY: value[1].positionY }))
    console.log(arrayPlayer)
    return arrayPlayer
  }

  render() {
    const arrayPlayer = this.getArrayPlayer()
    return (
      <>
        {
          !this.props.go ?
            <Rooms currentRoom={this.props.currentRoom} handleCurrentRoom={this.handleCurrentRoom} />
            :
            <Labyrinth players={arrayPlayer} currentPlayerId={this.findRightPlayerIndex(arrayPlayer)} maze={this.props.maze} handlePlayer={this.handlePlayer} />
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
