import React from "react";
import { compose, fromRenderProps } from "recompose";

export default class extends React.Component {
  state = {
    username: '',
    password: '',
  }

  handleUsernameChange = (event) => {
    this.setState({ username: event.target.value });
  }

  handlePassowrdChange = (event) => {
    this.setState({ password: event.target.value });
  }

  login = () => {
    const { loginCb } = this.props
    loginCb(this.state.username, this.state.password)
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.username} onChange={this.handleUsernameChange} />
        <input type="password" value={this.state.password} onChange={this.handlePassowrdChange} />
        <button onClick={this.login}>
          Login
        </button>
      </div>
    )
  }
}