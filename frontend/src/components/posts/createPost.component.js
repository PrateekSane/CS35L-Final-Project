import React from "react";
import "./createpost.css";
import axios from 'axios';
import { Ctx } from "../StateProvider";

class CreatePost extends React.Component {
  static contextType = Ctx;

  constructor() {
    super();
    this.state = {
      body: "",
      title: "",
      tag: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    console.log(this.context.state.user);
    if(!this.context.state.user) {
      window.location.replace("http://localhost:3000/login");
      return;
    }
  }

  handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  }

  async makeRequest() {
    const data = {
      title: this.state.title,
      body: this.state.body,
      tags: this.state.tag,
      userId: this.context.state.user._id
    };

      axios.post('http://localhost:5000/createTweet', {data})
      .then(res => {
        console.log(res);
      })
      this.props.history.push("/");
  }

  onSubmit() {
    this.makeRequest();
  }

  render() {

    const tagTitles = ["Baseball", "Basketball", "Soccer", "Football"];
    const Tags = tagTitles.map((sport) => {
      let bc = "white",
        c = "#449bce";
      if (this.state.tag === sport) {
        bc = "#449bce";
        c = "white";
      }

      return (
        <button
          name="tag"
          value={sport}
          onClick={this.handleChange}
          className="tag-button"
          style={{ backgroundColor: bc, color: c }}
        >
          {sport}
        </button>
      );
    });

    return (
      <div className="create-post-page">
        <div className="create-post-wrapper">
          <p className="title-text">Share Your Thoughts!</p>
          <p>Name Your Post</p>
          <input
            className="input-field"
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
            placeholder="Title"
          />
          <p>What happened?</p>
          <textarea
            className="input-field-big"
            type="text"
            name="body"
            value={this.state.body}
            onChange={this.handleChange}
            placeholder="Body"
          />
          <p>Pick a tag:</p>
          <div style={{ display: "flex", margin: "5px" }}>{Tags}</div>
          <button className="submission-button" onClick={this.onSubmit}>
            Post
          </button>
        </div>
      </div>
    );
  }
}

export default CreatePost;
