import React from "react";
import { compose, fromRenderProps } from "recompose";
import { MazeConsumer } from "../../services/maze";
import Row from "./Row";

import uuid from "uuid/v1";

const Labyrinth = ({ maze }) => {
  return (
    <div>
      {maze.map(row => <Row key={uuid()} row={row}/>)}
    </div>
  )
}

export default compose(
  fromRenderProps(MazeConsumer, (props) => props)
)(Labyrinth)