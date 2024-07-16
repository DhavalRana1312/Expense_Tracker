import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-expense',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './expense.component.html',
  styleUrl: './expense.component.css'
})
export class ExpenseComponent {
  expenseForm!: FormGroup;
  selectedMonth: string;
  JanuaryExpense: any[] = [];
  FebruaryExpense: any[] = [];
  MarchExpense: any[] = [];
  AprilExpense: any[] = [];
  MayExpense: any[] = [];
  JuneExpense: any[] = [];
  JulyExpense: any[] = [];
  AugustExpense: any[] = [];
  SeptemberExpense: any[] = [];
  OctoberExpense: any[] = [];
  NovemberExpense: any[] = [];
  DecemberExpense: any[] = [];

  tableData: any[] = [];
  constructor(private fb: FormBuilder, private router: Router) {
    const currentDate = new Date();
    this.selectedMonth = currentDate.toLocaleDateString('default', { month: 'long' });
  }

  ngOnInit(): void {
    this.expenseForm = this.fb.group({
      month: [this.selectedMonth, Validators.required],
      source: ['', Validators.required],
      amount: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
    });
  }

  onChangeExpense(event: any) {
    this.selectedMonth = event.target.value;
  }

  calculateTotalExpense(month: string): number {
    let totalExpense = 0;
    for (const expense of this.getExpenseForMonth(month)) {
      totalExpense += parseFloat(expense.amount);
    }
    return totalExpense;
  }

  getExpenseForMonth(month: string): any[] {
    switch (month) {
      case 'January':
        return this.JanuaryExpense;
      case 'February':
        return this.FebruaryExpense;
      case 'March':
        return this.MarchExpense;
      case 'April':
        return this.AprilExpense;
      case 'May':
        return this.MayExpense;
      case 'June':
        return this.JuneExpense;
      case 'July':
        return this.JulyExpense;
      case 'August':
        return this.AugustExpense;
      case 'September':
        return this.SeptemberExpense;
      case 'October':
        return this.OctoberExpense;
      case 'November':
        return this.NovemberExpense;
      case 'December':
        return this.DecemberExpense;
      default:
        return [];
    }
  }

  getFilteredExpense() {
    const monthExpenseMap: { [key: string]: any[] } = {
      'January': this.JanuaryExpense,
      'February': this.FebruaryExpense,
      'March': this.MarchExpense,
      'April': this.AprilExpense,
      'May': this.MayExpense,
      'June': this.JuneExpense,
      'July': this.JulyExpense,
      'August': this.AugustExpense,
      'September': this.SeptemberExpense,
      'October': this.OctoberExpense,
      'November': this.NovemberExpense,
      'December': this.DecemberExpense,
    };
    return monthExpenseMap[this.selectedMonth] ? [...monthExpenseMap[this.selectedMonth]] : [];
  }

  onSubmitExpense() {
    if (this.expenseForm.valid) {
      const newExpense = this.expenseForm.value;
      switch (this.selectedMonth) {
        case 'January':
          this.JanuaryExpense.push(newExpense);
          break;
        case 'February':
          this.FebruaryExpense.push(newExpense);
          break;
        case 'March':
          this.MarchExpense.push(newExpense);
          break;
        case 'April':
          this.AprilExpense.push(newExpense);
          break;
        case 'May':
          this.MayExpense.push(newExpense);
          break;
        case 'June':
          this.JuneExpense.push(newExpense);
          break;
        case 'July':
          this.JulyExpense.push(newExpense);
          break;
        case 'August':
          this.AugustExpense.push(newExpense);
          break;
        case 'September':
          this.SeptemberExpense.push(newExpense);
          break;
        case 'October':
          this.OctoberExpense.push(newExpense);
          break;
        case 'November':
          this.NovemberExpense.push(newExpense);
          break;
        case 'December':
          this.DecemberExpense.push(newExpense);
          break;
        default:
          break;
      }
      this.expenseForm.patchValue({ source: '', amount: '' });
      this.addExpenseToTable();
    }
  }

  saveForm() {{
  alert("Form is Saved");
}
}
  

  onBack() {
    this.router.navigate(['dashboard']);
  }

  addExpenseToTable() {
    this.tableData = this.getFilteredExpense();
    console.log('Updated Table Data:', this.tableData);
  }
}
