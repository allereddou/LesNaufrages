import React from "react";
import { createRoom, joinRoom } from "../firebase/firebase";

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
    }
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  useRoom = (currentRoom) => {
    this.setState({ currentRoom })
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
