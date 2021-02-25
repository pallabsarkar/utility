import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { HomeComponent } from './home/home.component';
import { BudgetComponent } from './budget/budget.component';
import { IncomeComponent } from './budget/income/income.component';
import { ExpenseComponent } from './budget/expense/expense.component';




import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { BudgetEffects } from './budget/store/budget.effects';

import * as fromApp from './shared/store/app.reducer';
import { CustomPrimeNgModule } from './shared/modules/primeng.module';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    HomeComponent,
    BudgetComponent,
    IncomeComponent,
    ExpenseComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    CustomPrimeNgModule,
    StoreModule.forRoot(fromApp.appReducer),
    EffectsModule.forRoot([BudgetEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
