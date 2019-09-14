import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

import FacebookLogin from 'react-facebook-login';

class Facebook extends Component {
    state = { 
        isLoggedIn: false,
        userID: '',
        name : '',
        email : '',
        picture: '',
        loggedInWithFacebook: false
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
         var userInfo = localStorage.getItem("userData")
         alert(userInfo)
         window.location="http://www.google.com"
     }
    render() { 
        let fbContent;
         if(this.state.isLoggedIn) {
             axios.post('/api/authemticateUser',{email : this.state.email}).then(
                 res =>{
                     console.log(res);
                     if(!res.data.userRegistered){
                         this.setState({
                             loggedInWithFacebook : true
                         })
                        
                         localStorage.setItem("userData", JSON.stringify(this.state))
                     }
                 }
             )


          
       
         }else{
             fbContent = (
                 <FacebookLogin
                    appId= '716898738735146'
                    // autoLoad = {true}
                    fields="name,email,picture"
                    onClick={this.componentClicked}
                    callback = {this.responseFacebook}

                 />
             )
         
         }
        return (
            <div>
                {(this.state.loggedInWithFacebook) ? <Redirect to='/userRegistration' /> : fbContent}
            
            </div>
          );
    }
}
 
export default Facebook;