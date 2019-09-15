import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

import FacebookLogin from 'react-facebook-login';

class Facebook extends Component {
    state = {
        isLoggedIn: false,
        userID: '',
        name: '',
        email: '',
        picture: '',
        loggedInWithFacebook: false
    }

    //Function that runs when facebook button is clicked
    // componentClicked = () => {
    //     var userInfo = localStorage.getItem("userData")
    // }

    //function that run after user logs in
    responseFacebook = (response) => {
        console.log(response)
        localStorage.setItem("userInfo", response.email)
        window.location = "/userRegistration";
    }
    render() {
        return (
            <FacebookLogin
                appId='716898738735146'
                // autoLoad = {true}
                fields="name,email,picture"
                // onClick={this.componentClicked}
                callback={this.responseFacebook}

            />
        );
    }
}

export default Facebook;