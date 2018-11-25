import React, { Component } from "react";

class Tag extends Component {
  render() {
    return (
      <div className="input-group">
        <div className="input-group-prepend">
          <div className="input-group-text">
            <input
              name="tags"
              type="radio"
              id={this.props.label}
              onChange={() => this.props.onHandleRadio(this.props.label)}
              required="required"
            />
          </div>
        </div>
        <label type="text" className="form-control" htmlFor={this.props.label}>
          {this.props.label}
        </label>
      </div>
    );
  }
}

export default Tag;
