import React from "react";
import { createMaze } from "./mazeGenerator";

const MazeContext = React.createContext({
  maze: null,
  resizeMaze: null,
  mazeX: null,
  mazeY: null,
})

export class MazeProvider extends React.Component {
  beginnerSubscription

  constructor(props) {
    super(props)
    this.state = {
      maze: [],
      resizeMaze: this.resizeMaze,
      mazeX: 25,
      maxeY: 25,
    }
  }

  componentDidMount() {
    this.setState({ maze: createMaze(25, 25) })
  }

  componentWillUnmount() {
    this.beginnerSubscription && this.beginnerSubscription.unsubscribe()
  }

  resizeMaze = (x, y) => {
    this.setState({ maze: createMaze(x, y), mazeX: x, mazeY: y })
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
