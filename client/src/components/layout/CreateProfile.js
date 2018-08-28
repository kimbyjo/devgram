import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import { createProfile } from '../../actions/createProfile';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import axios from 'axios';
import ReactFilepicker from 'react-filepicker';


 class CreateProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {            
            user: '', 
            handle: '',
            selectedImage: null,
            name: '',
            bio: '',
            interests: []
        }
        //This Associates "this" with component not onChange event below
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
     }

fileSelectHandler = event => {
    this.setState({
        selectedImage: event.target.files[0]
    })
}

fileUploadHandler = () => {
    const fd = new FormData();
    /*
    fd.append('image', this.state.selectedImage, this.state.selectedImage.name);
    axios.post('https://www.filestackapi.com/api/store/S3?key=AMKiBkVfHRPq7fgH34kVvz')
    .then(res => {
        console.log(res);
    });*/
    console.log(fd);
}

 onChange(e) {
   this.setState({[e.target.name]: e.target.value});
 }

 onSubmit(e){
   e.preventDefault();
   

   const newProfile = {
        handle: this.state.handle,
        selectedImage: this.state.selectedImage,
        name: this.state.name,
        bio: this.state.bio,
        interests: this.state.interests
  }      

  //this.props.createProfile(newProfile, this.props.history);
  console.log(newProfile);
    //axios.post('/profile', newProfile);
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
           <Link to="/Dashboard" class="btn btn-light">
            Go Back
          </Link>
           <h1 className="display-4 text-center">New Profile</h1>
           <p className="lead text-center">Create your account profile</p>

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
                <label className="control-label">Avatar:</label>
                <div>
                    <ReactFilepicker apikey={'AMKiBkVfHRPq7fgH34kVvz'} defaultWidget={false} onSuccess={this.fileUploadHandler} />
                </div>
                        <small className="form-text text-muted">
                        Upload your avatar image (400 x 400 pixels)
                        </small>
                </div>
                
                <div className="form-group">
                <label className="control-label">Handle:</label>
                <div className="input-group mb-3">
                
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">@</span>
                    </div>
                
                
                    <input
                        type="text" 
                        value={this.state.handle}
                        onChange={this.onChange}
                        className="form-control form-control-lg"
                        name="handle" 
                    />
                </div>
                </div>

                <div className="form-group">
                <label className="control-label">Bio:</label>
                <textarea 
                    className="form-control" 
                    id="bio" 
                    rows="3" 
                    name="bio"
                    value={this.state.bio}
                    onChange={this.onChange}>
                    </textarea>
                </div>


                <div className="form-group">
                <label className="control-label">Interests:</label>
                <small className="form-text text-muted">
                    Select all interests that apply
                 </small>
                    <select class="custom-select" multiple> 
                        name="interests" 
                        value={this.state.interests} 
                        onChange={this.onChange}>
                        <option>Javascript</option>
                        <option>Angular</option>
                        <option>React</option>
                        <option>Anime</option>
                        <option>Sci-fi</option>
                        <option>Other</option>
                    </select>
                </div>
                
                <div className="form-group">
                    <input type="submit" className="btn btn-info btn-block mt-4" onClick={this.fileUploadHandler}/>
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

CreateProfile.propTypes = {
    createProfile: PropTypes.func.isRequired
    //auth: PropTypes.object.isRequired,
    //errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    //errors: state.errors
});


export default connect(mapStateToProps, {createProfile})(withRouter(CreateProfile));


//export default CreateProfile;