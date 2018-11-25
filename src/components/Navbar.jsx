import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav className="fixed-top App-navbar">
        <div className="navbar-format">
          <a className="navbar-brand" href="#">
            <h2 style={{ display: "inline" }}>Swag Search</h2>
          </a>
          <div style={{ float: "right" }}>
            <ul className="nav justify-content-end">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  <button className="btn btn-dark m-2">Search</button>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <button className="btn btn-dark m-2">About</button>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <button className="btn btn-dark m-2">Login / Sign Up</button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
