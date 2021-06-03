import React, { useState, useEffect, useCallback, useContext } from "react";
import Axios from "axios";
import Tweet from "./tweet.component";
import Navbar from "./navbar.component";
import "./search.css";
import { Ctx } from "../StateProvider";

const axios = Axios.create({
  baseURL: "http://localhost:5000/",
});

const Search = () => {
  const { state } = useContext(Ctx);
  const [tag, setTag] = useState("");
  const [tweets, setTweets] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const changeTag = async (e) => {
    setTag(e.target.value);

    setLoading(true);

    const tweetsData = (await axios.get(`/searchTweets/${e.target.value}`)).data;
    const usersData = (await axios.get(`/getUserByName/${e.target.value}`)).data;
    setTweets(tweetsData);
    setUsers(usersData);

    setLoading(false);
  };
  if(!state.user) {
    console.log('here')
    window.location.replace("http://localhost:3000/login");
    return;
  }
  return (

    <div>
      <Navbar />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "50px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            paddingTop: "50px",
          }}
        >
          <input
            className="input-field"
            type="text"
            name="tag"
            value={tag}
            onChange={(e) => changeTag(e)}
            placeholder="Enter a tag or username"
            style={{marginBottom: 30}}
          />
        </div>
        {tweets.length !== 0 ? <a style={{ fontSize: "50px", alignSelf: 'flex-start', marginLeft: '15%' }}>Posts:</a> : <></>}
        {loading ? (
          <a style={{ fontSize: "25px" }}>Loading...</a>
        ) : (
          tweets.map((tweet) => (
            <Tweet
              key={tweet._id}
              cur={{
                title: tweet.title,
                body: tweet.body,
                likes: tweet.likes,
                shares: tweet.shares,
                tag: tweet.tags,
              }}
            />
          ))
        )}

        {users.length !== 0 ? <a style={{ fontSize: "50px", alignSelf: 'flex-start', marginLeft: '15%', marginBottom: '1%', marginTop: '5%' }}>Users: </a> : <></>}
        {loading ? (
          <></>
        ) : (
          users.map((user) => (
            <div style={{display: 'flex', flexDirection: 'column', width: '70%', justifyContent: 'center', marginLeft: '15%', marginRight: '15%', borderRadius: 5, boxShadow: "0px 0px 10px 3px #1f5f84", padding: 10}}>
              <div style={{display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignItems: 'center'}}>
                <div style={{fontWeight: 'bold', fontSize: 25}}>{user.username}</div>
                <div style={{fontSize: 20}}>{user.tweets.length} tweets</div>
              </div>
              <div style={{display: 'flex', flexDirection: 'column', width: '100%', marginLeft: '2%'}}>
                <div style={{fontStyle: 'italic'}}>{Math.floor(Math.random()*100)} followers</div>
                <div style={{fontStyle: 'italic'}}>{Math.floor(Math.random()*100)} following</div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
export default Search;
