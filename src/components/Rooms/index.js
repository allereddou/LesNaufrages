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
        <p>
          Uncle Bob was thinking about Pepe TheFrog again. Pepe was a selfish ogre with moist thighs and wide moles.

  Uncle walked over to the window and reflected on his dangerous surroundings. He had always loved wide ULaval with its cold, clever classrooms. It was a place that encouraged his tendency to feel lonely.

  Then he saw something in the distance, or rather someone. It was the a selfish figure of Pepe TheFrog.

  Uncle gulped. He glanced at his own reflection. He was a clumsy, proud, cocoa drinker with charming thighs and curvy moles. His friends saw him as a little, late lawyer. Once, he had even helped an outstanding kitten cross the road.

  But not even a clumsy person who had once helped an outstanding kitten cross the road, was prepared for what Pepe had in store today.

  The moon shone like laughing hamsters, making Uncle doge. Uncle grabbed an orange knife that had been strewn nearby; he massaged it with his fingers.

  As Uncle stepped outside and Pepe came closer, he could see the yarbelicious smile on his face.

  "Look Uncle," growled Pepe, with a peculiar glare that reminded Uncle of selfish frogs. "It's not that I don't love you, but I want help. You owe me 4971 pounds."

  Uncle looked back, even more doge and still fingering the orange knife. "Pepe, you are the best," he replied.

  They looked at each other with happy feelings, like two pretty, pong pigeons boating at a very loving birthday party, which had flute music playing in the background and two cold-blooded uncles swimming to the beat.

  Uncle studied Pepe's moist thighs and wide moles. Eventually, he took a deep breath. "I'm afraid I declared myself bankrupt," explained Uncle. "You will never get your money."

  "No!" objected Pepe. "You lie!"

  "I do not!" retorted Uncle. "Now get your moist thighs out of here before I hit you with this orange knife."

  Pepe looked fast, his wallet raw like a keen, knowledgeable kettle.

  Uncle could actually hear Pepe's wallet shatter into 4971 pieces. Then the selfish ogre hurried away into the distance.

  Not even a mug of cocoa would calm Uncle's nerves tonight.

  THE END
        </p>
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
