import { Expense } from "./expense";
import { Income } from "./income";

export interface Budget {
    id: string;
    incomes: Income[];
    expenses: Expense[];
}