import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Create from "./components/create";
import Edit from "./components/edit";
import Index from "./components/index";

class App extends React.Component {
  state = {
    link: "/index",
  };
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={"/"} className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/create"} className="nav-link">
                    Create
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={this.state.link} className="nav-link">
                    Index
                  </Link>
                </li>
              </ul>
            </div>
          </nav>{" "}
          <br />
          <h2>Create app CRUD with ReactJs, NodeJs, MongoDB</h2> <br />
          <Switch>
            <Route exact path="/create" component={Create} />
            <Route path="/edit/:id" component={Edit} />
            <Route path={this.state.link} component={Index} />
            {/* <Route path="/index" component={Index} /> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
