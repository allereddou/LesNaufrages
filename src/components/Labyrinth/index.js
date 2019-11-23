import React from "react";
import Row from "./Row";

import style from "./style.css"

import uuid from "uuid/v1";

const Labyrinth = ({ maze, handlePlayer, players, currentPlayerId }) => {
  let rowNumber = 0
  return (
    <div className={style.labyrinth}>
      {maze.map(row => <Row key={uuid()} currentPlayerId={currentPlayerId} index={`row:${rowNumber++}`} handlePlayer={handlePlayer} players={players} row={row} />)}
    </div>
  )
}

export default Labyrinth;
