import { NgModule } from '@angular/core';
import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule } from '@angular/material';
import { RouterModule } from '@angular/router';

import { FuseSharedModule } from '@fuse/shared.module';

import { LockComponent } from 'app/authentication/lock/lock.component';

const routes = [
    {
        path: 'lock',
        component: LockComponent,
    },
];

@NgModule({
    declarations: [LockComponent],
    imports: [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,

        FuseSharedModule,
    ],
})
export class LockModule {}
