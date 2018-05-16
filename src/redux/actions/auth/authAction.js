/**
 * Created by albertogiovanelli on 15/05/18.
 */
import {
    REQUEST_TOKEN_FETCHING_DATA,
    REQUEST_TOKEN_FETCHING_DATA_SUCCESS,
    REQUEST_TOKEN_FETCHING_DATA_FAILURE
} from '../utils/constant/requestTokenConstants';

export function getData() {
    return {
        type: REQUEST_TOKEN_FETCHING_DATA
    }
}

export function getDataSuccess(data) {
    return {
        type: REQUEST_TOKEN_FETCHING_DATA_SUCCESS,
        data,
    }
}

export function getDataFailure(data) {
    return {
        type: REQUEST_TOKEN_FETCHING_DATA_FAILURE,
        data
    }
}