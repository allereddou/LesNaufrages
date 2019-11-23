import React from "react";
import classnames from "classnames";

import style from "./style.css"

export default (props) => {
  const { case: { top, right, bottom, left } } = props
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