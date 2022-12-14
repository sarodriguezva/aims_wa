import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from 'src/app/components/dashboard/dashboard.component';
import { AuthGuard } from '../auth/auth.guard';

import { EnrollmentPageComponent } from './components/enrollment-page/enrollment-page.component';
import { SubjectSearchPageComponent } from './components/subject-search-page/subject-search-page.component';

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        children: [
            {
                path: 'subject',
                component: SubjectSearchPageComponent,
                canActivate: [AuthGuard],
            },
            {
                path: 'enrollment',
                component: EnrollmentPageComponent,
                canActivate: [AuthGuard],
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SubjectsRoutingModule {}
