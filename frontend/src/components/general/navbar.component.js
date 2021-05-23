import React from "react";
import "./nav.css";

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <div className="logo item">
        <p>
          <a href="/" className="navbar-link ">
            SPORTZ
          </a>
        </p>
      </div>
      <div className="item">
        <p>
          <a href="/createPost" className="navbar-link">
            Post
          </a>
        </p>
      </div>
      <div className="item">
        <p>
          <a className="navbar-link" href="/profile">
            Profile
          </a>
        </p>
      </div>
      <div className="item">
        <p>
          <a className="navbar-link" href="/login">
            Log Out{" "}
          </a>
        </p>
      </div>
    </div>
  );
};

export default Navbar;
