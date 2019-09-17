import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import axios from  "axios";

class Facebook extends Component {
    state = {}

    
    //function that run after user logs in
    responseFacebook = (response) => {
        if(response.status === "unknown"){
            window.location = "/"
        }else{
            console.log(response)
            localStorage.setItem("userInfo", JSON.stringify(response))

            //Making axios call to check if the user is fully registered
            axios.post("/api/authenticateuser", {
                email : response.email
            }).then((res => {
                    console.log(res)
                    //if user is registered
                    if (res.data.userRegistered) {
                        window.location = "/registerHut"
                    } else {
                        // If user is not registered.
                        console.log("logging after validation - negative ... " )
                        window.location = "/userRegistration"
                    }
                })
            )
            

        }
        
    }

    //rndering in the page
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