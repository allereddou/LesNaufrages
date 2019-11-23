import React from "react";
import Case from "../Case";

import uuid from "uuid/v1";

export default ({ row }) => {
  return (
    <>
      {row.map(u => <Case key={uuid()} case={u} />)}
    </>
  )
}
