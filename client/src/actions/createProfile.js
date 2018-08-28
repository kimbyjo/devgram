import { SET_USER } from './types';
import setAuthToken from '../utils/setAuthToken';
import axios from 'axios';
import jwt_decode from 'jwt-decode';

    export const createProfile = (userData, history) => dispatch => {

 /*       axios.post('/profile', userData)
        .then(res => history.push('/profile'))
    };
*/

       axios.post('/profile', userData).then(res => {
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
  
 