import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Income } from "../model/income";


@Injectable({
    'providedIn': 'root'
})
export class IncomeService {

    constructor(private http: HttpClient){}

    getIncomes(){
        return this.http.get<any>('assets/income.json')
        .toPromise()
        .then(res => <Income[]>res.data)
        .then(data => { return data; });
    }
}