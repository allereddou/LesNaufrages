import React from "react";
class Rooms extends React.Component {
  state = {
    room: this.props.currentRoom,
    x: 5,
    y: 5,
  }

  handleRoomChange = (event) => {
    this.setState({ room: event.target.value })
  }

  handleY = (event) => {
    this.setState({ y: event.target.value, x: event.target.value })
  }

  joinRoom = () => {
    this.props.handleCurrentRoom(this.state.x, this.state.y, this.state.room)
  }

  render() {
    return (
      <div>
        <input type="number" value={this.state.y} onChange={this.handleY} />
        <input type="text" value={this.state.room} onChange={this.handleRoomChange} />
        <button onClick={this.joinRoom}>
          Join Room
        </button>
      </div>
    )
  }
}

export default Rooms
