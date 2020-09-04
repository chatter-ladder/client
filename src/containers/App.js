import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import Navigation from "../components/Navigation/Navigation";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Flashcards from "./pages/Flashcards/Flashcards";
import Vocabulary from "./pages/Vocabulary/Vocabulary";
import Login from "./pages/Authentication/Login";
import Register from "./pages/Authentication/Register";
import Logout from "./pages/Authentication/Logout";
import * as actions from "../store/actions/index";

// import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSignup();
  }

  render() {
    let routes = (
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/" exact component={Home} />
      </Switch>
    );

    if (this.props.isAuthencated) {
      routes = (
        <Switch>
          <Route path="/profile" component={Profile} />
          <Route path="/flashcards" component={Flashcards} />
          <Route path="/vocabulary" component={Vocabulary} />
          <Route path="/logout" component={Logout} />
          <Route path="/" exact component={Home} />
        </Switch>
      );
    }

    return (
      <>
        <Navigation isAuthenticated={this.props.isAuthencated} />
        {routes}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthencated: state.token !== null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
