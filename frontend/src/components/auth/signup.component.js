import React, { Component } from "react";
import AuthService from "../../services/AuthService";
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

  async makeRequest(username, password) {
    try {
      let data = await AuthService.signup(username, password);
      if(data === "Username already exists") {
        alert('Username is already taken. Please choose another username.');
        this.setState({
          username: "",
        });
      }
      else
        this.props.history.push("/login");
    } catch (err) {
      console.log(err);
    }
  }

  onSubmit() {
    if(!this.state.email) {
      alert('Please enter your email.')
      return;
    }
    if(!this.state.username) {
      alert('Please enter your username.')
      return;
    }
    if(!this.state.password) {
      alert('Please enter your password.')
      return;
    }
    this.makeRequest(this.state.username, this.state.password);
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
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            placeholder="Password"
          />
          <a href="/login">Already have an account? Login</a>
          <button className="submission-button" onClick={this.onSubmit}>
            Sign Up
          </button>
        </div>
      </div>
    );
  }
}
