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

import { FuseSharedModule } from '@fuse/shared.module';

import { MatDialogModule } from '@angular/material/dialog';
import { RegisterComponent } from 'app/authentication/register/register.component';
import { SchoolComponent } from 'app/main/school/school.component';

const routes = [
    {
        path: 'register',
        component: RegisterComponent,
    },
];

@NgModule({
    declarations: [RegisterComponent, SchoolComponent],
    imports: [
        MatDialogModule,
        RouterModule.forChild(routes),

        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatToolbarModule,

        FuseSharedModule,
    ],
    entryComponents: [SchoolComponent],
})
export class RegisterModule {}
