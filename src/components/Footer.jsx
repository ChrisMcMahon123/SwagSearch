import React, { Component } from "react";
import hackwestern from "../Images/hackwestern.png";
class Footer extends Component {
  render() {
    return (
      <footer id="footer">
        <div id="footer-container">
          <span>Hack Western V </span>
          <img
            src={hackwestern}
            alt="Hack Western Logo"
            height="2%"
            width="2%"
          />
          <span> November 2018</span>
        </div>
      </footer>
    );
  }
}

export default Footer;
