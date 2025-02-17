import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { FuseSharedModule } from '@fuse/shared.module';

import { AuthenGuardService } from 'app/authentication/authen-guard.service';
import { SampleComponent } from './sample.component';

const routes = [
    {
        path: 'sample',
        component: SampleComponent,
        canActivate: [AuthenGuardService],
    },
];

@NgModule({
    declarations: [SampleComponent],
    imports: [RouterModule.forChild(routes), TranslateModule, FuseSharedModule],
    exports: [SampleComponent],
})
export class SampleModule {}
