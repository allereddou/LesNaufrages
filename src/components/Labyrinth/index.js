import React from "react";
import { compose, fromRenderProps } from "recompose";
import { MazeConsumer } from "../../services/maze";
import Row from "../Row";

import uuid from "uuid/v1";

const Labyrinth = ({ maze }) => {
  return (
    <>
      {maze.map(row => <Row key={uuid()} row={row}/>)}
    </>
  )
}

export default compose(
  fromRenderProps(MazeConsumer, (props) => props)
)(Labyrinth)