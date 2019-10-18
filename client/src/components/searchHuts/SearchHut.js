import React, { Component } from "react";
import axios from "axios";

//Local file imports
import "./searchHut.css";
import "./dropdown.js";

//component
class SearchHut extends Component {
  constructor() {
    super();
    this.state = {
      camp: "",
      sector: "",
      unit: "",
      showSearchParams: false,
      campErr: false,
      sectorErr: false,
      unitErr: false,
      searchFieldEmpty: false
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  //when the form is submited
  onSubmit = e => {
    e.preventDefault();

    const { camp, sector, unit } = this.state;

    this.state.camp === ""
      ? this.setState({ campErr: true })
      : this.setState({ campErr: false });

    this.state.sector === ""
      ? this.setState({ sectorErr: true })
      : this.setState({ sectorErr: false });

    this.state.unit === ""
      ? this.setState({ unitErr: true })
      : this.setState({ unitErr: false });

    this.state.camp === "" || this.state.sector === "" || this.state.unit === ""
      ? this.setState({ searchFieldEmpty: true })
      : this.setState({ searchFieldEmpty: false });

    const url = `/api/renderHuts/${camp}/${sector}/${unit}`;

    //Making axios call
    axios
      .get(url)
      .then(res => {
        console.log(res.data);
        localStorage.setItem("myUnit", JSON.stringify(res.data));
        window.location = "/myUnit";
      })
      .catch(err => {
        console.log(err);
      });
  };

  //Onchange
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { campErr, sectorErr, unitErr } = this.state;
    return (
      <div className="container">
        <form className="form-inline" onSubmit={this.onSubmit}>
          <div className="input-group mb-2 mr-sm-2">
            <select
              className={
                campErr
                  ? "form-control form-control-lg form-control-err"
                  : "form-control form-control-lg"
              }
              // className="form-control form-control-lg"
              type="text"
              name="camp"
              onChange={this.onChange}
              value={this.state.camp}
            >
              <option value="">
                Camp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </option>
              <option value="beldangi 1">Beldaing-I</option>
              <option value="beldangi 2">Beldaing-II</option>
              <option value="beldangi 3">Beldaing-III</option>
              <option value="goldhap">Goldhap</option>
              <option value="khudunabari">Khudunabari</option>
              <option value="pathri">Pathri</option>
              <option value="timai">Timai</option>
            </select>
          </div>

          <div className="input-group mb-2 mr-sm-2">
            <select
              className={
                sectorErr
                  ? "form-control form-control-lg form-control-err"
                  : "form-control form-control-lg"
              }
              name="sector"
              onChange={this.onChange}
              value={this.state.sector}
            >
              <option value="">
                Sector&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </option>
              <option value="a">A</option>
              <option value="b">B</option>
              <option value="c">C</option>
              <option value="d">D</option>
              <option value="e">E</option>
              <option value="f">F</option>
              <option value="g">G</option>
              <option value="h">H</option>
              <option value="i">I</option>
            </select>
            <div></div>
          </div>

          <div className="input-group mb-2 mr-sm-2">
            <select
              name="unit"
              onChange={this.onChange}
              value={this.state.unit}
              className={
                unitErr
                  ? "form-control form-control-lg form-control-err"
                  : "form-control form-control-lg"
              }
            >
              <option value="">
                Unit&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>

          <button type="submit" className="btn  btn-lg mb-2">
            Go
          </button>
        </form>
        <div className="errors">
          <div>
            {this.state.searchFieldEmpty
              ? "* Please select all the fields"
              : null}
          </div>
        </div>
      </div>
    );
  }
}

export default SearchHut;
