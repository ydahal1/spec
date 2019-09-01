import React, { Component } from 'react';
import SearchHut from './SearchHut';
import LoginWithSocial from './loginWithButtons';

class Landing extends Component {
    state = {}
    render() {
        const wholeComponent = {
            border: "1px solid black",
            padding: "20px",
            margin: " 20px"
        }
        return (
            <div style={wholeComponent}>

                <SearchHut />
                <LoginWithSocial />
            </div>
        );
    }
}

export default Landing;