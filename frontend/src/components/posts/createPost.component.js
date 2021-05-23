import React from "react";
import "./createpost.css";
class CreatePost extends React.Component {
  constructor() {
    super();
    this.state = {
      body: "",
      title: "",
      tags: "",
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
    /*
    try {
      let data = await AuthService.signup(username, password);
      console.log(data);
      this.props.history.push("/login");
    } catch (err) {
      console.log(err);
    }
    */
  }

  onSubmit() {
    //this.makeRequest();
  }

  render() {
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
          <p>What would you like to talk about?</p>
          <input
            className="input-field"
            type="text"
            name="body"
            value={this.state.body}
            onChange={this.handleChange}
            placeholder="Body"
          />

          <button className="submission-button" onClick={this.onSubmit}>
            Post
          </button>
        </div>
      </div>
    );
  }
}

export default CreatePost;
