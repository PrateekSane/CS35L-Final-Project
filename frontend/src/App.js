import "./App.css";
import Login from "./components/auth/login.component";
import Home from "./components/general/home.component";
import Signup from "./components/auth/signup.component";
import Navbar from "./components/general/navbar.component";
import CreatePost from "./components/posts/createPost.component";
import Profile from "./components/general/profile.component";
import Search from "./components/general/search.component";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useContext } from "react";
import { Ctx, StateProvider } from "./components/StateProvider";

function App() {
  return (
    <div className="App">
      <StateProvider>
        <Router>
          <Route exact path="/" component={Navbar} />
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/createPost" component={CreatePost} />
          <Route path="/profile" component={Profile} />
          <Route path="/search" component={Search} />
        </Router>
      </StateProvider>
    </div>
  );
}

export default App;

//navbar needs a lot of work
