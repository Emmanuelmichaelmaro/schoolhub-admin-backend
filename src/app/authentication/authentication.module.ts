import { NgModule } from '@angular/core';
import { ForgotPasswordModule } from 'app/authentication/forgot-password/forgot-password.module';
import { LockModule } from 'app/authentication/lock/lock.module';
import { LoginModule } from 'app/authentication/login/login.module';
import { MailConfirmModule } from 'app/authentication/mail-confirm/mail-confirm.module';
import { RegisterModule } from 'app/authentication/register/register.module';
import { ResetPasswordModule } from 'app/authentication/reset-password/reset-password.module';

@NgModule({
    declarations: [],
    imports: [LoginModule, RegisterModule, ForgotPasswordModule, ResetPasswordModule, LockModule, MailConfirmModule],
})
export class AuthenticationModule {}
