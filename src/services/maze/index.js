import React from "react";
import { createMaze } from "./mazeGenerator";
import { getMaze } from "../firebase/routes";

const MazeContext = React.createContext({
  maze: null,
  resizeMaze: null,
  mazeX: null,
  mazeY: null,
  getMaze: null,
})

export class MazeProvider extends React.Component {
  beginnerSubscription

  constructor(props) {
    super(props)
    this.state = {
      maze: [],
      resizeMaze: this.resizeMaze,
      getMaze: this.getMaze,
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

  setMaze = (maze) => {
    this.setMaze({ maze })
  }

  useFMaze = (maze) => {
    getMaze(this.setMaze)
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
