import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatRippleModule,
    MatTableModule,
    MatToolbarModule,
} from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { FuseConfirmDialogModule, FuseSidebarModule } from '@fuse/components';
import { FuseSharedModule } from '@fuse/shared.module';
import { AuthenGuardService } from 'app/authentication/authen-guard.service';
import { CollaboratorListComponent } from './collaborator-list/collaborator-list.component';
import { CollaboratorComponent } from './collaborator.component';
import { CollaboratorService } from './collaborator.service';
import { MainComponent } from './sidebar/main/main.component';

const routes = [
    {
        path: '',
        component: CollaboratorComponent,
        canActivate: [AuthenGuardService],
        resolve: {
            aaa: CollaboratorService,
        },
    },
];

@NgModule({
    declarations: [CollaboratorComponent, MainComponent, CollaboratorListComponent],
    imports: [
        RouterModule.forChild(routes),
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatCardModule,
        MatDatepickerModule,
        MatMenuModule,
        MatRippleModule,
        MatTableModule,
        MatToolbarModule,

        FuseConfirmDialogModule,
        FuseSidebarModule,
        FuseSharedModule,
    ],
})
export class CollaboratorModule {}
