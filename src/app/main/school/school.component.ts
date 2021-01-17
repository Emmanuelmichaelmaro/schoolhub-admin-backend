import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';
import { SchoolService } from './school.service';

@Component({
    selector: 'school',
    templateUrl: './school.component.html',
    styleUrls: ['./school.component.scss'],
})
export class SchoolComponent implements OnInit {
    dialogTitle: string;

    schoolForm: FormGroup;
    school = {
        schoolname: '',
        under: '',
        area: '',
        subdistric: '',
        distric: '',
        province: '',
        registrar: '',
        position: '',
        direction: '',
        positions: '',
    };

    constructor(
        public dialogRef: MatDialogRef<SchoolComponent>,
        private sch: SchoolService,
        private _formBuilder: FormBuilder,
        private router: Router
    ) {
        this.sch.savedschool = new EventEmitter();
    }

    ngOnInit(): void {
        this.schoolForm = this._formBuilder.group({
            schoolname: ['', Validators.required],
            under: ['', Validators.required],
            area: ['', Validators.required],
            subdistric: ['', Validators.required],
            distric: ['', Validators.required],
            province: ['', Validators.required],
            registrar: ['', Validators.required],
            position: ['', Validators.required],
            direction: ['', Validators.required],
            positions: ['', Validators.required],
        });
    }

    onSaveSchool() {
        this.sch.saveSchool(this.school);
        this.sch.savedschool.subscribe((res: any) => {
            if (res.status == 200) {
                console.log(res);
                this.sch.getbyid(res.data._id);
                // console.log(this.sch.info);
                this.dialogRef.close();
            }
        });
    }
}
