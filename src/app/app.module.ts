import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import 'hammerjs';

import { FuseProgressBarModule, FuseSidebarModule, FuseThemeOptionsModule } from '@fuse/components';
import { FuseModule } from '@fuse/fuse.module';
import { FuseSharedModule } from '@fuse/shared.module';

import { fuseConfig } from 'app/fuse-config';

import { AppComponent } from 'app/app.component';
import { LayoutModule } from 'app/layout/layout.module';
import { SampleModule } from 'app/main/sample/sample.module';

const appRoutes: Routes = [
    {
        path: 'courses',
        loadChildren: './main/courses/courses.module#CoursesModule',
    },
    {
        path: 'student',
        loadChildren: './main/student/student.module#StudentModule',
    },
    {
        path: 'collaborator',
        loadChildren: './main/collaborator/collaborator.module#CollaboratorModule',
    },
    {
        path: 'auth',
        loadChildren: './authentication/authentication.module#AuthenticationModule',
    },
    {
        path: 'admission',
        loadChildren: './main/admission/admission.module#AdmissionModule',
    },
    {
        path: '**',
        redirectTo: 'courses',
    },
];

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),

        TranslateModule.forRoot(),

        // Material moment date module
        MatMomentDateModule,

        // Material
        MatButtonModule,
        MatIconModule,

        // Fuse modules
        FuseModule.forRoot(fuseConfig),
        FuseProgressBarModule,
        FuseSharedModule,
        FuseSidebarModule,
        FuseThemeOptionsModule,

        // App modules
        LayoutModule,
        SampleModule,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
