import React from "react";
import classnames from "classnames";
import uuid from "uuid/v1";

import Player from "../Player";

import style from "./style.css";

export default class extends React.Component {
  componentDidMount() {
    if (this.playerIsHere(0)) {
      document.addEventListener("keydown", this.handleKeyDown);
    }
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    switch (event.keyCode) {
      case 65:
        this.moveLeft()
        break;
      case 83:
        this.moveBottom()
        break;
      case 68:
        this.moveRight()
        break;
      case 87:
        this.moveTop()
        break;
      default:
        break;
    }
  }

  moveTop = () => {
    if (this.props.case.top === 1 && this.playerIsHere(this.props.currentPlayerId)) {
      this.props.handlePlayer('moveTop')
    }
  }

  moveBottom = () => {
    if (this.props.case.bottom === 1 && this.playerIsHere(this.props.currentPlayerId)) {
      this.props.handlePlayer('moveBottom')
    }
  }

  moveLeft = () => {
    if (this.props.case.left === 1 && this.playerIsHere(this.props.currentPlayerId)) {
      this.props.handlePlayer('moveLeft')
    }
  }

  moveRight = () => {
    if (this.props.case.right === 1 && this.playerIsHere(this.props.currentPlayerId)) {
      this.props.handlePlayer('moveRight')
    }
  }

  playerIsHere = (i) => {
    return this.props.index.toString() === this.getPlayerIndex(i)
  }

  getPlayerIndex = (i) => {
    const player = this.props.players[i]
    return `row:${player && player.positionY}case:${player && player.positionX}`
  }

  playersHere = () => {
    return this.props.players.filter(player => this.props.index.toString() === `row:${player.positionY}case:${player.positionX}`)
  }

  render() {
    const { case: { top, right, bottom, left } } = this.props
    return (
      <div className={classnames(
        'case',
        {
          'top': top === 0,
          'bottom': bottom === 0,
          'left': left === 0,
          'right': right === 0,
        })
      }>
        {this.playersHere().map(p => <Player key={uuid()} />)}
      </div>
    )
  }
}
