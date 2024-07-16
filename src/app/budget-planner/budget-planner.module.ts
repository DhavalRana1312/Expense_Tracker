
import { CommonModule } from '@angular/common';

import { BudgetPlannerRoutingModule } from './budget-planner-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component'; 
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BudgetPlannerRoutingModule,
    DashboardComponent,SidebarComponent 
  ],
})
export class BudgetPlannerModule { }
