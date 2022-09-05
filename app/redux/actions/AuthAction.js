import * as types from './types';

export function login(data){
    return {
        type: types.AUTH_LOGIN,
        payload: data
    }
}

export function resetAuthReducer(){
    return {
        type: types.AUTH_RESET_REDUCER
    }
}