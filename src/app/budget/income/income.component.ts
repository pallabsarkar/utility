import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Income } from '../model/income';

import { addIncome } from '../store/budget.actions';
import * as fromApp from '../../shared/store/app.reducer';
@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.scss']
})
export class IncomeComponent implements OnInit {

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {
  }
  onAddFormSubmit(form: NgForm){
    this.store.dispatch(addIncome(form.value));
  }
}
