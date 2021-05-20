import React, { Component } from "react";
import "./auth.css";

export default class Signup extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
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
    const reqInfo = {
      method: "POST",
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      }),
      headers: {
        "Content-type": "application/json",
      },
    };
    const makeRequest = async (reqInfo) => {
      const url = "http://localhost:5000/createUser";
      await fetch(url, reqInfo)
        .then((data) => console.log(data.json()))
        .catch((err) => console.log(err));
    };
    makeRequest(reqInfo);
  }
  render() {
    return (
      <div className="auth-wrapper">
        <div className="form-wrapper">
          <p className="title-text">Get Started!</p>

          <input
            className="input-field"
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            placeholder="Email"
          />
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
            Sign Up
          </button>
        </div>
      </div>
    );
  }
}
