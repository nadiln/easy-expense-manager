import * as types from '../actions/types';



const expenseCategoires = {
    categories: [
      { id: 0, name: 'Foods', icon_url: 'blabla' },
      { id: 1, name: 'Transportation', icon_url: 'blabal'},
      { id: 2, name: 'Phone', icon_url: 'blabla' },
      { id: 3, name: 'Internet', icon_url: 'blabla' },
      { id: 4, name: 'Family', icon_url: 'blalbala' },
    ],
    
  }

const ExpenseCategoriesReducer = (state = expenseCategoires, action)=>{
    switch (action.type) {
        case types.EXPENSE_CATEGORIES_ADD:{
            return state
        }
        default:{
            return state;
        
        }
    }
}

export { ExpenseCategoriesReducer };