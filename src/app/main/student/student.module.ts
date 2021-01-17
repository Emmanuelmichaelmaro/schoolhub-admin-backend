import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatTableModule,
    MatToolbarModule,
} from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { FuseConfirmDialogModule, FuseSidebarModule } from '@fuse/components';
import { FuseSharedModule } from '@fuse/shared.module';
import { AuthenGuardService } from 'app/authentication/authen-guard.service';
import { MainComponent } from './sidebar/main/main.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentComponent } from './student.component';
import { StudentService } from './student.service';

const routes: Routes = [
    {
        path: '**',
        component: StudentComponent,
        canActivate: [AuthenGuardService],
        resolve: {
            students: StudentService,
        },
    },
];

@NgModule({
    declarations: [StudentComponent, MainComponent, StudentListComponent, StudentFormComponent],
    imports: [
        RouterModule.forChild(routes),

        MatInputModule,
        MatIconModule,
        MatTableModule,
        MatMenuModule,
        MatButtonModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatDatepickerModule,

        FuseSharedModule,
        FuseConfirmDialogModule,
        FuseSidebarModule,
    ],
    entryComponents: [StudentComponent, StudentFormComponent],
})
export class StudentModule {}
