import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Profile extends Component {
  render() {
    return (
     
     
      <div className="profile">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="row">
                <div className="col-6">
                  <a href="profiles.html" className="btn btn-light mb-3 float-left">Back To Profiles</a>
                </div>
                <div className="col-6">
    
                </div>
              </div>
    
              
              <div className="row">
                <div className="col-md-12">
                  <div className="card card-body bg-info text-white mb-3">
                    <div className="row">
                      <div className="col-4 col-md-3 m-auto">
                        <img className="rounded-circle" src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200" alt="" />
                      </div>
                    </div>
                    <div className="text-center">
                      <h1 className="display-4 text-center">John Doe</h1>
                      <p className="lead text-center">Developer at Microsoft</p>
                      <p>Seattle, WA</p>
                      <p>
                        <a className="text-white p-2" href="#">
                          <i className="fas fa-globe fa-2x"></i>
                        </a>
                        <a className="text-white p-2" href="#">
                          <i className="fab fa-twitter fa-2x"></i>
                        </a>
                        <a className="text-white p-2" href="#">
                          <i className="fab fa-facebook fa-2x"></i>
                        </a>
                        <a className="text-white p-2" href="#">
                          <i className="fab fa-linkedin fa-2x"></i>
                        </a>
                        <a className="text-white p-2" href="#">
                          <i className="fab fa-instagram fa-2x"></i>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
    
              
              <div className="row">
                <div className="col-md-12">
                  <div className="card card-body bg-light mb-3">
                    <h3 className="text-center text-info">John's Bio</h3>
                    <p className="lead">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident fuga cum necessitatibus blanditiis vel,
                      officia facere porro esse numquam assumenda doloremque saepe aliquam nemo excepturi aliquid maiores! Excepturi,
                      libero repudiandae.
                    </p>
                    <hr />
                    <h3 className="text-center text-info">Skill Set</h3>
                    <div className="row">
                      <div className="d-flex flex-wrap justify-content-center align-items-center">
                        <div className="p-3">
                          <i className="fa fa-check"></i> HTML</div>
                        <div className="p-3">
                          <i className="fa fa-check"></i> CSS</div>
                        <div className="p-3">
                          <i className="fa fa-check"></i> JavaScript</div>
                        <div className="p-3">
                          <i className="fa fa-check"></i> Python</div>
                        <div className="p-3">
                          <i className="fa fa-check"></i> C#</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
             
                 
             
            </div>
          </div>
        </div>
      </div>
      
      
    );
  }
}
