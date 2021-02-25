import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.scss']
})
export class ExpenseComponent implements OnInit {

  expenseForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.expenseForm = new FormGroup({
      'source': new FormControl(null, Validators.required),
      'amount': new FormControl(null, [Validators.required, Validators.minLength(1)]),
      'date': new FormControl(null),
      'account':  new FormControl(null)
    });
  }


  onSubmit(){
    console.log(this.expenseForm.value);
  }
}
