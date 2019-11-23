import React from "react";
import { beginner, advanced } from "./routes";
import { createMaze } from "./mazeGenerator";

const MazeContext = React.createContext({
  maze: null,
  resizeMaze: null
})

export class MazeProvider extends React.Component {
  beginnerSubscription

  constructor(props) {
    super(props)
    this.state = {
      maze: [],
      resizeMaze: this.resizeMaze,
    }
  }

  componentDidMount() {
    this.setState({ maze: createMaze(25, 25) })
  }

  componentWillUnmount() {
    this.beginnerSubscription && this.beginnerSubscription.unsubscribe()
  }

  resizeMaze(x, y) {
    this.setState({ maze: createMaze(x, y) })
  }

  render() {
    return (
      <MazeContext.Provider value={this.state}>
        {this.props.children}
      </MazeContext.Provider>
    )
  }
}

export const MazeConsumer = MazeContext.Consumer
