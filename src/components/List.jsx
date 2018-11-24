import React, { Component } from "react";
import Tag from "./Tag";

class List extends Component {
  state = {
    tags: [
      { label: "Tag 1", checked: 0 },
      { label: "Tag 2", checked: 1 },
      { label: "Tag 3", checked: 1 }
    ]
  };

  renderTags() {
    if (this.state.tags.length === 0) {
      return (
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Did not find any tags</li>
        </ul>
      );
    } else {
      return (
        <ul className="list-group list-group-flush">
          {this.state.tags.map(tag => (
            <li className="list-group-item">
              <Tag key={tag.label} label={tag.label} checked={tag.checked} />
            </li>
          ))}
        </ul>
      );
    }
  }
  render() {
    return (
      <div id="list" className="card" style={{ width: "18rem" }}>
        <div className="card-header">Tags</div>
        {this.renderTags()}
      </div>
    );
  }
}

export default List;
