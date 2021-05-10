import "./App.css";
import Login from "./components/auth/login.component";
import Navbar from "./components/general/navbar.component";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "./components/general/landingPage.component";
function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPage} />
        <Route path="/login" component={Login} />
      </Router>
    </div>
  );
}

export default App;

//navbar needs a lot of work  <Navbar />
