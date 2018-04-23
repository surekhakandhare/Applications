
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashBoardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    DashBoardRoutingModule
  ],
  declarations: [DashboardComponent],
  providers: []

})
export class DashboardModule { }
