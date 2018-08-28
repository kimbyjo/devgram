import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/authActions';

class Navbar extends Component {

  logout(e) {
    e.preventDefault();
    this.props.logout();

  }

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const userLinks = (
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a href="#" onClick={this.logout.bind(this)} className="nav-link">Logout</a>
          </li>
        </ul>
    );

    const guestLinks = (
      <ul className="navbar-nav ml-auto">
          <li className="nav-item">
          <Link to="/Register" className="nav-link">Register</Link>
          </li>
          <li className="nav-item">
            <Link to="/Login" className="nav-link">Login</Link>
          </li>
        </ul>
    );

    return (
      
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
        <div className="container">
          <Link to="/" className="navbar-brand">Devgram</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
              <span className="navbar-toggler-icon"></span>
            </button>

        <div className="collapse navbar-collapse" id="mobile-nav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
          <Link to="/Profiles" className="nav-link"> Developers
            </Link>
          </li>
        </ul>

        {isAuthenticated ? userLinks : guestLinks}
      </div>
    </div>
  </nav>
    )
  }
}

Navbar.propTypes = {
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    auth: state.auth

  }
}
export default connect(mapStateToProps, { logout })(Navbar);
