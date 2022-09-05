import * as types from './types'; 

export function addExpense(data){
    return {
        type: types.EXPENSES_ADD_EXPENSE,
        payload: data
    }
}

export function saveExpense(data){
    return {
        type: types.EXPENSES_SAVE_EXPENSE,
        payload: data
    }
}
