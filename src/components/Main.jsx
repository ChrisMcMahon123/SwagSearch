import React, { Component } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Search from "./Search";
import Carousel from "./Carousel";
import List from "./List";
import LeafletMap from "./LeafletMap";

//<Carousel />
class Main extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="Area1">
          <Search />
        </div>
        <div className="Area2">
          <List />
          <LeafletMap />
        </div>
      </React.Fragment>
    );
  }
}

export default Main;
