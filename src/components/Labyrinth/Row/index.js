import React from "react";
import Case from "../Case";
import classnames from "classnames";

import style from "./style.css"

import uuid from "uuid/v1";

export default ({ row, handlePlayer, players, index, currentPlayerId }) => {
  let caseNumber = 0
  return (
    <div className={classnames('row')}>
      {row.map(u => <Case key={uuid()} currentPlayerId={currentPlayerId} index={`${index}case:${caseNumber++}`} case={u} handlePlayer={handlePlayer} players={players} />)}
    </div>
  )
}
