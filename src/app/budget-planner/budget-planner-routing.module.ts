import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'path';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IncomeComponent } from './income/income.component';
import { ExpenseComponent } from './expense/expense.component';
import { TodoComponent } from './todo/todo.component';
import { HistoryComponent } from './history/history.component';
import { ProfileComponent } from './profile/profile.component';
import { register } from 'module';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
{
  path:'',component:LoginComponent
},
{
path:'register',component:RegisterComponent
},
{
  path:'sidebar',component:SidebarComponent
},
{
  path:'dashboard',component:DashboardComponent
  
},
{
  path:'income',component:IncomeComponent
},

{
  path:'expense',component:ExpenseComponent
},
{
  path:'todo',component:TodoComponent
},
{
  path:'history',component:HistoryComponent

},
{
path:'profile',component:ProfileComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BudgetPlannerRoutingModule { }
