import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class dashboard extends Component {
  render() {
    return (
      <div>
  <div className="dashboard">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1 className="display-4">Dashboard</h1>
          <p className="lead text-muted">Welcome John Doe</p>
          
          <div className="btn-group mb-4" role="group">
            <Link to="/CreateProfile" className="btn btn-light">
              <i className="fas fa-user-circle text-info mr-1"></i> Edit Profile</Link>
            <Link to="/Post" className="btn btn-light">
              <i className="fab fa-black-tie text-info mr-1"></i>
              Add Post</Link>
          </div>

          <div style={{ marginBottom: '60px' }}>
            <button className="btn btn-danger">
              Delete My Account
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
      </div>
    )
  }
}
