import React from "react";
import { compose, fromRenderProps } from "recompose";
import { MazeConsumer } from "../../services/maze";
import Row from "./Row";

import uuid from "uuid/v1";

const Labyrinth = ({ maze, handlePlayer, players }) => {
  return (
    <div>
      {maze.map(row => <Row key={uuid()} handlePlayer={handlePlayer} players={players} row={row} />)}
    </div>
  )
}

export default compose(
  fromRenderProps(MazeConsumer, (props) => props)
)(Labyrinth)