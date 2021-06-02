import React, { Component } from "react";
import { Ctx } from "../StateProvider";
import AuthService from "../../services/AuthService";
import "./auth.css";

export default class Login extends Component {
  static contextType = Ctx;

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

  async makeRequest(username, password) {
    try {
      let data = await AuthService.login(username, password);
      if (data === "user doesn't exist") {
        alert("Username not found");
        this.setState({
          username: "",
          password: "",
        });
      } else if (data === "incorrect password") {
        alert("Incorrect password");
        this.setState({
          username: "",
          password: "",
        });
      } else {
        this.context.dispatch({
          type: "SET_USER",
          user: data,
        });
        localStorage.setItem("userID", data._id);
        this.props.history.push("/");
      }
    } catch (err) {
      console.log(err);
    }
  }

  onSubmit() {
    if (!this.state.username) {
      alert("Please enter your username.");
      return;
    }
    if (!this.state.password) {
      alert("Please enter your password.");
      return;
    }
    this.makeRequest(this.state.username, this.state.password);
  }

  render() {
    return (
      <div className="auth-wrapper">
        <div className="form-wrapper">
          <p>
            <a className="title-text" href="/">
              SPORTZ
            </a>
          </p>
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
          <a href="/signup">Need an account? Signup</a>
          <button className="submission-button" onClick={this.onSubmit}>
            Log In
          </button>
          <a href="/">Forgot your password?</a>
        </div>
      </div>
    );
  }
}
