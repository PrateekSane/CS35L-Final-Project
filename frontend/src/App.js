import "./App.css";
import Login from "./components/auth/login.component";
import Home from "./components/general/home.component";
import Signup from "./components/auth/signup.component";
import Navbar from "./components/general/navbar.component";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "./components/general/landingPage.component";
function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPage} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/home" component={Home} />
      </Router>
    </div>
  );
}

export default App;

//navbar needs a lot of work  <Navbar />
