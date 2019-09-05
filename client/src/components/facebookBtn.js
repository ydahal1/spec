import React, { Component } from 'react';
import axios from 'axios';
import {Redirect} from 'react-router';

import FacebookLogin from 'react-facebook-login';

class Facebook extends Component {
    state = { 
        isLoggedIn: false,
        userID: '',
        name : '',
        email : '',
        picture: '',
        isAuthenticated: false
     }

     responseFacebook = response => {
         this.setState({
             isLoggedIn : true,
             userID: response.userID,
             name: response.name,
             email: response.email,
             picture: response.picture.data.url
         })
     }
     componentClicked = () =>{
         console.log("Component clicked")
     }
    render() { 
        <Redirect to="/userRegistration"/>
        let fbContent;
         if(this.state.isLoggedIn) {
             axios.post('/api/authemticateUser',{email : this.state.email}).then(
                 res =>{
                     console.log(res);
                     console.log(res.data.userRegistered);
                     

                 }
                 
             )

            fbContent = (
                <div style={{
                    width: '400px',
                    margin : 'auto',
                    background : '#f4f4f4',
                    padding: '20px'
                }}>
                    <img src={this.state.picture} alt={this.state.name} />
                    <h2> Welcome {this.state.name} </h2>

                </div>
            );
       
         }else{
             fbContent = (
                 <FacebookLogin
                    appId= '716898738735146'
                    autoLoad = {true}
                    fields="name,email,picture"
                    onClick={this.componentClicked}
                    callback = {this.responseFacebook}

                 />
             )
         

         }
        return (
            <div>
                {fbContent}

            </div>
          );
    }
}
 
export default Facebook;