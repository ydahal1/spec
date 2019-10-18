import React, { Component } from "react";
import axios from "axios";
class HutRegistration extends Component {
  constructor() {
    super();
    this.state = {
      registeringFor: "",
      familyLastName: "",
      numberOfFamily: "",
      members: ["yadhap"],
      camp: "",
      sector: "",
      unit: "",
      hutType: "single",
      hutNumber1: "",
      hutNumber2: "",
      district: "",
      village: "",
      country: "",
      state: "",
      city: "",
      familyStory: "",
      own: "",
      phone: "1234526542",

      //Current logged in user's last name
      firstNameLoggedInUser: "",
      lastNameLoggedInuser: "",
      campLoggedInUser: "",
      sectorLoggedInUser: "",
      unitLoggedInUser: "",
      hutNumber1LoggedInUser: "",
      hutNumber2LoggedInUser: ""
    };
    this.onChangeRadio = this.onChangeRadio.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  // radio btns on change
  onChangeRadio(event) {
    this.setState({
      registeringFor: event.target.value
    });
  }

  //Onchange other input fields
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  //on form submission
  onFormSubmit = event => {
    event.preventDefault();
    alert("subbmitting form: " + this.state.registeringFor);
    let user = {};
    if (this.state.registeringFor === "own") {
      user = {
        familyLastName: this.state.lastNameLoggedInuser,
        camp: this.state.campLoggedInUser,
        sector: this.state.sectorLoggedInUser,
        unit: this.state.unitLoggedInUser,
        hutNumber1: this.state.hutNumber1LoggedInUser,
        hutNumber2: this.state.hutNumber2LoggedInUser,
        district: this.state.district,
        village: this.state.village,
        country: this.state.country,
        state: this.state.state,
        city: this.state.city,
        phone: this.state.phone,
        members: this.state.members,
        familyStory: this.state.familyStory,
        registeredBy:
          this.state.firstNameLoggedInUser +
          " " +
          this.state.lastNameLoggedInuser
      };
    } else {
      user = {
        familyLastName: this.state.familyLastName,
        camp: this.state.camp,
        sector: this.state.sector,
        unit: this.state.unit,
        hutNumber1: this.state.hutNumber1,
        hutNumber2: this.state.hutNumber2,
        district: this.state.district,
        village: this.state.village,
        country: this.state.country,
        state: this.state.state,
        city: this.state.city,
        phone: this.state.phone,
        members: this.state.members,
        familyStory: this.state.familyStory,
        registeredBy:
          this.state.firstNameLoggedInUser +
          " " +
          this.state.lastNameLoggedInuser
      };
    }
    axios
      .post("/api/registerHuts", user)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  //when componne loads make logged in users data ready
  componentDidMount() {
    let userInfo = localStorage.getItem("userInfo");
    userInfo = JSON.parse(userInfo);
    let email = userInfo.email;
    let name = userInfo.name;
    name = name.split(" ");
    this.setState({
      firstNameLoggedInUser: name[0],
      lastNameLoggedInuser: name[1]
    });
    //this step should be removed. this information should
    //be gathered when user is sent for authentication if possibele and should be stored in global storage or global state
    axios
      .post("/api/loggedInUsersDetail", { email })
      .then(res => {
        this.setState({
          campLoggedInUser: res.data.user.camp,
          sectorLoggedInUser: res.data.user.sector,
          unitLoggedInUser: res.data.user.unit,
          hutNumber1LoggedInUser: res.data.user.hutNumber1,
          hutNumber2LoggedInUser: res.data.user.hutNumber2
        });
      })
      .catch(err => {
        //Hnadle this error in front end
        console.log(err);
      });
  }

  render() {
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

    const fieldset = {
      border: "1px dotted gray",
      margin: "20px"
    };

    return (
      <div style={wholeComponent}>
        <form>
          {/* Radio Buttons registering for */}
          <fieldset style={fieldset}>
            <div style={inputField}>
              <input
                type="radio"
                value="own"
                checked={this.state.registeringFor === "own"}
                onChange={this.onChangeRadio}
              />{" "}
              I am registering my hut
            </div>
            <div style={inputField}>
              <input
                type="radio"
                value="others"
                checked={this.state.registeringFor === "others"}
                onChange={this.onChangeRadio}
              />{" "}
              I am registering my nighbors/relative/friend's hut
            </div>

            {/* Family last name */}
            <div style={inputGroups}>
              <input
                style={inputField}
                type="text"
                name="familyLastName"
                placeholder="FamilyLast Name"
                onChange={this.onChange}
                value={
                  this.state.registeringFor === "own"
                    ? this.state.lastNameLoggedInuser
                    : this.state.familyLastName
                }
              />
              <input
                style={inputField}
                type="number"
                max="20"
                min="1"
                placeholder="Family size"
              />
            </div>
          </fieldset>

          {/* Camp address starts here .......................... */}
          {this.state.registeringFor !== "own" ? (
            // if user is registering own hut
            <fieldset style={fieldset}>
              <legend>Camp Address </legend>
              <div style={inputGroups}>
                <select
                  style={inputField}
                  name="camp"
                  value={this.state.camp}
                  onChange={this.onChange}
                >
                  <option></option>
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
                  name="sector"
                  onChange={this.onChange}
                  value={this.state.sector}
                >
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
                  name="unit"
                  onChange={this.onChange}
                  value={this.state.unit}
                >
                  <option value="1"> 1 </option>
                  <option value="2"> 2 </option>
                  <option value="3"> 3 </option>
                  <option value="4"> 4 </option>
                </select>
              </div>
              <div style={inputGroups}>
                <select
                  style={inputField}
                  name="hutType"
                  onChange={this.onChange}
                  value={this.state.hutType}
                >
                  <option value="single">Single Hut </option>
                  <option value="double">Double Hut</option>
                </select>

                {this.state.hutType === "single" ? (
                  <input
                    style={inputField}
                    type="number"
                    min="0"
                    max="500"
                    name="hutNumber1"
                    onChange={this.onChange}
                    value={this.state.hutNumber1}
                  />
                ) : (
                  <span>
                    <input
                      style={inputField}
                      type="number"
                      min="0"
                      max="500"
                      name="hutNumber1"
                      onChange={this.onChange}
                      value={this.state.hutNumber1}
                    />
                    {""}-{" "}
                    <input
                      style={inputField}
                      type="number"
                      min="0"
                      max="500"
                      name="hutNumber2"
                      onChange={this.onChange}
                      value={this.state.hutNumber2}
                    />
                  </span>
                )}
              </div>
            </fieldset>
          ) : (
            <fieldset style={fieldset}>
              <div>
                <input
                  type="text"
                  onChange={this.onChange}
                  value={this.state.campLoggedInUser}
                />
                <input
                  type="text"
                  onChange={this.onChange}
                  value={this.state.sectorLoggedInUser}
                />
                <input
                  type="text"
                  onChange={this.onChange}
                  value={this.state.unitLoggedInUser}
                />
                {this.state.hutNumber2 ? (
                  (
                    <input
                      type="text"
                      onChange={this.onChange}
                      value={this.state.hutNumber1LoggedInUser}
                    />
                  ) -
                  (
                    <input
                      type="text"
                      onChange={this.onChange}
                      value={this.state.hutNumber2LoggedInUser}
                    />
                  )
                ) : (
                  <input
                    type="text"
                    onChange={this.onChange}
                    value={this.state.hutNumber1LoggedInUser}
                  />
                )}
              </div>
            </fieldset>
          )}
          {/* Bhutan addrsss ................. */}
          <fieldset style={fieldset}>
            <legend> Bhutan Address : </legend>
            <input
              style={inputField}
              placeholder="District"
              type="text"
              name="district"
              onChange={this.onChange}
              value={this.state.district}
            />

            <input
              style={inputField}
              placeholder="village"
              type="text"
              name="village"
              onChange={this.onChange}
              value={this.state.village}
            />
          </fieldset>

          <fieldset style={fieldset}>
            {/* Current address ...................... */}
            <legend> Current Address : </legend>
            <div style={inputGroups}>
              <select
                style={inputField}
                name="country"
                onChange={this.onChange}
                value={this.state.country}
              >
                <option value="AU">Australia</option>
                <option value="BT"> Bhutan </option>
                <option value="CA">Canada</option>
                <option value="DK">Denmark</option>
                <option value="IN">India</option>
                <option value="NP">Nepal</option>
                <option value="NL">Netherlands</option>
                <option value="NZ">New Zealand</option>
                <option value="NO">Norway</option>
                <option value="GB">United Kingdom</option>
                <option value="US">United States</option>
                <option value="others"> Other </option>
              </select>

              <input
                style={inputField}
                type="text"
                placeholder="state/province"
                name="state"
                onChange={this.onChange}
                value={this.state.state}
              />
              <input
                style={inputField}
                type="text"
                placeholder="city"
                name="city"
                onChange={this.onChange}
                value={this.state.city}
              />
            </div>
          </fieldset>
          <fieldset style={fieldset}>
            <legend> Family Story : </legend>
            <div style={inputGroups}>
              <textarea
                style={inputField}
                rows="4"
                cols="100"
                name="familyStory"
                onChange={this.onChange}
                value={this.state.familystory}
              />
            </div>
          </fieldset>
          <div style={inputGroups}>
            <input
              style={inputField}
              type="submit"
              value="submit"
              onClick={this.onFormSubmit}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default HutRegistration;
