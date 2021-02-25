import { createAction, props} from '@ngrx/store';
import { Budget } from '../model/Budget';
import { Expense } from '../model/expense';
import { Income } from '../model/income';

export const getBudgetStart = createAction(
    '[Budget] Get Budget Start'
);

export const getBudgetEnd = createAction(
    '[Budget] Get Budget End',
    props<{payload: Budget}>()
);

export const getIncomesStart = createAction(
    '[Budget] Get Incomes Start'
);

export const getIncomesEnd = createAction(
    '[Budget] Get Incomes End',
    props<{payload: Income[]}>()
);

export const addIncome = createAction(
    '[Budget] Add Income',
    props<Income>()
);

export const getExpensesStart = createAction(
    '[Budget] Get Expenses Start'
);

export const getExpensesEnd = createAction(
    '[Budget] Get Expenses End',
    props<{payload: Expense[]}>()
);

export const addExpense = createAction(
    '[Budget] Add Expense',
    props<Expense>()
);