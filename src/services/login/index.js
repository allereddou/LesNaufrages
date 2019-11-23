import React from "react";
import { currentUser, createUser, loginUser } from "./routes";
import Login from "../../components/Login";

const LoginContext = React.createContext({
  currentUser: {},
})

export class LoginProvider extends React.Component {
  currentUserSubscription

  constructor(props) {
    super(props)
    this.state = {
      currentUser: null,
    }
  }

  componentDidMount() {
    this.currentUserSubscription = currentUser().subscribe(currentUser => {
      this.setState({ currentUser })
    })
  }

  componentWillUnmount() {
    this.currentUserSubscription && this.currentUserSubscription.unsubscribe()
  }

  login(username, password) {
    loginUser(username, password)
  }

  render() {
    return (
      <LoginContext.Provider value={this.state}>
        {this.state.currentUser == null ?
          <Login loginCb={this.login} />
          :
          this.props.children
        }
      </LoginContext.Provider>
    )
  }
}

export const LoginConsumer = LoginContext.Consumer

