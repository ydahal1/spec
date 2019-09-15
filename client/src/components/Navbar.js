import React, { Component } from 'react';
class Navbar extends Component {
    constructor(){
        super();
        this.state = {
            isLoggedIn: false
        }
        this.signOutUser = this.signOutUser.bind(this)
    }
    

    //when component loads check local storage to see if user is logged in 
    componentDidMount() {

        let loggedInuser = localStorage.getItem("userInfo");
        if (loggedInuser) {
            this.setState({
                loggedInuser: true
            })
        } else {
            this.setState({
                loggedInuser: false
            })
        }
    }

    //Sign out user when sign out button is clicked.
    signOutUser(e){
        e.preventDefault();
        localStorage.removeItem("userInfo");
        window.location = "/"
    }

    render() {
        const wholeComponent = {
            border: "1px solid black",
            padding: "20px",
            margin: " 20px"
        }

        const navElements = {
            textAlign: "right"
        }


        return (
            <div style={wholeComponent}>
                <nav>
                    <div> Our Camp </div>
                    <div style={navElements} >
                        {this.state.loggedInuser ?
                            <button onClick={this.signOutUser}> Sign Out </button> :
                            <button> Sign in </button>}
                    </div>
                </nav>
            </div>

        );
    }
}

export default Navbar;