import React from "react";
import { compose, fromRenderProps } from "recompose";
import { MazeConsumer } from "../../services/maze";
import Row from "./Row";

import style from "./style.css"

import uuid from "uuid/v1";

const Labyrinth = ({ maze, handlePlayer, players }) => {
  let rowNumber = 0
  return (
    <div className={style.labyrinth}>
      {maze.map(row => <Row key={uuid()} index={`row:${rowNumber++}`} handlePlayer={handlePlayer} players={players} row={row} />)}
    </div>
  )
}

export default compose(
  fromRenderProps(MazeConsumer, (props) => props)
)(Labyrinth)