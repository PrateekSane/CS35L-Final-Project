import React, { useContext } from "react";
import { Ctx } from "../StateProvider";
import { Link } from 'react-router-dom';
import "./nav.css";

const Navbar = () => {
  const { state, dispatch } = useContext(Ctx);
  return (
    <div className="navbar-wrapper">
      <div className="logo item">
        <p>
          <Link to="/" className="navbar-link">
            SPORTZ
          </Link>
        </p>
      </div>
      {state.user ? (
        <>
          <div className="item">
            <p>
              <Link to="/createPost" className="navbar-link">
                Post
              </Link>
            </p>
          </div>
          <div className="item">
            <p>
              <Link to="/profile" className="navbar-link">
                Profile
              </Link>
            </p>
          </div>
          <div className="item">
            <p>
              <Link to="/search" className="navbar-link">
                Search
              </Link>
            </p>
          </div>
          <div className="item">
            <p>
              <Link
                to="/login"
                className="navbar-link"
                onClick={() => {
                  console.log('here')
                  dispatch({
                    type: "SET_USER",
                    user: null,
                  });
                  localStorage.removeItem("userID");
                }}
              >
                Log Out{" "}
              </Link>
            </p>
          </div>
        </>
      ) : (
        <>
           <div className="item">
            <p>
              <Link to="/login" className="navbar-link">
                Login {" "}
              </Link>
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
