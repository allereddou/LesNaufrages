import React from "react";
import Case from "../Case";
import classnames from "classnames";

import style from "./style.css"

import uuid from "uuid/v1";

export default ({ row }) => {
  return (
    <div className={classnames('row')}>
      {row.map(u => <Case key={uuid()} case={u} />)}
    </div>
  )
}
