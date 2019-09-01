import React, { Component } from 'react'
class LoginWithSocial extends Component {
    state = {}
    render() {
        const wholeComponent = {
            border: "1px solid black",
            padding: "20px",
            margin: " 20px"
        }
        return (
            <div style={wholeComponent}>
                <div>
                    <button>Register a hut</button>
                </div>
                <div>
                    <button>Sign in with google</button>
                    <a href={'auth/facebook'}> sig in with facebook</a>
                </div>
            </div >
        );
    }
}

export default LoginWithSocial;