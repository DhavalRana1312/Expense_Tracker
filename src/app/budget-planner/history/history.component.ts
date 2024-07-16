import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { SidebarComponent } from '../sidebar/sidebar.component';

interface Transaction {
  source: string;
  amount: number;
  month: string;
}

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, MatIconModule, SidebarComponent],
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
})
export class HistoryComponent implements OnInit {
  historyForm: FormGroup;
  transactions: Transaction[] = [
    { source: 'Food', amount: 100, month: 'January' },
    { source: 'Transport', amount: 50, month: 'January' },
    { source: 'Rent', amount: 1500, month: 'February' },
    { source: 'Utilities', amount: 100, month: 'February' },
    { source: 'Food', amount: 120, month: 'March' },
    { source: 'Entertainment', amount: 200, month: 'March' },
  ];
  selectedMonth!: string;

  constructor(private router: Router) {
    this.historyForm = new FormGroup({
      month: new FormControl(''),
    });
  }

  ngOnInit(): void {}

  onChangeHistory(event: any): void {
    this.selectedMonth = event.target.value;
  }

  calculateTotalHistory(month: string): number {
    return this.transactions
      .filter((transaction) => transaction.month === month)
      .reduce((acc, current) => acc + current.amount, 0);
  }

  getFilteredHistory(): Transaction[] {
    return this.transactions.filter(
      (transaction) => transaction.month === this.selectedMonth
    );
  }

  onBack(): void {
    this.router.navigate(['dashboard']);
  }
}
