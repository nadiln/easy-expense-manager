import * as types from '../redux/actions/types';
import { login } from './AuthSaga';
import { addExpense } from './ExpensesSaga';
import { takeEvery } from 'redux-saga/effects';

export default function* watch(){
    yield takeEvery(types.AUTH_LOGIN, login);
    yield takeEvery(types.EXPENSES_ADD_EXPENSE, addExpense);
}