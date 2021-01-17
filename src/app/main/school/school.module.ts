import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
} from '@angular/material';
import { RouterModule } from '@angular/router';
import { FuseConfirmDialogModule, FuseSidebarModule } from '@fuse/components';
import { FuseSharedModule } from '@fuse/shared.module';
import { AuthenGuardService } from 'app/authentication/authen-guard.service';
import { SchoolComponent } from './school.component';

const routes = [
    {
        path: '',
        component: SchoolComponent,
        canActivate: [AuthenGuardService],
    },
];

@NgModule({
    declarations: [SchoolComponent],
    imports: [
        RouterModule.forChild(routes),
        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatToolbarModule,
        MatFormFieldModule,

        FuseSharedModule,
        FuseConfirmDialogModule,
        FuseSidebarModule,
    ],
})
export class SchoolModule {}
