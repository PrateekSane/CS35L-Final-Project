import React, { useState, useEffect, useCallback } from "react";
import Axios from "axios";
import Tweet from "./tweet.component";
import Navbar from "./navbar.component";

const axios = Axios.create({
  baseURL: "http://localhost:5000/",
});

const Profile = () => {
  const [user, setUser] = useState(false);

  const getProfile = useCallback(async () => {
    try {
      const id = localStorage.getItem("userID");
      const data = (await axios.get(`/getUser/${id}`)).data[0];
      setUser(data);
    } catch (e) {
      console.log(e);
      throw e;
    }
  }, [localStorage]);

  useEffect(() => {
    getProfile();
  }, [getProfile]);

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
        <a style={{ fontSize: "50px" }}>{user.username}'s Profile</a>
        {(user ? user.tweets : []).map((tweet) => (
          <Tweet
            cur={{
              title: tweet.title,
              body: tweet.body,
              likes: tweet.likes,
              shares: tweet.shares,
              tag: tweet.tags,
            }}
          />
        ))}
      </div>
    </div>
  );
};
export default Profile;
