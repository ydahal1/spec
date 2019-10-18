import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

//Import local components
import "./displayHuts.scss";

const iconsStyling = {
  paddingRight: "4px",
  paddingLeft: "4px",
  opacity: "0.9"
};

class DisplayHuts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMembers: false,
      huts: []
    };
    this.toggleDisplayMembers = this.toggleDisplayMembers.bind(this);
  }

  //function to display members
  toggleDisplayMembers() {
    this.setState({ showMembers: !this.state.showMembers });
  }

  //When the component is done mounting
  componentDidMount() {
    let huts = JSON.parse(localStorage.getItem("myUnit"));
    let pulledHuts = [];
    huts.map(hut => {
      return pulledHuts.push(hut);
    });
    console.log(pulledHuts);
    this.setState({ huts: pulledHuts });
  }
  render() {
    //css single Hut
    const singleHut = {
      border: "1px solid black",
      padding: "15px",
      margin: "10px"
    };
    return (
      <div className="wholeComponent">
        <div
          className="row"
          style={{ margin: "30px", textAlign: "center !important" }}
        >
          {this.state.huts.map(hut => {
            return (
              <div style={{ padding: "10px" }} key={hut._id}>
                <div className="card">
                  <div
                    className="cardHeader"
                    style={{
                      background: "#3299CC",
                      paddingTop: "4px",
                      color: "white",
                      borderTopLeftRadius: "5%",
                      borderTopRightRadius: "5%"
                    }}
                  >
                    <h5>{hut.hutNumber1}</h5>
                  </div>
                  <div className="card-body">
                    <div className="card-title" style={{ fontWeight: "bold" }}>
                      {hut.familyLastName.toUpperCase()}
                    </div>
                    <div>
                      <img
                        src="https://res.cloudinary.com/djrmxber1/image/upload/c_scale,w_25/v1551838253/members.png"
                        alt="members"
                        style={iconsStyling}
                        onClick={this.toggleDisplayMembers}
                      />
                      <img
                        src="https://res.cloudinary.com/djrmxber1/image/upload/c_scale,w_25/v1551838474/mail.png"
                        alt="contact"
                        style={iconsStyling}
                      />
                      <img
                        src="https://res.cloudinary.com/djrmxber1/image/upload/c_scale,w_25/v1551837569/infoIcon.png"
                        alt="information"
                        style={iconsStyling}
                      />
                      <img
                        src="https://res.cloudinary.com/djrmxber1/image/upload/w_17/v1571328976/52WP75_AW01.jpg"
                        alt="information"
                        style={iconsStyling}
                        style={{
                          border: "1px solid black",
                          borderRadius: "50%",
                          padding: "2px",
                          paddingLeft: "3px"
                        }}
                      />
                    </div>
                  </div>
                  <div
                    className="cardFooter"
                    style={{
                      background: "#3299CC",
                      paddingRight: "8px",
                      paddingLeft: "8px",
                      color: "white",
                      borderBottomLeftRadius: "5%",
                      borderBottomRightRadius: "5%"
                    }}
                  >
                    {/* <p>{this.props.currentAddress[0]}</p> */}
                    Current address here
                  </div>
                </div>

                {/* Models */}
                <Modal isOpen={this.state.showMembers} centered={true}>
                  <ModalHeader>
                    <div className="modal-title w-100">
                      {/* {this.props.lastName.toUpperCase()} &nbsp; | &nbsp;
                    {this.props.camp}&nbsp; | &nbsp;
                    {this.props.sector}-{this.props.unit}. Hut # &nbsp;
                    {this.props.hutNumber} */}
                      {/* OTHER INFORMATION HERE */}
                    </div>
                  </ModalHeader>
                  <ModalBody>
                    {hut.members.map((member, index) => (
                      <div style={{ padding: "10px" }} key={index}>
                        {member}
                      </div>
                    ))}
                  </ModalBody>
                  <ModalFooter>
                    <Button
                      size="sm"
                      color="danger"
                      onClick={this.toggleDisplayMembers}
                    >
                      Close
                    </Button>
                  </ModalFooter>
                </Modal>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default DisplayHuts;
