import React, { Component } from "react";
import axios from "axios";
class UserRegistration extends Component {
  constructor() {
    super();

    this.state = {
      facebookUserID: "",
      firstName: "",
      lastName: "",
      email: "",
      imageUrl: "",
      camp: "",
      sector: "",
      unit: "",
      hutNumber1: "",
      hutNumber2: "",
      contactNumber: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  // Handle change in input fields
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  // Handle form submission
  onSubmit(e) {
    e.preventDefault();

    //Create a new user
    const newUser = {
      firstName: this.state.name,
      lastName: this.state.lastName,
      camp: this.state.camp,
      sector: this.state.sector,
      unit: this.state.unit,
      hutNumber1: this.state.hutNumber1,
      hutNumber2: this.state.hutNumber2,
      faceBookID: this.state.facebookUserID,
      email: this.state.email
    };
    alert("first name " + typeof newUser.firstName);

    axios
      .post("/api/registerUser", newUser)
      .then(res => {
        //If the user is already registered take them to their dash board. this is when /register
        //user link is accesed directly. need to control access here
        if (res.data.user) {
          window.location = "/userDashboard";
        } else {
          console.log(res);
          window.location = "/registerHut";
        }
      })
      .catch(err => {
        alert(" erros here are to be handlead");
        console.log(err);
        console.log(err.response.status);
        console.log(err.response.headers);
      });
  }

  //When the component mounts
  componentDidMount() {
    let userDetails = localStorage.getItem("userInfo");
    userDetails = JSON.parse(userDetails);
    let name;
    if (userDetails != null) {
      name = userDetails.name.split(" ");
    }

    if (userDetails) {
      this.setState({
        facebookUserID: userDetails.userID,
        firstName: name[0],
        lastName: name[1],
        email: userDetails.email,
        imageUrl: userDetails.picture.data.url
      });
    }
  }

  render() {
    //css
    const wholeComponent = {
      border: "1px solid black",
      padding: "20px",
      margin: " 20px"
    };
    const inputGroups = {
      margin: "10px"
    };
    const inputField = {
      marginRight: "10px"
    };
    const imageStyling = {
      height: "100px",
      width: "100px"
    };

    return (
      <div style={wholeComponent}>
        <img
          src={this.state.imageUrl}
          style={imageStyling}
          alt={this.state.name}
        />
        <form onSubmit={this.onSubmit}>
          <div style={inputGroups}>
            <input
              style={inputField}
              type="text"
              name="firstName"
              onChange={this.onChange}
              value={this.state.firstName}
            />
            <input
              style={inputField}
              type="text"
              name="lastName"
              onChange={this.onChange}
              value={this.state.lastName}
            />
            <input
              style={inputField}
              type="text"
              name="email"
              value={this.state.email}
              disabled
            />{" "}
            <br />
          </div>

          <div style={inputGroups}>
            <select
              style={inputField}
              value={this.state.camp}
              name="camp"
              onChange={this.onChange}
            >
              <option default> Camp </option>
              <option value="beldangi 1"> Beldanig - I </option>
              <option value="beldangi 2"> Beldanig - II </option>
              <option value="beldangi 3"> Beldanig - III </option>
              <option value="pathri"> Pathri </option>
              <option value="timai"> Timai </option>
              <option value="goldhap"> Goldhap </option>
              <option value="khudunabari"> Khudunabari </option>
            </select>
            <select
              style={inputField}
              value={this.state.sector}
              name="sector"
              onChange={this.onChange}
            >
              <option default> Sector </option>
              <option value="a"> A </option>
              <option value="b"> B </option>
              <option value="c"> C </option>
              <option value="d"> D </option>
              <option value="e"> E </option>
              <option value="f"> F </option>
              <option value="g"> G </option>
              <option value="h"> H </option>
              <option value="i"> I </option>
              <option value="j"> J </option>
            </select>
            <select
              style={inputField}
              value={this.state.unit}
              name="unit"
              onChange={this.onChange}
            >
              <option>Unit</option>
              <option value="1"> 1 </option>
              <option value="2"> 2 </option>
              <option value="3"> 3 </option>
              <option value="4"> 4 </option>
            </select>
          </div>
          <div style={inputGroups}>
            <label>Hut Number: </label>
            <input
              type="number"
              value={this.state.hutNumber1}
              name="hutNumber1"
              onChange={this.onChange}
            />{" "}
            -
            <input
              type="number"
              value={this.state.hutNumber2}
              name="hutNumber2"
              onChange={this.onChange}
            />
          </div>
          <div style={inputGroups}>
            <label> Contact Number: </label>
            <input
              type="text"
              value={this.state.contactNumber}
              name="contactNumber"
              onChange={this.onChange}
            />
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
