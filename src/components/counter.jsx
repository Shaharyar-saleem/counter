import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"]
  };

  styles ={
      fontSize: 15
  };
  render() {
    return(
    <div>
      <span style={this.styles} className={this.getBadgeClass()}>{this.countingFucntion()}</span>
      <button className="btn btn-secondary btn-sm">Increment</button>
      <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
    </div>
    );
  }

    getBadgeClass() {
        let classes = "badge m-3 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

  countingFucntion() {
    return this.state.count === 0 ? "zero" : this.state.count;
  }
}

export default Counter;
