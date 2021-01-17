import { Component, EventEmitter, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { FuseConfigService } from '@fuse/services/config.service';
import { SchoolComponent } from 'app/main/school/school.component';
import { AuthenService } from '../authen.service';

@Component({
    selector: 'register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations,
})
export class RegisterComponent implements OnInit, OnDestroy {
    registerForm: FormGroup;
    user = {
        firstname: '',
        lastname: '-',
        email: '',
        username: '',
        password: '',
        ref1: '-',
    };

    // Private
    private _unsubscribeAll: Subject<any>;

    constructor(
        public dialog: MatDialog,
        private _fuseConfigService: FuseConfigService,
        private _formBuilder: FormBuilder,
        private router: Router,
        private auth: AuthenService
    ) {
        // Configure the layout
        this._fuseConfigService.config = {
            layout: {
                navbar: {
                    hidden: true,
                },
                toolbar: {
                    hidden: true,
                },
                footer: {
                    hidden: true,
                },
                sidepanel: {
                    hidden: true,
                },
            },
        };

        // Set the private defaults
        this._unsubscribeAll = new Subject();

        this.auth.isRegisted = new EventEmitter();
        this.auth.isLoggedIn = new EventEmitter();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        this.registerForm = this._formBuilder.group({
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required],
            passwordConfirm: ['', [Validators.required, confirmPasswordValidator]],
        });

        // Update the validity of the 'passwordConfirm' field
        // when the 'password' field changes
        this.registerForm
            .get('password')
            .valueChanges.pipe(takeUntil(this._unsubscribeAll))
            .subscribe(() => {
                this.registerForm.get('passwordConfirm').updateValueAndValidity();
            });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    /**
     * On register button click
     */
    register(): void {
        this.user.username = this.user.email;
        this.auth.register(this.user);
        this.auth.isRegisted.subscribe((res: any) => {
            if (res.status === 200) {
                this.openDialog();
                // this.router.navigate(['']);
            } else {
                // error
            }
        });
    }

    openDialog(): void {
        const dialogRef = this.dialog.open(SchoolComponent, {
            width: '400px',
            panelClass: 'school',
        });

        dialogRef.afterClosed().subscribe((result) => {
            // console.log("openDialog");
            this.auth.login(this.user);
            this.auth.isLoggedIn.subscribe(
                (res: any) => {
                    if (res.status === 200) {
                        // console.log(this.auth.user);
                        this.router.navigate(['']);
                    } else {
                        // error
                    }
                },
                (err: any) => {
                    console.log(err);
                },
                () => {
                    console.log('complete');
                }
            );
        });
    }
}

/**
 * Confirm password validator
 *
 * @param {AbstractControl} control
 * @returns {ValidationErrors | null}
 */
export const confirmPasswordValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    if (!control.parent || !control) {
        return null;
    }

    const password = control.parent.get('password');
    const passwordConfirm = control.parent.get('passwordConfirm');

    if (!password || !passwordConfirm) {
        return null;
    }

    if (passwordConfirm.value === '') {
        return null;
    }

    if (password.value === passwordConfirm.value) {
        return null;
    }

    return { passwordsNotMatching: true };
};
