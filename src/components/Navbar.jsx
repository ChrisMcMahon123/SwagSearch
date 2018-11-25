import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav className="fixed-top App-navbar">
        <div className="navbar-format">
          {/*eslint-disable-next-line*/}
          <a className="navbar-brand" href="#">
            <h2 style={{ display: "inline", fontWeight: "bold" }}>
              Swaggins Search
            </h2>
          </a>
          <div style={{ float: "right" }}>
            <ul
              className="nav nav-pills mb-3 justify-content-end m-2"
              id="pills-tab"
              role="tablist"
            >
              <li className="nav-item">
                <a
                  style={{ marginRight: "10px" }}
                  className="btn btn-dark"
                  id="pills-search-tab"
                  data-toggle="pill"
                  href="#pills-search"
                  role="tab"
                  onClick={() => this.props.onPageSelect("search")}
                >
                  Search
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="btn btn-dark"
                  id="pills-about-tab"
                  data-toggle="pill"
                  href="#pills-about"
                  role="tab"
                  onClick={() => this.props.onPageSelect("about")}
                >
                  About
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
