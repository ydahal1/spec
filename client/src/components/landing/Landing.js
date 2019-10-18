import React, { Component } from "react";
import SearchHut from "../searchHuts/SearchHut";
import LoginPanel from "../loginpanel/LoginPanel.js";
import "./landing.css";

class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videoURL:
        "https://res.cloudinary.com/djrmxber1/video/upload/c_fit,g_north,h_720,w_1280,x_1280,y_130/v1549259002/background.mp4"
    };
  }
  render() {
    const container = {
      position: "relative",
      textAlign: "center"
    };

    const innerContainer = {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)"
    };
    return (
      <div style={container}>
        <video className="embed-responsive" loop autoPlay preload="auto" muted>
          <source src={this.state.videoURL} type="video/mp4" />
          <source src={this.state.videoURL} type="video/ogg" />
          <source src={this.state.videoURL} type="video/webm" />
          Your browser does not support the video tag.
        </video>
        <div style={innerContainer}>
          <SearchHut />
          <LoginPanel />
        </div>
      </div>
    );
  }
}

export default Landing;
