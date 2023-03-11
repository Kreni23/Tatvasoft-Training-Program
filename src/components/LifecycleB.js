import React, { Component } from "react";

class LifecycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "jenish",
    };
    console.log("LifecycleB constructor");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleB getDerivedStateFromprops");
    return null;
  }
  componentDidMount() {
    console.log("LifecycleB componentDidMount");
  }
  shouldComponentUpdate() {
    console.log("LifecycleB shouldCompnenetUpdate");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, preState) {
    console.log("LifecycleB getSnapshotBeforeUpdate");
    return null;
  }
  componentDidUpdate() {
    console.log("LifecycleB componentDidUpdate");
  }

  render() {
    console.log("LifecycleB render");
    return <div>LificycleB</div>;
  }
}

export default LifecycleB;
