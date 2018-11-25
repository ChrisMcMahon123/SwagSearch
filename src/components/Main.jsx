import React, { Component } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Search from "./Search";
import Footer from "./Footer";

//<Carousel />
class Main extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="Area1">
          <Search />
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Main;
