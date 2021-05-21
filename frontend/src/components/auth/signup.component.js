import React, { Component } from "react";
import AuthService from '../../services/AuthService';
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
      console.log(data);
      this.props.history.push('/login');
    } catch (err) {
        console.log(err);
      }
  }

  onSubmit() {
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
