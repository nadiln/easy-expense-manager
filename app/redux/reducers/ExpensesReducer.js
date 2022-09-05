import * as types from '../actions/types';

const expensesState = {
    expenses: [],
    totalExpensesCount: 0,
    isSynced: false,
}

const ExpensesReducer = (state = expensesState, action) => {
    console.log('in reducer', action);
    switch (action.type) {
        case types.EXPENSES_SAVE_EXPENSE:
            
           return {...state, expenses: action.payload }
    
        default:
           return state;
    }
}

export { ExpensesReducer }