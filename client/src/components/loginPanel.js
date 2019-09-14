import React, { Component } from 'react'
import FacebookBtn from './facebookBtn';

class LoginWithSocial extends Component {
    state = {
        showRegistrationOption : false
    }
    render() {
        const wholeComponent = {
            border: "1px solid black",
            padding: "20px",
            margin: " 20px"
        }
        const buttonsStyling = {
            margin: "15px"
        }

        
        //Function to revel login options
        const showLoginBtns = ()=> {
            var userInfo = localStorage.getItem("userData")
            if(userInfo){
                window.location="http://www.google.com"
            }else{
                this.setState({
                    showRegistrationOption: true
                })
            }
         
        }

       
       
        return (
            <div style={wholeComponent}>
                
                {this.state.showRegistrationOption ?<FacebookBtn /> : <div style={buttonsStyling}>
                    <button onClick={showLoginBtns}>Register a hut</button>
                </div> }
            </div >
        );
    }
}

export default LoginWithSocial;