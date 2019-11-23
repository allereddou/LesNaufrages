import React from "react";
import { currentUser, createUser, loginUser } from "./routes";

const LoginContext = React.createContext({
  currentUser: {},
})

export class LoginProvider extends React.Component {
  currentUserSubscription

  constructor(props) {
    super(props)
    this.state = {
      currentUser: {},
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

  render() {
    return (
      <LoginContext.Provider value={this.state}>
        {this.props.children}
      </LoginContext.Provider>
    )
  }
}

export const LoginConsumer = LoginContext.Consumer

