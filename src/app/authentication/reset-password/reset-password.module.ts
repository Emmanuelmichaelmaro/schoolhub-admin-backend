import { NgModule } from '@angular/core';
import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule } from '@angular/material';
import { RouterModule } from '@angular/router';

import { FuseSharedModule } from '@fuse/shared.module';

import { ResetPasswordComponent } from 'app/authentication/reset-password/reset-password.component';

const routes = [
    {
        path: 'reset-password',
        component: ResetPasswordComponent,
    },
];

@NgModule({
    declarations: [ResetPasswordComponent],
    imports: [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,

        FuseSharedModule,
    ],
})
export class ResetPasswordModule {}
