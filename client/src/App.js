import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Footer from './components/layout/Footer';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Profiles from './components/layout/Profiles';
import Profile from './components/layout/Profile';
import Post from './components/layout/Post';
import Dashboard from './components/layout/Dashboard';
import CreateProfile from './components/layout/CreateProfile';

import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import store from './store';

import jwt_decode from 'jwt-decode';
import { setUser } from './actions/authActions';

import './App.css';
import setAuthToken from './utils/setAuthToken';

if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  store.dispatch(setUser(jwt_decode(localStorage.jwtToken)));

}


class App extends Component {
  render() {
    return (
    <Provider store = { store } >
      <Router>
        <div className="App">
          <Navbar />
          <div>
            <Route exact path = "/" component = { Landing } />
            < Route exact path = "/register" component = { Register } />
            < Route exact path = "/login" component = { Login } />
            < Route exact path = "/Profiles" component = { Profiles } />
            < Route exact path = "/Profile" component = { Profile } />
            < Route exact path = "/Post" component = { Post } />
            < Route exact path = "/CreateProfile" component = { CreateProfile } />
            < Route exact path = "/Dashboard" component = { Dashboard } />
            </div>
          <Footer />
        </div>
    </Router>
  </Provider>
  );
  }
}

export default App;


