import React, { Component } from "react";
import logo from "../Images/logo.svg";

class Search extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <img
          id="logo"
          src={logo}
          width="25%"
          height="20%"
          className="App-logo"
          alt="react logo"
        />
        <form action="">
          <div className="input-group mb-3">
            <input
              type="url"
              className="form-control"
              placeholder="Image URL"
              aria-label="Image URL"
              aria-describedby="button-addon2"
              required="required"
            />
            <input
              type="submit"
              className="btn btn btn-dark"
              id="button-addon2"
              value="Search"
            />
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default Search;
