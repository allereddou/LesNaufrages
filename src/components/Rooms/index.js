import React from "react";
import { compose, fromRenderProps } from "recompose";

class Rooms extends React.Component {
  render() {
    const { rooms } = this.props
    return (
      <div>
        {rooms.map(a => <div>{room.name}</div>)}
        <div>

        </div>
      </div>
    )
  }
}

export default compose(
  fromRenderProps(),
)(Rooms)