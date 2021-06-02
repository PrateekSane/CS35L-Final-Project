import React from "react";
import './home.css';
import Tweet from "./tweet.component";
import axios from 'axios';
import { Ctx } from "../StateProvider";

class Home extends React.Component {
  static contextType = Ctx;

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
    let tweets = [].concat(this.state.data).sort((a, b) => a.likes < b.likes ? 1 : -1).map((d) => (
      <Tweet key={d._id} cur={{title: d.title, body: d.body, id: d._id, likes: d.likes, shares: d.shares, tag: d.tags}}/>
    ));
    tweets = localStorage.getItem('userID') ? tweets : tweets.slice(0, 3);

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "50px",
        }}
      >
      {localStorage.getItem('userID') ? (
        <div style={{fontWeight: 'bold', fontSize: 60, paddingBottom: 20}}>
          Welcome back!
        </div>
      ) : (<></>)}
      <div style={{alignSelf: 'flex-start', marginLeft: '15%', fontSize: 40, fontWeight: 'bold'}}>Trending Tweets</div>
      {tweets}
      {!localStorage.getItem('userID') ? (
        <div style={{fontWeight: 'bold', fontSize: 20, paddingBottom: 20}}>
          Login or create an account to see more posts.
        </div>
      ) : (<></>)}
      </div>
    );
  };
}
export default Home;
