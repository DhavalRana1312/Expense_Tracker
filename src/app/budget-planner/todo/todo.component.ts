import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  todoForm!: FormGroup;
  selectedMonth: string;
  JanuaryToDo: any[] = [];
  FebruaryToDo: any[] = [];
  MarchToDo: any[] = [];
  AprilToDo: any[] = [];
  MayToDo: any[] = [];
  JuneToDo: any[] = [];
  JulyToDo: any[] = [];
  AugustToDo: any[] = [];
  SeptemberToDo: any[] = [];
  OctoberToDo: any[] = [];
  NovemberToDo: any[] = [];
  DecemberToDo: any[] = [];

  tableData: any[] = [];
  constructor(private fb: FormBuilder, private router: Router) {
    const currentDate = new Date();
    this.selectedMonth = currentDate.toLocaleDateString('default', { month: 'long' });
  }

  ngOnInit(): void {
    this.todoForm = this.fb.group({
      month: [this.selectedMonth, Validators.required],
      source: ['', Validators.required],
      amount: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
    });
  }

  onChangeToDo(event: any) {
    this.selectedMonth = event.target.value;
  }

  calculateTotalToDo(month: string): number {
    let totalToDo = 0;
    for (const ToDo of this.getToDoForMonth(month)) {
      totalToDo += parseFloat(ToDo.amount);
    }
    return totalToDo;
  }

  getToDoForMonth(month: string): any[] {
    switch (month) {
      case 'January':
        return this.JanuaryToDo;
      case 'February':
        return this.FebruaryToDo;
      case 'March':
        return this.MarchToDo;
      case 'April':
        return this.AprilToDo;
      case 'May':
        return this.MayToDo;
      case 'June':
        return this.JuneToDo;
      case 'July':
        return this.JulyToDo;
      case 'August':
        return this.AugustToDo;
      case 'September':
        return this.SeptemberToDo;
      case 'October':
        return this.OctoberToDo;
      case 'November':
        return this.NovemberToDo;
      case 'December':
        return this.DecemberToDo;
      default:
        return [];
    }
  }

  getFilteredToDo() {
    const monthToDoMap: { [key: string]: any[] } = {
      'January': this.JanuaryToDo,
      'February': this.FebruaryToDo,
      'March': this.MarchToDo,
      'April': this.AprilToDo,
      'May': this.MayToDo,
      'June': this.JuneToDo,
      'July': this.JulyToDo,
      'August': this.AugustToDo,
      'September': this.SeptemberToDo,
      'October': this.OctoberToDo,
      'November': this.NovemberToDo,
      'December': this.DecemberToDo,
    };
    return monthToDoMap[this.selectedMonth] ? [...monthToDoMap[this.selectedMonth]] : [];
  }

  onSubmitToDo() {
    if (this.todoForm.valid) {
      const newToDo = this.todoForm.value;
      switch (this.selectedMonth) {
        case 'January':
          this.JanuaryToDo.push(newToDo);
          break;
        case 'February':
          this.FebruaryToDo.push(newToDo);
          break;
        case 'March':
          this.MarchToDo.push(newToDo);
          break;
        case 'April':
          this.AprilToDo.push(newToDo);
          break;
        case 'May':
          this.MayToDo.push(newToDo);
          break;
        case 'June':
          this.JuneToDo.push(newToDo);
          break;
        case 'July':
          this.JulyToDo.push(newToDo);
          break;
        case 'August':
          this.AugustToDo.push(newToDo);
          break;
        case 'September':
          this.SeptemberToDo.push(newToDo);
          break;
        case 'October':
          this.OctoberToDo.push(newToDo);
          break;
        case 'November':
          this.NovemberToDo.push(newToDo);
          break;
        case 'December':
          this.DecemberToDo.push(newToDo);
          break;
        default:
          break;
      }
      this.todoForm.patchValue({ source: '', amount: '' });
      this.addToDoToTable();
    }
  }

  saveForm() {{
  alert("Form is Saved");
}
}
  

  onBack() {
    this.router.navigate(['dashboard']);
  }

  addToDoToTable() {
    this.tableData = this.getFilteredToDo();
    console.log('Updated Table Data:', this.tableData);
  }
}
