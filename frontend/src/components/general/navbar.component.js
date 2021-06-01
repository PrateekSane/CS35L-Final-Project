import React, { useContext } from 'react';
import { Ctx } from '../StateProvider';
import "./nav.css";

const Navbar = () => {
  const { state, dispatch } = useContext(Ctx);
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
      {
        state.user ? (
          <div className="item">
            <p>
              <a className="navbar-link" href="/login" onClick={
                () => {
                  dispatch({
                    type: 'SET_USER',
                    user: null,
                  });
                }}>
                Log Out{" "}
              </a>
            </p>
          </div>
        ) : (
          <div className="item">
            <p>
              <a className="navbar-link" href="/login" onClick={() => console.log('here')}>
                Login{" "}
              </a>
            </p>
          </div>
        )
      }
    </div>
  );
};

export default Navbar;
