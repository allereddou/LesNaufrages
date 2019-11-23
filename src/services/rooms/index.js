import React from "react";
import { getPlayerPositions } from "../firebase/routes";

const RoomContext = React.createContext({
  currentUser: null,
  useRoom: null,
  go: null,
})

export class RoomProvider extends React.Component {
  currentUserSubscription

  constructor(props) {
    super(props)
    this.state = {
      currentRoom: '',
      useRoom: this.useRoom,
      players: [],
      go: false,
    }
  }

  useRoom = (currentRoom) => {
    this.currentUserSubscription = getPlayerPositions(currentRoom, this.setPlayers)
    this.setState({ currentRoom, go: true })
  }

  setPlayers = (players) => {
    this.setState({ players })
  }

  render() {
    return (
      <RoomContext.Provider value={this.state}>
        {this.props.children}
      </RoomContext.Provider>
    )
  }
}

export const RoomConsumer = RoomContext.Consumer
