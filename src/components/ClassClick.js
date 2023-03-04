import React, { Component } from 'react'

class ClassClick extends Component {

clickHandler(){
    console.log('Cbutton clicked')
}  
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Cclick</button>
      </div>
    )
  }
}

export default ClassClick
