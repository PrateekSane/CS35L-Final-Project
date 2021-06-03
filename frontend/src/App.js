import "./App.css";
import Login from "./components/auth/login.component";
import Home from "./components/general/home.component";
import Signup from "./components/auth/signup.component";
import Navbar from "./components/general/navbar.component";
import CreatePost from "./components/posts/createPost.component";
import Profile from "./components/general/profile.component";
import Search from "./components/general/search.component";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { Ctx, StateProvider } from "./components/StateProvider";
import axios from "axios";

const Wrapper = (props) => {
  const { state, dispatch } = useContext(Ctx);
  const [flag, setFlag] = useState(false);

  const updateUser = async () => {
    let req = await axios.get(`http://localhost:5000/getUser/${state.user._id}`);
    let data = req.data;
    dispatch({
      type: 'SET_USER',
      user: data,
    })
  }

  useEffect(() => {
    console.log(state.user)
    let intervalId = 0;
    if(state.user && !flag) {
      intervalId = setInterval(() => updateUser(), 5000);
      setFlag(true);
    }

    return function cleanup() {
      clearInterval(intervalId);
    }
  }, [state.user])

  return <>{props.children}</>
}

function App() {
  return (
    <div className="App">
      <StateProvider>
        <Wrapper>
          <Router>
            <Route exact path="/" component={Navbar} />
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/createPost" component={CreatePost} />
            <Route path="/profile" component={Profile} />
            <Route path="/search" component={Search} />
          </Router>
        </Wrapper>
      </StateProvider>
    </div>
  );
}

export default App;

//navbar needs a lot of work
