import { SET_USER } from '../actions/types';
import isEmpty from '../validation/is-empty';

const initialState = {
    isAuthenticated: false,
    user: {}
};

export default function (state = initialState, action) {
    switch(action.type) {
        case SET_USER:
            return {
                ...state,
                isAuthenticated: !isEmpty(action.user),
                user: action.user
            };
        default:
        return state;
    }
}
