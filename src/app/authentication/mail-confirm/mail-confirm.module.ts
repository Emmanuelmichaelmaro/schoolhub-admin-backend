import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material';
import { RouterModule } from '@angular/router';

import { FuseSharedModule } from '@fuse/shared.module';

import { MailConfirmComponent } from 'app/authentication/mail-confirm/mail-confirm.component';

const routes = [
    {
        path: 'mail-confirm',
        component: MailConfirmComponent,
    },
];

@NgModule({
    declarations: [MailConfirmComponent],
    imports: [RouterModule.forChild(routes), MatIconModule, FuseSharedModule],
})
export class MailConfirmModule {}
