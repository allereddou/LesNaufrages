import React from "react";
import { compose, fromRenderProps } from "recompose";
import { LoginConsumer } from "../../services/login";

class Login extends React.Component {
  render() {
    console.log(this.props)
    const {loginCb} = this.props

    return (
      <div>
        <input type="text" />
        <input type="password" />
        <button onClick={loginCb}/>
      </div>
    )
  }
}

export default compose(
  fromRenderProps(LoginConsumer, props => props),
)(Login)
