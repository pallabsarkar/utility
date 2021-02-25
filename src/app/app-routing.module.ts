import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BudgetComponent } from './budget/budget.component';
import { CalculatorComponent } from './calculator/calculator.component';

const routes: Routes = [
  { path: 'calculator', component: CalculatorComponent},
  { path: 'budget', component: BudgetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
