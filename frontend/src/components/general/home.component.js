import React from "react";
import './home.css';
import Tweet from "./tweet.component";
import axios from 'axios';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }
  componentDidMount() {
    axios.get('http://localhost:5000/getAllTweets')
      .then(res => {
        const data = res.data;
        this.setState({ data: res.data });
      })
      this.state.data.sort();
  }

render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "50px",
        }}
      >
      {[].concat(this.state.data).sort((a, b) => a.likes < b.likes ? 1 : -1).map((d) => (
        <Tweet cur={{title: d.title, body: d.body, likes: d.likes, shares: d.shares, tag: d.tags}}/>
      ))}
      </div>
    );
  };
}
export default Home;
