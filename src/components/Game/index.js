import React from "react";
import Labyrinth from "../Labyrinth";
import Rooms from "../Rooms";
import { compose, fromRenderProps } from "recompose";
import { RoomConsumer } from "../../services/rooms";

class Game extends React.Component {
  state = {
    players: []
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

  render() {
    return (
      <>
        {
          this.props.currentRoom === '' ?
            <Rooms currentRoom={this.props.currentRoom} />
            :
            <Labyrinth players={this.state.players} handlePlayer={this.handlePlayer} />
        }
      </>
    )
  }
}

export default compose(
  fromRenderProps(RoomConsumer, props => props),
)(Game)
