import React, { Component } from "react";

export class FormHandling extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      query: "",
      course: "",
    };
  }

  handleUsername = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  handleQuery = (event) => {
    this.setState({
      query: event.target.value,
    });
  };

  handleCourse = (event) => {
    this.setState({
      course: event.target.value,
    });
  };

  handleSubmit=(event)=>{
    alert('${this.state.username} ${this.state.query} ${this.state.course}')
  }

  render() {
    const {username, query, course} = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={this.handleUsername}
          />
        <br/>
          <label>Query</label>
          <input
            type="textarea"
            value={query}
            onChange={this.handleQuery}
          />
        <br/>
        <label>Choose course</label>
        <select value={course}
        onChange={this.handleCourse}>
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="vue">Vue</option>
        </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default FormHandling;
