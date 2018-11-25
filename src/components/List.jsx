import React, { Component } from "react";
import Tag from "./Tag";

class List extends Component {
  renderTags() {
    if (this.props.tags.length === 0) {
      return (
        <ul id="list" className="nav">
          <li key="noresults" className="nav-item">
            Did not find any tags
          </li>
        </ul>
      );
    } else {
      return (
        <ul id="list" className="nav">
          {this.props.tags.map(tag => (
            <li key={tag.label} className="nav-item">
              <Tag
                label={tag.label}
                onHandleRadio={label => this.props.onHandleRadioButton(label)}
              />
            </li>
          ))}
        </ul>
      );
    }
  }
  render() {
    return (
      <React.Fragment>
        <div className="card" style={{ width: "100%", marginTop: "50px" }}>
          <div className="card-header">Tags</div>
          {this.renderTags()}
        </div>

        <div className="card" style={{ width: "100%", marginTop: "25px" }}>
          <div className="card-header">City</div>
        </div>
      </React.Fragment>
    );
  }
}

export default List;
