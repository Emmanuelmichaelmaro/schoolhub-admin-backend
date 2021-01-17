import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { StudentFormComponent } from './student-form/student-form.component';
import { StudentService } from './student.service';

@Component({
    selector: 'app-student',
    templateUrl: './student.component.html',
    styleUrls: ['./student.component.scss'],
})
export class StudentComponent implements OnInit {
    studentForm: FormGroup;
    dialogRef: any;
    students = [];
    student = {
        room: '',
        studentnumber: '',
        studentid: '',
        prefix: '',
        firstname: '',
        lastname: '',
        identificationnumber: '',
        attendancedate: '',
        oldschool: '',
        province: '',
        lastfloor: '',
        birthday: '',
        sex: '',
        nationality: '',
        religion: '',
        fatherfullname: '',
        motherfullname: '',
        pp1set: '',
        pp1number: '',
        pp2number: '',
        enddateofapproval: '',
        approvaldate: '',
        cause: '',
    };

    constructor(
        private studentService: StudentService,
        public dialog: MatDialog,
        private _matDialog: MatDialog,
        private route: ActivatedRoute,
        private _formBuilder: FormBuilder
    ) {}

    ngOnInit() {
        // console.log("OnInit");
        // this.student = this.route.snapshot.data['students'];
        // console.log(this.route.snapshot.data['students']);
        this.studentForm = this._formBuilder.group({
            room: ['', Validators.required],
            studentnumber: ['', Validators.required],
            studentid: ['', Validators.required],
            prefix: ['', Validators.required],
            firstname: ['', Validators.required],
            lastname: ['', Validators.required],
            identificationnumber: ['', Validators.required],
            attendancedate: ['', Validators.required],
            oldschool: ['', Validators.required],
            province: ['', Validators.required],
            lastfloor: ['', Validators.required],
            birthday: ['', Validators.required],
            sex: ['', Validators.required],
            nationality: ['', Validators.required],
            religion: ['', Validators.required],
            fatherfullname: ['', Validators.required],
            motherfullname: ['', Validators.required],
            pp1set: ['', Validators.required],
            pp1number: ['', Validators.required],
            pp2number: ['', Validators.required],
            enddateofapproval: ['', Validators.required],
            approvaldate: ['', Validators.required],
            cause: ['', Validators.required],
        });
    }

    openDialog(): void {
        const dialogRef = this.dialog.open(StudentFormComponent, {
            panelClass: 'student-form-dialog',
            data: {
                action: 'new',
            },
        });

        dialogRef.afterClosed().subscribe((result) => {});
    }
}
