import React from "react";
class Rooms extends React.Component {
  state = {
    room: this.props.currentRoom
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

export default Rooms
