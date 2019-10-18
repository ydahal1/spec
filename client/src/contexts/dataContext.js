import React, { Component, createContext } from "react";

//exporting context
export const dataContext = createContext();

class dataContextProvider extends Component {
  //Global state
  state = {
    userLoggedIn: false,
    loggedInUserData: "",
    displayHutData: ""
  };

  //Function to store hut data in global variable
  onSubmit = e =>
    this.setState({
      userLoggedIn: true
    });
  render() {
    return (
      <dataContext.Provider value={{ ...this.state, onSubmit: this.onSubmit }}>
        {this.props.children}
      </dataContext.Provider>
    );
  }
}

export default dataContextProvider;
