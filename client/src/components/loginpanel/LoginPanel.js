import React, { Component } from "react";
import FacebookBtn from "../facebookBtn/facebookBtn.js";
import axios from "axios";

class LoginWithSocial extends Component {
  state = {
    showRegistrationOption: false
  };
  render() {
    const buttonsStyling = {
      margin: "10px"
    };

    //Function to revel login options
    const showLoginBtns = () => {
      var userInfo = localStorage.getItem("userInfo");
      userInfo = JSON.parse(userInfo);
      if (userInfo) {
        console.log(userInfo.email);

        //if there is user in local storage make an axios call and validate user.
        axios
          .post("/api/authenticateUser", {
            email: userInfo.email
          })
          .then(response => {
            console.log(response);
            //if user is already registered, send user to hut registation page
            if (response.data.userRegistered) {
              window.location = "/registerHut";
            } else {
              //if the user is not already registered, send user to complete registraton
              // Also clear anything in locl storage
              localStorage.clear();
              window.location = "/userRegistration";
            }
          });

        //if the user is not in local storage give user options to login
      } else {
        this.setState({
          showRegistrationOption: true
        });
      }
    };

    return (
      <div
      //   style={wholeComponent}
      >
        {this.state.showRegistrationOption ? (
          <FacebookBtn />
        ) : (
          <div style={buttonsStyling}>
            <button className="btn loginBtns" onClick={showLoginBtns}>
              Register a hut
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default LoginWithSocial;
