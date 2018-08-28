import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { registerUser } from '../../actions/authActions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

//import axios from 'axios';

 class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {            
            name:' ',
            email:' ',
            password:' ',
            password2:' '
        }
        //This Associates "this" with component not onChange event below
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
     }

 onChange(e) {
   this.setState({[e.target.name]: e.target.value});
 }

 onSubmit(e){
   e.preventDefault();

   const newUser = {
    name: this.state.name,
    email: this.state.email,
    password: this.state.password,
    password2: this.state.password2
  }

//axios.post('/user/register', newUser);
this.props.registerUser(newUser, this.props.history);

 }


    // axios
    // .post('/api/users/register', newUser)
    // .then(res => console.log(res.data))
    // .catch(err => this.setState({errors: err.response.data}));


render() {
 
 return (

<div>
    <div className="register">
       <div className="container">
       <div className="row">
           <div className="col-md-8 m-auto">
           <h1 className="display-4 text-center">Register</h1>
           <p className="lead text-center">Create your Devgram account</p>

            <form onSubmit={this.onSubmit} action="create-profile.html">

                <div className="form-group">
                <label className="control-label">Name:</label>
                    <input
                        type="name" 
                        value={this.state.name}
                        onChange={this.onChange}
                        className=" form-control form-control-lg"
                        name="name"
                    />
                </div>
                <div className="form-group">
                <label className="control-label">Email Address:</label>
                    <input
                        type="email" 
                        value={this.state.email}
                        onChange={this.onChange}
                        className=" form-control form-control-lg"
                        name="email" 
                    />
                        <small className="form-text text-muted">
                        This site uses Gravatar so if you want a profile image, use a Gravatar email
                        </small>
                </div>

                <div className="form-group">
                <label className="control-label">Password:</label>
                
                    <input
                        type="password" 
                        value={this.state.password}
                        onChange={this.onChange}
                        className="form-control form-control-lg"
                        name="password" 
                    />
                </div>

                <div className="form-group">
                <label className="control-label">Confirm Password:</label>
                    <input
                        type="password" 
                        value={this.state.password2}
                        onChange={this.onChange}
                        className=" form-control form-control-lg"
                        name="password2" 
                    />
                </div>
                
                <div className="form-group">
                    <input type="submit" className="btn btn-info btn-block mt-4"/>
                </div>
            </form>
        </div>
    </div>
    </div>
    </div>
</div>

    );
    }
}

Register.propTypes = {
    registerUser: PropTypes.func.isRequired
    //auth: PropTypes.object.isRequired,
    //errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    //errors: state.errors
});

export default connect(mapStateToProps, {registerUser})(withRouter(Register));