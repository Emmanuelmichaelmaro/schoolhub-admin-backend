import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { FormsModule } from '@angular/forms';
import { FuseSharedModule } from '@fuse/shared.module';
import { AdmissionDetailComponent } from './admission-detail/admission-detail.component';
import { AdmissionListComponent } from './admission-list/admission-list.component';

import { MatFormFieldModule, MatTableModule } from '@angular/material';
import * as wjcCore from '@grapecity/wijmo';
import { WjGridModule } from '@grapecity/wijmo.angular2.grid';
import { WjInputModule } from '@grapecity/wijmo.angular2.input';
import * as wjcGrid from '@grapecity/wijmo.grid';

import { AuthenGuardService } from 'app/authentication/authen-guard.service';
import { MatRowKeyboardSelectionModule } from 'mat-row-keyboard-selection';

const routes = [
    {
        path: '',
        component: AdmissionListComponent,
        canActivate: [AuthenGuardService],
    },
];

@NgModule({
    declarations: [AdmissionListComponent, AdmissionDetailComponent],
    imports: [
        RouterModule.forChild(routes),

        TranslateModule,

        FuseSharedModule,
        MatTableModule,
        MatFormFieldModule,
        MatRowKeyboardSelectionModule,

        WjInputModule,
        WjGridModule,
        FormsModule,
    ],
    exports: [AdmissionListComponent, AdmissionDetailComponent],
})
export class AdmissionModule {}
