import { AuthReducer } from './AuthReducer'
import { combineReducer, combineReducers } from 'redux' 
import { ExpenseCategoriesReducer } from './ExpenseCategoriesReducer'
import { ExpensesReducer } from './ExpensesReducer';

const rootReducer = combineReducers({
    Auth: AuthReducer,
    ExpenseCategories: ExpenseCategoriesReducer,
    ExpensesReducer:  ExpensesReducer
})

export default rootReducer;