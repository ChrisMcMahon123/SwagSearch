import React, { Component } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Search from "./Search";
import Footer from "./Footer";
import About from "./About";

class Main extends Component {
  state = {
    page: "search"
  };

  pageSelect = page => {
    this.setState({ page: page });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar onPageSelect={this.pageSelect} />
        <div className="tab-content" id="pills-tabContent">
          {this.state.page === "search" ? (
            <div
              className="Area1 tab-pane fade show active"
              id="pills-search"
              role="tabpanel"
            >
              <Search />
            </div>
          ) : (
            <div
              className="Area1 tab-pane fade show active"
              id="pills-about"
              role="tabpanel"
            >
              <About />
            </div>
          )}
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Main;
