import React, { Component } from "react";

export default class ReducerPametni extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  dispatch = (action) => {
    switch (action) {
      case "INCREMENT": {
        return this.setState((state) => ({ count: state.count + 1 }));
      }
      case "DECREMENT": {
        return this.setState((state) => ({ count: state.count - 1 }));
      }
      default:
        return this.setState;
    }
  };
  render() {
    return (
      <div>
        <h5>{this.state.count}</h5>
        <i
          className="fas fa-arrow-down"
          onClick={() => this.dispatch("DECREMENT")}
        ></i>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <i
          className="fas fa-arrow-up"
          onClick={() => this.dispatch("INCREMENT")}
        ></i>
      </div>
    );
  }
}
