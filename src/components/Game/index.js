import React from "react";
import Labyrinth from "../Labyrinth";
import Rooms from "../Rooms";
import { compose, fromRenderProps } from "recompose";
import { RoomConsumer } from "../../services/rooms";
import { MazeConsumer } from "../../services/maze";

class Game extends React.Component {
  state = {
    players: [],
    started: false,
    finished: false,
  }

  componentDidMount() {
    const player = {
      positionX: 0,
      positionY: 0,
    }
    this.setState({ players: [...this.state.players, player] })
  }

  handlePlayer = (way) => {
    const { players } = this.state
    switch (way) {
      case 'moveRight':
        players[0].positionX++
        if (players[0].positionX >= this.props.mazeX) {
          this.setState({ finished: true })
        }
        break;
      case 'moveLeft':
        if (!(players[0].positionX === 0 && players[0].positionY === 0)) {
          players[0].positionX--
        }
        break;
      case 'moveTop':
        players[0].positionY--
        break;
      case 'moveBottom':
        players[0].positionY++
        break;
      default:
        break;
    }
    this.setState({ players })
  }

  handleCurrentRoom = (x, y, name) => {
    this.props.resizeMaze(x, y)
    this.props.useRoom(name)
  }

  render() {
    return (
      <>
        {
          this.props.currentRoom === '' ?
            <Rooms currentRoom={this.props.currentRoom} handleCurrentRoom={this.handleCurrentRoom} />
            :
            <Labyrinth players={this.state.players} maze={this.props.maze} handlePlayer={this.handlePlayer} />
        }
      </>
    )
  }
}

export default compose(
  fromRenderProps(RoomConsumer, props => props),
  fromRenderProps(MazeConsumer, (props) => props)
)(Game)
