import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperimentListComponent } from './experiment-list/experiment-list.component';
import { ExperimentplanListComponent } from './experimentplan-list/experimentplan-list.component';
import { ExperimentplanComponent } from './experimentplan/experimentplan.component';
import { PlanReportComponent } from './plan-report/plan-report.component';
import { ResultReportComponent } from './result-report/result-report.component';
import { RollDetailsComponent } from './roll-details/roll-details.component';
import { UserListComponent } from './user-list/user-list.component';
import { UsergroupListComponent } from './usergroup-list/usergroup-list.component';

const routes: Routes = [
  {path: '',component: PlanReportComponent},
  {path: 'user-list',component: UserListComponent},
  {path: 'roll-list',component: RollDetailsComponent},
  {path: 'usergroup-list',component: UsergroupListComponent},
  {path: 'experiment-list',component: ExperimentListComponent},
  {path: 'experimentplan-list',component: ExperimentplanListComponent},
  {path: 'experimentplan',component: ExperimentplanComponent},
  {path: 'plan-report',component: PlanReportComponent},
  {path: 'result-report',component: ResultReportComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
