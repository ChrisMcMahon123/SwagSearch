import React, { Component } from "react";

class Tag extends Component {
  state = { label: this.props.label, checked: this.props.checked };

  render() {
    return (
      <div className="input-group">
        <div className="input-group-prepend">
          <div className="input-group-text">
            <input type="checkbox" id={this.state.label} />
          </div>
        </div>
        <label type="text" className="form-control" for={this.state.label}>
          {this.state.label}
        </label>
      </div>
    );
  }
}

export default Tag;
