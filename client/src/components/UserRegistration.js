import React, { Component } from 'react';
import axios from 'axios';
class UserRegistration extends Component {
    constructor(){
        super()
    
    this.state = { 
        facebookUserID: "",
        firstName: "",
        lastName:"",
        email: "",
        imageUrl: "",
        camp: "",
        sector:"",
        unit:"",
        hutNumber1: "",
        hutNumber2: "",
        contactNumber: ""
     }
     this.onChange = this.onChange.bind(this)
     this.onSubmit = this.onSubmit.bind(this);
    }

     // Handle change in input fields
     onChange(e){
         this.setState({
             [e.target.name] : e.target.value
         })
     }

     // Handle form submission
     onSubmit(e){
         e.preventDefault();
         console.log(this.state)
        //  window.location.href='/';
       axios.post("/api/registerUser", {
            firstName : this.state.name,
            lastName: this.state.lastName,
            camp: this.state.camp,
            sector: this.state.sector,
            unit: this.state.unit,
            hutNumber1: this.state.hutNumber1,
            hutNumber2: this.state.hutNumber2,
            faceBookID: this.state.facebookUserID,
            email: this.state.email
        }).then(
            res => {
                console.log(res)
             }).catch(err =>{
                 console.log(err)
             })

     }

     //When the component mounts
    componentDidMount(){
        let userDetails = localStorage.getItem("userInfo")
        userDetails = JSON.parse(userDetails);
        let name = userDetails.name.split(' ');


        if(userDetails){
            this.setState({
                facebookUserID : userDetails.userID,
                firstName : name[0],
                lastName : name[1],
                email : userDetails.email,
                imageUrl: userDetails.picture.data.url
            })
        }
    }

   
    render() { 
        //css
        const wholeComponent = {
            border: "1px solid black",
            padding: "20px",
            margin: " 20px"
        }
        const inputGroups = {
            margin: "10px"
        }
        const inputField = {
            marginRight: "10px"
        }
        const imageStyling = {
            height: "100px",
            width: "100px"
        }
    
        return (
            <div style={wholeComponent}>
                <img src={this.state.imageUrl} style={imageStyling} alt={this.state.name}/>
                <form onSubmit={this.onSubmit}>
                    <div style={inputGroups}>
                    <input style={inputField}
                            type="text" 
                            name="firstName" onChange = {this.onChange} 
                            value={this.state.firstName}/>

                    <input style={inputField} 
                            type="text" 
                            name="lastName"
                            onChange={this.onChange}
                            value={this.state.lastName} />

                    <input style={inputField} 
                            type="text" 
                            name="email"
                            value={this.state.email}  
                            disabled/> <br/>
                    </div>
                    
                <div style={inputGroups}>
                    <select style={inputField} 
                            value={ this.state.camp}
                            name="camp"
                            onChange={this.onChange}>

                        <option default > Camp </option>
                        <option>Beldaing - I </option>
                        <option>Beldaing - II </option>
                        <option>Beldaing - III </option>
                        <option>Pathri </option>
                        <option>Timai </option>
                        <option>Goldhap</option>
                        <option>Khudunabari</option>
                    </select> 
                    <select style={inputField} 
                            value={this.state.sector}
                            name="sector"
                            onChange={this.onChange}>

                        <option default > Sector </option>
                        <option>A</option>
                        <option>B</option>
                        <option>C</option>
                        <option>D</option>
                        <option>E</option>
                        <option>F</option>
                        <option>G</option>
                        <option>H</option>
                        <option>I</option>        
                    </select> 
                    <select style={inputField} 
                            value={this.state.unit}
                            name="unit"
                            onChange={this.onChange}>
                    <option>Unit</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4 </option>
                    </select> 
                    </div>
                    <div style={inputGroups}>
                        <label>Hut Number: </label>
                        <input type="number" 
                                value={this.state.hutNumber1}
                                name="hutNumber1"
                                onChange={this.onChange}
                                /> - 
                        <input type="number" 
                                value={this.state.hutNumber2}
                                name="hutNumber2"
                                onChange={this.onChange} />
                    </div>
                    <div style={inputGroups} >
                        <label> Contct Number: </label>
                        <input type='text' 
                                value={this.state.contactNumber}
                                name = "contactNumber"
                                onChange={this.onChange}/>
                    </div>
                    <div style={inputGroups}>
                    <input type="submit" value="Submit" />
                    </div>

                </form>
            </div>
          );
    }
}
 
export default UserRegistration;