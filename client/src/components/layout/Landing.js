import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

export default () => {
  return (
    <div>
        <div className="landing">
        <div className="dark-overlay landing-inner text-light">
        <div className="container">
            <div className="row">
            <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">Devgram
                </h1>
                <p className="lead"> Create a devgram profile to share posts, pics and more!</p>
                <hr />

                <Link to="/Register" className="btn btn-lg btn-info mr-2">Sign Up</Link>
                <Link to="/Login" className="btn btn-lg btn-light">Login</Link>
            </div>
            </div>
        </div>
        </div>
    </div>
    </div>
  )
}
