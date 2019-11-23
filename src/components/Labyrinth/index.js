import React from "react";
import { compose, fromRenderProps } from "recompose";
import { MazeConsumer } from "../../services/maze";

const Labyrinth = (props) => {
  console.log(props)
  return (
    <div/>
  )
}

export default compose(
  fromRenderProps(MazeConsumer, (props) => props)
)(Labyrinth)