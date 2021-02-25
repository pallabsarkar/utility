import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { HttpClient } from "@angular/common/http";

import * as BudgetActions from './budget.actions';

import { map, mergeMap } from 'rxjs/operators';
import { Income } from "../model/income";
import { Expense } from "../model/expense";
import { Budget } from "../model/Budget";

@Injectable()
export class BudgetEffects {
    constructor(private actions$: Actions, private http: HttpClient) { }

getBudget$ = createEffect(() => 
    this.actions$.pipe(
        ofType(BudgetActions.getBudgetStart),
        mergeMap(() => {
            return this.getBudgetDetails();
        })
    )
);

    getIncomes$ = createEffect(() =>
        this.actions$.pipe(
            ofType(BudgetActions.getIncomesStart),
            mergeMap(() =>
                this.getIncomeDetails()
            )
        )

    );

    getExpenses$ = createEffect(() =>
        this.actions$.pipe(
            ofType(BudgetActions.getExpensesStart),
            mergeMap(() => 
            this.getExpenseDetails()
            )
        )
    );

    getIncomeDetails() {
        return this.http.get('assets/income.json').pipe(
            map((data: Income[]) => {
                console.log("data fetched: ", data);
                return BudgetActions.getIncomesEnd({ payload: data });
            })
        )
    };

    getExpenseDetails() {
        return this.http.get('assets/expense.json').pipe(
            map((data: Expense[]) => {
                return BudgetActions.getExpensesEnd({ payload: data });
            })
        )
    }

    getBudgetDetails() {
        return this.http.get('http://localhost:8080/1.0/utility/budget-details/'+"pallab::sarkar::6824").pipe(
            map((data: Budget) => {
                return BudgetActions.getBudgetEnd({ payload: data });
            })
        )
    }
}

