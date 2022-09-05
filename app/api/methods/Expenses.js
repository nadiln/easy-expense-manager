import Api from '../Api';
import {ApiEndpoints , Method} from '../ApiConstants';


export function saveExpense(data){
    return Api(
        ApiEndpoints.SAVE_EXPENSE<
        Method.POST,
        data
    )
}