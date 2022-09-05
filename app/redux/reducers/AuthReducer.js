import {Constants} from '../../config/Constants';
import * as types from '../actions/types';

const initialState = {
    authStatus: Constants.AUTH_STATUS.USER_UNDEFINED,
    authToken: null,
}

const AuthReducer = (state = initialState, action)=>{
    switch (action.type) {
        case types.AUTH_LOGIN:{
            return state
        }
        default:{
            return state;
        
        }
    }
}

export { AuthReducer };