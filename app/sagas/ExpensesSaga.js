import { call,put } from "redux-saga/effects";
import { saveExpense } from "../api/methods/Expenses";
import * as ExpensesActions from '../redux/actions/ExpensesAction';


export function* addExpense({payload}){
    console.log('SAGA:: expense saga adding expense', payload);

    try {

        //before the api call iam saving to the reducer 
        yield put(ExpensesActions.saveExpense(payload))
        console.log('saved to the store')
        
        // Calling to the api
        // response = yield call(yield saveExpense())

        return;

        //we have to handle the response according based on response format
    } catch (error) {
        console.log('Error', error)
    }
}