import React from "react";
import { compose, fromRenderProps } from "recompose";

class Rooms extends React.Component {
  state = {
    room: ''
  }

  handleRoomChange = (event) => {
    this.setState({ room: event.target.value })
  }

  joinRoom = () => {

  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.room} onChange={this.handleRoomChange} />
        <button onClick={this.joinRoom}>
          Join Room
        </button>
      </div>
    )
  }
}

export default compose(
  fromRenderProps(),
)(Rooms)