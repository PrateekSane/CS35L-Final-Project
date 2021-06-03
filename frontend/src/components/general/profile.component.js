import React, { useState, useEffect, useCallback, useContext } from "react";
import Axios from "axios";
import Tweet from "./tweet.component";
import Navbar from "./navbar.component";
import { Ctx } from "../StateProvider";

const axios = Axios.create({
  baseURL: "http://localhost:5000/",
});

const Profile = () => {
  const { state } = useContext(Ctx);
  const [user, setUser] = useState(false);
  const [loading, setLoading] = useState(true);

  const getProfile = useCallback(async () => {
    try {
      const id = state.user._id;
      const data = (await axios.get(`/getUser/${id}`)).data;
      console.log(data)
      setUser(data);
      setLoading(false);
    } catch (e) {
      console.log(e);
      throw e;
    }
  });

  useEffect(() => {
    if(loading)
      getProfile();
  }, [loading]);
  if(!state.user) {
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
      {loading ? (
        <div style={{justifyContent: 'center', alignItems: 'center'}}>Loading...</div>
      ) : (
        <>
          <a style={{ fontSize: "60px", fontWeight: 'bold' }}>{user.username}</a>
          <div style={{display: 'flex', flexDirection: 'row', marginBottom: '3%', justifyContent: 'space-between', width: '30%', boxShadow: "0px 0px 10px 3px #1f5f84", padding: 10, borderRadius: 5, marginTop: '1%'}}>
            <div style={{fontSize: 20}}>{user.tweets.length} tweets</div>
            <div style={{fontSize: 20}}>{user.followers.length} followers</div>
            <div style={{fontSize: 20}}>{user.following.length} following</div>
          </div>
          {user && user.tweets.length !== 0 && <a style={{ fontSize: "35px", alignSelf: 'flex-start', marginLeft: '15%' }}>Your Tweets</a>}
          {(user ? user.tweets : []).map((tweet) => (
            <Tweet
              key={tweet._id}
              cur={{
                title: tweet.title,
                body: tweet.body,
                likes: tweet.likes,
                shares: tweet.shares,
                tag: tweet.tags,
                id: tweet._id,
              }}
            />
          ))}
          <br></br>
          {user && user.sharedTweets.length !== 0 && <a style={{ fontSize: "35px", alignSelf: 'flex-start', marginLeft: '15%' }}>Shared Tweets</a>}
          {(user ? user.sharedTweets : []).map((tweet) => (
            <Tweet
              key={tweet._id}
              cur={{
                title: tweet.title,
                body: tweet.body,
                likes: tweet.likes,
                shares: tweet.shares,
                tag: tweet.tags,
                id: tweet._id,
              }}
            />
          ))}
        </>
      )}
      </div>
    </div>
  );
};
export default Profile;
