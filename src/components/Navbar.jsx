import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav className="fixed-top App-navbar">
        <a className="navbar-brand" href="#">
          Swag Search
        </a>
        <button className="btn btn-dark m-2">Search</button>
        <button className="btn btn-dark m-2">About</button>
        <button className="btn btn-dark m-2">Login / Sign Up</button>
      </nav>
    );
  }
}

export default Navbar;
