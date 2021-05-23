import React from "react";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "50px",
      }}
    >
      <div>HOME PAGE THAT NEEDS TO BE REVISED</div>
      <p>random links so its easy to access:</p>
      <a href="/login" style={{ fontSize: "50px" }}>
        Login
      </a>
      <a href="/signup" style={{ fontSize: "50px" }}>
        Signup
      </a>
      <a href="/createPost" style={{ fontSize: "50px" }}>
        Create Post
      </a>
    </div>
  );
};
export default Home;
