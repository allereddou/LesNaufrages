import React from "react";
import Labyrinth from "../Labyrinth";

export default class extends React.Component {
  state = {
    players: []
  }

  componentDidMount() {

  }

  handlePlayer = (way) => {
    console.log(way)
    console.log('hello')
  }

  render() {
    return <Labyrinth players={this.state.players} handlePlayer={this.handlePlayer} />
  }
}