import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { JobListComponent } from './pages/job-list/job-list.component';
import { UserDetailsComponent } from './pages/user-details/user-details.component';
import { ApplicationComponent } from './pages/application/application.component';
import { ApplyManageComponent } from './pages/apply-manage/apply-manage.component';
import {NotificationComponent} from "./pages/notification/notification.component";

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', component: JobListComponent },
      { path: 'my-account', component: UserDetailsComponent },
      { path: 'my-applications', component: ApplicationComponent },
      { path: 'apply-manage/:job_id', component: ApplyManageComponent },
      {path: 'notification', component: NotificationComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobRoutingModule { }
