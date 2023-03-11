import React, { Component } from "react";
import LifecycleB from "./LifecycleB";

class LifecycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "jenish",
    };
    console.log("LifecycleA constructor");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleA getDerivedStateFromprops");
    return null;
  }
  componentDidMount() {
    console.log("LifecycleA componentDidMount");
  }
  shouldComponentUpdate() {
    console.log("LifecycleA shouldCompnenetUpdate");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, preState) {
    console.log("LifecycleA getSnapshotBeforeUpdate");
    return null;
  }
  componentDidUpdate() {
    console.log("LifecycleA componentDidUpdate");
  }
  changeState = () => {
    this.setState({
      name: "Jai Shree Ram",
    });
  };

  render() {
    console.log("LifecycleA render");
    return (
      <div>
        <div>LificycleA</div>
        <button onClick={this.changeState}>Change state</button>
        <LifecycleB />
      </div>
    );
  }
}

export default LifecycleA;
