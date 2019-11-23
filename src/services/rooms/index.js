import React from "react";
import { getPlayerPositions } from "../firebase/routes";

const RoomContext = React.createContext({
  currentUser: null,
  useRoom: null,
})

export class RoomProvider extends React.Component {
  currentUserSubscription

  constructor(props) {
    super(props)
    this.state = {
      currentRoom: '',
      useRoom: this.useRoom,
      players: [],
    }
  }

  useRoom = (currentRoom) => {
    this.currentUserSubscription = getPlayerPositions(currentRoom, this.setPlayers)
    this.setState({ currentRoom })
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
