import React, { Component } from "react";
import ReactImage from "../Images/react.png";
import ClarifaiImage from "../Images/clarifai.png";
import NodeImage from "../Images/nodejs.png";

class About extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="list-group">
          <div
            className="list-group-item list-group-item-action active"
            style={{ background: "#282c34" }}
          >
            <h4 style={{ fontWeight: "bold" }}>Technology</h4>
          </div>
          <div className="list-group-item list-group-item-action">
            <a
              href="https://reactjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={ReactImage}
                alt="React logo"
                style={{ marginRight: "5px" }}
                height="100px"
                width="100px"
              />
              <h3 style={{ display: "inline" }}>
                React.js - Client / Front End
              </h3>
            </a>
          </div>
          <div className="list-group-item list-group-item-action">
            <a
              href="https://nodejs.org/en/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={NodeImage}
                alt="Node logo"
                style={{ marginRight: "5px" }}
                height="100px"
                width="100px"
              />
              <h3 style={{ display: "inline" }}>Node.js - Server / Back End</h3>
            </a>
          </div>
          <div className="list-group-item list-group-item-action">
            <a
              href="https://clarifai.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={ClarifaiImage}
                alt="Clarifai logo"
                style={{ marginRight: "5px" }}
                height="100px"
                width="100px"
              />
              <h3 style={{ display: "inline" }}>
                Clarifai - Image Recognition
              </h3>
            </a>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default About;
