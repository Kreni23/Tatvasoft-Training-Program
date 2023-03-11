import React, { Component } from "react";
import UpdatedComponent from './WithCounter'

class HoverCounter extends Component{
  render() {
    const { count, increamentCount } = this.props;
    return <h2 onMouseOver={increamentCount}>{this.props.name} Hovered {count} times</h2>;
  }
}

export default UpdatedComponent(HoverCounter);
