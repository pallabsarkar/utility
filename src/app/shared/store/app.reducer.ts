import { ActionReducerMap } from '@ngrx/store';
import * as fromBudget from '../../budget/store/budget.reducer';


export interface AppState {
    budgetReducer: fromBudget.State;
}

export const appReducer: ActionReducerMap<AppState> = {
    budgetReducer: fromBudget.budgetReducer
};