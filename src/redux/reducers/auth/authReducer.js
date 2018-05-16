/**
 * Created by albertogiovanelli on 15/05/18.
 */
import {
    REQUEST_TOKEN_FETCHING_DATA,
    REQUEST_TOKEN_FETCHING_DATA_SUCCESS,
    REQUEST_TOKEN_FETCHING_DATA_FAILURE
} from '../../actions/utils/constant/requestTokenConstants';

export const initialState = {
    isUserLogged: false,
    accessToken: null
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_TOKEN_FETCHING_DATA:
            return {
                ...state,
            };
        case REQUEST_TOKEN_FETCHING_DATA_SUCCESS:
            return {
                isUserLogged:true,
                accessToken: action.data.accessToken,
            };
        case REQUEST_TOKEN_FETCHING_DATA_FAILURE:
            return {
                ...state,
            };
        default:
            return state;
    }
};