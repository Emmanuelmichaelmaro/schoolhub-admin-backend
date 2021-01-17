import { NgModule } from '@angular/core';
import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule } from '@angular/material';
import { RouterModule } from '@angular/router';

import { FuseSharedModule } from '@fuse/shared.module';

import { ForgotPasswordComponent } from 'app/authentication/forgot-password/forgot-password.component';

const routes = [
    {
        path: 'forgot-password',
        component: ForgotPasswordComponent,
    },
];

@NgModule({
    declarations: [ForgotPasswordComponent],
    imports: [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,

        FuseSharedModule,
    ],
})
export class ForgotPasswordModule {}
