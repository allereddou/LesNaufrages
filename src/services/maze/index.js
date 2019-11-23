import React from "react";
import {beginner, advanced} from "./routes";

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
    this.beginnerSubscription = beginner().subscribe(maze => {
      this.setState({ maze })
    })
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
