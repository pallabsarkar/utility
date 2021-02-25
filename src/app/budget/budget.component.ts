import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Income } from './model/income';
import { Product } from './product';

import { getBudgetStart, getIncomesStart, getExpensesStart } from './store/budget.actions';
import * as fromApp from '../shared/store/app.reducer';
import { Expense } from './model/expense';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss']
})
export class BudgetComponent implements OnInit {

  products: Product[] = [];
  incomes: Income[] = [];
  expenses: Expense[] = [];
  budgetSubscription: Subscription | undefined;
  // expenseSubscription: Subscription | undefined;
  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(getBudgetStart());
    this.budgetSubscription = this.store.select('budgetReducer').subscribe(
      (data) => {
        this.incomes = data.incomes;
        this.expenses = data.expenses;
        console.log("component: ",data);
      }
    );
  }

  ngOnDestroy(): void {
    this.budgetSubscription.unsubscribe();
  }
}
