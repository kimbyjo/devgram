import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { loginUser } from '../../actions/authActions';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {            
            email: ' ',
            password: ' '
        }
        
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
      }
     
      onSubmit(e){
        e.preventDefault();
        this.props.loginUser(this.state, this.props.history);
        
        //.then(
            //(res) => this.context.router.push('/'),
            //(err) => this.setState({ errors: err.data.errors })

        //axios.post('/user/login', this.state);
      }

  render() {
    return (
    <div>
        <div className="login">
        <div className="container">
        <div className="row">
            <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Log In</h1>
            <p className="lead text-center">Sign in to your Devgram account</p>
            <form onSubmit={this.onSubmit} action="dashboard.html">
                
                <div className="form-group">
                    <input 
                        type="email" 
                        value={this.state.name}
                        onChange={this.onChange}
                        className="form-control form-control-lg"
                        placeholder="Email Address"
                        name="email" 
                    />
                </div>

                <div className="form-group">
                    <input 
                        type="password" 
                        value={this.state.name}
                        onChange={this.onChange}
                        className="form-control form-control-lg"
                        placeholder="Password"
                        name="password" 
                    />
                </div>

                <div className="form-group">
                    <button className="btn btn-info btn-block mt-4">
                        Sign In
                    </button>
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

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    //auth: PropTypes.object.isRequired,
    //errors: PropTypes.object.isRequired

};

Login.contextTypes = {
    router: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    auth: state.auth,
    //errors: state.errors
});


export default connect(mapStateToProps, { loginUser })(withRouter(Login));
