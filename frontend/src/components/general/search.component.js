import React, { useState, useEffect, useCallback } from "react";
import Axios from "axios";
import Tweet from "./tweet.component";
import Navbar from "./navbar.component";
import "./search.css";

const axios = Axios.create({
  baseURL: "http://localhost:5000/",
});

const Search = () => {
  const [tag, setTag] = useState("");
  const [tweets, setTweets] = useState([]);
  const [loading, setLoading] = useState(false);

  const changeTag = async (e) => {
    setTag(e.target.value);

    setLoading(true);

    const data = (await axios.get(`/searchTweets/${e.target.value}`)).data;
    setTweets(data);
    console.log(data);

    setLoading(false);
  };

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
        <input
          className="input-field"
          type="text"
          name="tag"
          value={tag}
          onChange={(e) => changeTag(e)}
          placeholder="Enter a Tag"
        />
        <a style={{ fontSize: "50px" }}>Showing posts for {tag}</a>
        {loading ? (
          <a style={{ fontSize: "25px" }}>Loading...</a>
        ) : (
          tweets.map((tweet) => (
            <Tweet
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
      </div>
    </div>
  );
};
export default Search;
