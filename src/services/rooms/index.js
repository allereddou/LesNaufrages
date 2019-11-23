import React from "react";

const RoomContext = React.createContext({
  currentUser: {},
})

export class RoomProvider extends React.Component {
  currentUserSubscription

  constructor(props) {
    super(props)
    this.state = {
      currentRoom: '',
    }
  }

  componentDidMount() {
  }

  componentWillUnmount() {
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
