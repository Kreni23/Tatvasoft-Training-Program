import React, { Component } from "react";

export class Conditions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true
    };
  }

  render() {

    //Method 1
    // if (this.state.isLoggedIn) {
    //   return <div>Welcome Kreni</div>;
    // } else {
    //   return <div>Welcome Guest</div>;
    // }

    //Method 2
    // let message
    // if (this.state.isLoggedIn) {
    //     message = <div>Welcome Kreni</div>;
    //   } else {
    //     message = <div>Welcome Guest</div>;
    //   }
    //   return(
    //     <div>{message}</div>
    //   )

    //Method 3
    // return(
    //     this.state.isLoggedIn ? <div>Welcome Kreni</div> : <div>Welcome Guest</div>
    // )

    //Method 4
    return(
        this.state.isLoggedIn && <div>Welcome Kreni</div>
    )
  }
}

export default Conditions
