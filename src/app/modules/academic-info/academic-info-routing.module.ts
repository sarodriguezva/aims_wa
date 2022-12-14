import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from 'src/app/components/dashboard/dashboard.component';
import { AuthGuard } from '../auth/auth.guard';

import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { ReportComponent } from './components/report-page/report.component';
import { SchedulePageComponent } from './components/schedule-page/schedule-page.component';
import { StudentGradingPageComponent } from './components/student-grading-page/student-grading-page.component';

export const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        children: [
            {
                path: 'report',
                component: ReportComponent,
                canActivate: [AuthGuard],
            },
            {
                path: 'studentGrading',
                component: StudentGradingPageComponent,
                canActivate: [AuthGuard],
            },
            {
                path: 'profile',
                component: ProfilePageComponent,
                canActivate: [AuthGuard],
            },
            {
                path: 'schedule',
                component: SchedulePageComponent,
                canActivate: [AuthGuard],
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AcademicInfoRoutingModule {}
