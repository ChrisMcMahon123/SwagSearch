import React, { Component } from "react";
import logo from "../Images/logo.svg";
//import ScrollIntoView from "react-scroll-into-view";
import List from "./List";
import LeafletMap from "./LeafletMap";
////search/fashion-brand/
//https://www/google.ca

class Search extends Component {
  state = {
    url: "",
    valid1: 0,
    valid2: 0,
    city: "",
    radio: "",
    tags: []
  };

  constructor() {
    super();
    this.handleChangeURL = this.handleChangeURL.bind(this);
    this.handleChangeCity = this.handleChangeCity.bind(this);
    this.handleSubmitURL = this.handleSubmitURL.bind(this);
    this.handleSubmitCity = this.handleSubmitCity.bind(this);
  }

  handleChangeURL(event) {
    this.setState({ url: event.target.value });
  }

  handleChangeCity(event) {
    this.setState({ city: event.target.value });
  }

  handleSubmitURL(event) {
    event.preventDefault();

    const isImageUrl = require("is-image-url");

    //alert("IMAGE URL " + this.state.url);

    if (isImageUrl(this.state.url)) {
      this.setState({ valid1: 1 });

      fetch("http://localhost/something:8080", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          imageURL: this.state.imageURL
        })
      });

      this.setState({
        tags: [{ label: "Tag 1" }, { label: "Tag 2" }, { label: "Tag 3" }]
      });
    } else {
      this.setState({ valid1: -1 });
    }
  }

  handleChangeRadio = radio => {
    this.setState({ radio: radio });
    //alert("radio selected: " + radio);
  };

  handleSubmitCity(event) {
    event.preventDefault();

    //alert("City " + this.state.city + "Radio " + this.state.radio);

    fetch("http://localhost/something:8080", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        tag: this.state.radio,
        city: this.state.city
      })
    });

    //submit to server, based on response
    if (true) {
      this.setState({ valid2: 1 });
    } else {
      this.setState({ valid2: -1 });
    }
  }

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
        <form onSubmit={this.handleSubmitURL}>
          <div className="input-group mb-3">
            <input
              id="imageurl"
              name="imageurl"
              type="url"
              onChange={this.handleChangeURL}
              value={this.state.url}
              className="form-control"
              placeholder="Image URL"
              required="required"
            />

            <input type="submit" className="btn btn-dark" value="Submit" />
          </div>
        </form>
        {this.state.valid1 !== 0 &&
          (this.state.valid1 === -1 ? (
            <div className=" message btn bg-danger"> Invalid Image </div>
          ) : (
            <div>
              <form onSubmit={this.handleSubmitCity}>
                <List
                  tags={this.state.tags}
                  onHandleRadioButton={this.handleChangeRadio}
                />

                <div className="input-group">
                  <input
                    type="text"
                    placeholder="City"
                    className="form-control"
                    required="required"
                    onChange={this.handleChangeCity}
                    value={this.state.city}
                  />
                </div>
                <input
                  type="submit"
                  className="btn btn-dark m-2"
                  value="Search"
                />
              </form>
            </div>
          ))}
        {this.state.valid2 !== 0 &&
          (this.state.valid2 === -1 ? (
            <div className=" message btn bg-danger">
              {" "}
              No Results Found for that City{" "}
            </div>
          ) : (
            <div style={{ marginTop: "15px" }}>
              <LeafletMap />
            </div>
          ))}
      </React.Fragment>
    );
  }
}

export default Search;
