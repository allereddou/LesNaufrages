import React from "react";
import classnames from "classnames";

import style from "./style.css"

export default (props) => {
  const { case: { top, right, bottom, left } } = props
  return (
    <div className={classnames(
      {
        'top': top === 1,
        'bottom': bottom === 1,
        'left': left === 1,
        'right': right === 1,
      })
    } />
  )
}