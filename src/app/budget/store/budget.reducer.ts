
import { Action, createReducer, on } from '@ngrx/store';
import * as BudgetActions from './budget.actions';

import { Income } from "../model/income";
import { Expense } from '../model/expense';

export interface State {
    incomes: Income[],
    expenses: Expense[]
};

export const initialState: State = {
    incomes: [],
    expenses: []
};

const reducer = createReducer(
    initialState,
    on(BudgetActions.getBudgetEnd, (state, {payload}) => {
        return {...state, incomes: payload.incomes, expenses: payload.expenses};
    }),
    on(BudgetActions.getIncomesEnd, (state, {payload}) =>{
        console.log(payload);
        return {...state, incomes: payload}
    } ),
    on(BudgetActions.addIncome, (state, payload) => ({...state,
        incomes: [...state.incomes, payload]
    })),
    on(BudgetActions.getExpensesEnd, (state, {payload}) => {
        return {...state, expenses: payload}
    }),
    on(BudgetActions.addExpense, (state, payload) => ({...state,
        expenses: [...state.expenses, payload]
    })),
);

export function budgetReducer(state: State, action: Action){
    return reducer(state, action);
};