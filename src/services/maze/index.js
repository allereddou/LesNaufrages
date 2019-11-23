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
      maze: {},
    }
  }

  componentDidMount() {
    console.log(beginner())
    this.beginnerSubscription = beginner().subscribe(maze => {
      console.log("hello", maze)
      this.setState({ maze })
    })
  }

  componentWillUnmount() {
    console.log(advanced())
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
