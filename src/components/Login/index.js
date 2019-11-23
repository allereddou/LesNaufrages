import React from "react";
import logo from "../../images/logo.jpg";
import './style.css'
import axios from "axios";

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

  create = () => {
    axios.post('https://labyrinth-api.herokuapp.com/api/users/signup',
      {
        firstName: 'allaaao',
        lastName: "Xaaaaaa",
        email: this.state.username,
        team: "clickesti",
        password: this.state.password,
        confirmPassword: this.state.password
      }
    )
  }

  render() {
    return (
      <>
        <img src={logo} width="400px" />
        <h1 className={'title'}>The Great Escape</h1>
        <input type="text" value={this.state.username} onChange={this.handleUsernameChange} />
        <input type="password" value={this.state.password} onChange={this.handlePassowrdChange} />
        <button onClick={this.login} className={'login-button'} >
          Login
        </button>
        <button onClick={this.create} className={'login-button'} >
          Create account
        </button>
      </>
    )
  }
}
