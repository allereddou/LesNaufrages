import React from "react";
import classnames from "classnames";

import style from "./style.css"

export default class extends React.Component {
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
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
    if (this.props.case.top === 1) {
      this.props.handlePlayer('moveTop')
    }
  }

  moveBottom = () => {
    if (this.props.case.top === 1) {
      this.props.handlePlayer('moveBottom')
    }
  }

  moveLeft = () => {
    if (this.props.case.top === 1) {
      this.props.handlePlayer('moveLeft')
    }
  }

  moveRight = () => {
    if (this.props.case.top === 1) {
      this.props.handlePlayer('moveRight')
    }
  }

  render() {
    const { case: { top, right, bottom, left }, players } = this.props
    return (
      <div className={classnames(
        'case',
        {
          'top': top === 0,
          'bottom': bottom === 0,
          'left': left === 0,
          'right': right === 0,
        })
      } />
    )
  }
}