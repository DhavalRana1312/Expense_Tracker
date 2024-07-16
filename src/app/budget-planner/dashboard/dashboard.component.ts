import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatIconModule, CommonModule, SidebarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {


  //income
  LastMonthIncome = ['January: $25000', 'February:$26000', 'March:$30000'];
  currentMonthIncome = '$30000';

  //Expense
  LastMonthExpense = ['January: $25000', 'February:$26000', 'March:$25000'];
  currentMonthExpense = '$25000';

  //ToDo Transaction
  todoTransaction = [
    { description: 'Pay Electricity Bills' },
    { description: 'Mobile Recharge' },
    { description: 'Petrol' },
    { description: 'Gas Bill' },
    { description: 'Groccery' }
  ]

  //toatal saving
  totalCurrentMonthIncome = 2000
  totalCurrentMonthExpense = 500
  constructor(private router: Router) {


  }

  // Define the onIncome method
  onIncome() {
    // Add your logic here
    this.router.navigate(['income'])
  }

  onExpense() {
    this.router.navigate(['expense'])
  }

  onToDo() {
    this.router.navigate(['todo'])
  }

  get CurrentMonthSaving(): number {
    return this.totalCurrentMonthIncome - this.totalCurrentMonthExpense;
  }


}
