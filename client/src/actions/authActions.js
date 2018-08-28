import { SET_USER } from './types';
import setAuthToken from '../utils/setAuthToken';
import axios from 'axios';
import jwt_decode from 'jwt-decode';


 //Register User
 export const registerUser = (userData, history) => dispatch => {
     axios.post('/user/register', userData)
     .then(res => history.push('/login'))
    };

//Login User
export const loginUser = (userData, history) => dispatch => {
    axios.post('/user/login', userData).then(res => {
        const { token } = res.data;
        localStorage.setItem('jwtToken', token);
        setAuthToken(token);
        dispatch(setUser(jwt_decode(token)));
        history.push('/Profile');
    });
    
};

//Set the current user with decoded token
export const setUser = user => {
    return {
      type: SET_USER,
      user
    };
  };

//Logout user
export const logout = () => {
    return dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthToken(false);
    dispatch(setUser({}));
    }
};





 
