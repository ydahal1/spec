import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';
import FacebookConfig from '../../../config';

class LoginWithSocial extends Component {
    state = {
        isLoggedIn: false,
        usersID: '',
        name: '',
        email: '',
        picture: ''
    }
    responseFacebook = response => {
        console.log(response);
    }
    componentClicked = () => {
        console.log('clicked here yadahp');
    }
    render() {
        let fbContent;
        if (this.state.isLoggedIn) {
            fbContent = null;

        } else {
            fbContent = (
                <FacebookLogin
                    appId={FacebookConfig.appId}
                    autoLoad={true}
                    fields="name,email,picture"
                    onClick={this.componentClicked}
                    callback={this.responseFacebook} />
            )
        }
        const wholeComponent = {
            border: "1px solid black",
            padding: "20px",
            margin: " 20px"
        }
        return (
            <div style={wholeComponent}>
                {fbContent}
                <div>
                    <button>Register a hut</button>
                </div>
                <div>
                    <button>Sign in with google</button>
                    <a href={'/login/facebook'}>Facebook</a>

                </div>
            </div >
        );
    }
}

export default LoginWithSocial;