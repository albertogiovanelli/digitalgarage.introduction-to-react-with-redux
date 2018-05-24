/**
 * Created by albertogiovanelli on 15/05/18.
 */
import {
    LOGIN,
    LOGOUT
} from '../../actions/utils/constant/authConstants';

export const initialState = {
    isUserLogged: false,
    accessToken: null
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {

        case LOGIN :
            return {
                isUserLogged: true,
                accessToken: action.data.accessToken,
            };
        case LOGOUT :
            return {
                isUserLogged: false,
                accessToken: null,
            };
        default:
            return state;
    }
};