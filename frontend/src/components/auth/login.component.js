import React, { Component } from "react";
import "./auth.css";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  }
  onSubmit() {
    //do some auth stuff here
    console.log("hi");
  }
  render() {
    return (
      <div className="auth-wrapper">
        <div className="form-wrapper">
          <p className="title-text">Twitter</p>
          <input
            className="input-field"
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
            placeholder="Username"
          />
          <input
            className="input-field"
            type="text"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            placeholder="Password"
          />
          <button className="submission-button" onClick={this.onSubmit}>
            Log In
          </button>
          <a href="/">Forgot your password?</a>
        </div>
      </div>
    );
  }
}
