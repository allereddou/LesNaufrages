import React from "react";
import { beginner, advanced } from "./routes";
import { createMaze } from "./MazeGenerator";

const MazeContext = React.createContext({
  maxe: {},
})

export class MazeProvider extends React.Component {
  beginnerSubscription

  constructor(props) {
    super(props)
    this.state = {
      maze: [],
    }
  }

  componentDidMount() {
    //this.beginnerSubscription = advanced().subscribe(maze => {
    //  this.setState({ maze })
    //})
    this.setState({ maze: createMaze(25, 25) })
  }

  componentWillUnmount() {
    this.beginnerSubscription && this.beginnerSubscription.unsubscribe()
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
