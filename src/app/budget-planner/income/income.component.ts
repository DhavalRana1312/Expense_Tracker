import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-income',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css']
})
export class IncomeComponent implements OnInit {
  incomeForm!: FormGroup;
  selectedMonth: string;
  JanuaryIncome: any[] = [];
  FebruaryIncome: any[] = [];
  MarchIncome: any[] = [];
  AprilIncome: any[] = [];
  MayIncome: any[] = [];
  JuneIncome: any[] = [];
  JulyIncome: any[] = [];
  AugustIncome: any[] = [];
  SeptemberIncome: any[] = [];
  OctoberIncome: any[] = [];
  NovemberIncome: any[] = [];
  DecemberIncome: any[] = [];

  tableData: any[] = [];

  constructor(private fb: FormBuilder, private router: Router) {
    const currentDate = new Date();
    this.selectedMonth = currentDate.toLocaleDateString('default', { month: 'long' });
  }

  ngOnInit(): void {
    this.incomeForm = this.fb.group({
      month: [this.selectedMonth, Validators.required],
      source: ['', Validators.required],
      amount: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
    });
  }

  onChange(event: any) {
    this.selectedMonth = event.target.value;
  }

  calculateTotalIncome(month: string): number {
    let totalIncome = 0;
    for (const income of this.getIncomeForMonth(month)) {
      totalIncome += parseFloat(income.amount);
    }
    return totalIncome;
  }

  getIncomeForMonth(month: string): any[] {
    switch (month) {
      case 'January':
        return this.JanuaryIncome;
      case 'February':
        return this.FebruaryIncome;
      case 'March':
        return this.MarchIncome;
      case 'April':
        return this.AprilIncome;
      case 'May':
        return this.MayIncome;
      case 'June':
        return this.JuneIncome;
      case 'July':
        return this.JulyIncome;
      case 'August':
        return this.AugustIncome;
      case 'September':
        return this.SeptemberIncome;
      case 'October':
        return this.OctoberIncome;
      case 'November':
        return this.NovemberIncome;
      case 'December':
        return this.DecemberIncome;
      default:
        return [];
    }
  }

  getFilteredIncome() {
    const monthIncomeMap: { [key: string]: any[] } = {
      'January': this.JanuaryIncome,
      'February': this.FebruaryIncome,
      'March': this.MarchIncome,
      'April': this.AprilIncome,
      'May': this.MayIncome,
      'June': this.JuneIncome,
      'July': this.JulyIncome,
      'August': this.AugustIncome,
      'September': this.SeptemberIncome,
      'October': this.OctoberIncome,
      'November': this.NovemberIncome,
      'December': this.DecemberIncome,
    };
    return monthIncomeMap[this.selectedMonth] ? [...monthIncomeMap[this.selectedMonth]] : [];
  }

  onSubmit() {
    if (this.incomeForm.valid) {
      const newIncome = this.incomeForm.value;
      switch (this.selectedMonth) {
        case 'January':
          this.JanuaryIncome.push(newIncome);
          break;
        case 'February':
          this.FebruaryIncome.push(newIncome);
          break;
        case 'March':
          this.MarchIncome.push(newIncome);
          break;
        case 'April':
          this.AprilIncome.push(newIncome);
          break;
        case 'May':
          this.MayIncome.push(newIncome);
          break;
        case 'June':
          this.JuneIncome.push(newIncome);
          break;
        case 'July':
          this.JulyIncome.push(newIncome);
          break;
        case 'August':
          this.AugustIncome.push(newIncome);
          break;
        case 'September':
          this.SeptemberIncome.push(newIncome);
          break;
        case 'October':
          this.OctoberIncome.push(newIncome);
          break;
        case 'November':
          this.NovemberIncome.push(newIncome);
          break;
        case 'December':
          this.DecemberIncome.push(newIncome);
          break;
        default:
          break;
      }
      this.incomeForm.patchValue({ source: '', amount: '' });
      this.addIncomeToTable();
    }
  }

  saveForm() {{
  alert("Form is Saved");
}
}
  

  onBack() {
    this.router.navigate(['dashboard']);
  }

  addIncomeToTable() {
    this.tableData = this.getFilteredIncome();
    console.log('Updated Table Data:', this.tableData);
  }
}
