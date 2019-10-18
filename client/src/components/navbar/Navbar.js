import React, { Component } from "react";
import { dataContext } from "../../contexts/dataContext";
import { Link } from "react-router-dom";

//Linking local files
import "./navbar.css";

class Navbar extends Component {
  //consuming context
  static contextType = dataContext;

  constructor() {
    super();
    this.state = {
      isLoggedIn: false
    };
    this.signOutUser = this.signOutUser.bind(this);
  }

  //when component loads check local storage to see if user is logged in
  componentDidMount() {
    let loggedInuser = localStorage.getItem("userInfo");
    if (loggedInuser) {
      this.setState({
        loggedInuser: true
      });
    } else {
      this.setState({
        loggedInuser: false
      });
    }
  }

  //Sign out user when sign out button is clicked.
  signOutUser(e) {
    e.preventDefault();
    localStorage.removeItem("userInfo");
    window.location = "/";
  }

  render() {
    //css
    const navigationStyle = {
      paddingTop: "0px",
      background: "#3299CC",
      borderBottom: "1px solid white"
    };

    const navBarBand = {
      fontFamily: " 'Ubuntu', sans-serif",
      fontSize: "40px",
      fontWeight: "Bold",
      color: "white"
    };

    return (
      <nav
        style={navigationStyle}
        className="navbar navbar-expand-lg navbar-light"
      >
        <Link className="navbar-brand" style={navBarBand} to="/">
          Our Camp
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{
            background: "white"
          }}
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarText">
          {this.state.loggedInuser ? (
            <ul className="navbar-nav ml-auto">
              <li>
                <Link to="/" className="NavBtns" onClick={this.signOutUser}>
                  Sign Out
                </Link>
              </li>
              <li>
                <Link to="/" className="NavBtns" onClick={this.signOutUser}>
                  Image Archive
                </Link>
              </li>
            </ul>
          ) : (
            <ul className="navbar-nav ml-auto">
              <li>
                <Link to="/" className="NavBtns">
                  Sign in
                </Link>
              </li>
              <li>
                <Link to="/" className="NavBtns" onClick={this.signOutUser}>
                  Register Hut
                </Link>
              </li>
              <li>
                <Link to="/" className="NavBtns" onClick={this.signOutUser}>
                  Image Archive
                </Link>
              </li>
            </ul>
          )}
        </div>
      </nav>
    );
  }
}

export default Navbar;
