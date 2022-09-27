import React, { Component } from "react";

export const Context = createContext();
export default class ContextProvider extends Component {
  state = {
    loggedIn: false,
  };
  updateState(data = {}) {
    this.setState({ ...data });
  }
  render() {
    return (
      <Context.Provider
        value={{ ...this.state, updateState: this.updateState }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}
