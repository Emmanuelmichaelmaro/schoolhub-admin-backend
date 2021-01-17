import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../student.service';
import { StudentModel } from '../students.model';

@Component({
    selector: 'student-form',
    templateUrl: './student-form.component.html',
    styleUrls: ['./student-form.component.scss'],
})
export class StudentFormComponent implements OnInit {
    studentForm: FormGroup;
    action: string;
    student: StudentModel;
    students = [];
    dialogTitle: string;

    // ทดลองทำตาม Demo Edit//
    /**
     * Constructor
     *
     * @param {MatDialogRef<StudentFormComponent>} matDialogRef
     * @param _data
     * @param {FormBuilder} _formBuilder
     */
    // ทดลองทำตาม Demo Edit//

    constructor(
        private route: ActivatedRoute,
        private studentService: StudentService,
        private _formBuilder: FormBuilder,
        private router: Router,
        public matDialogRef: MatDialogRef<StudentFormComponent>,
        @Inject(MAT_DIALOG_DATA) private _data: any
    ) {
        // Set the defaults
        this.action = _data.action;

        if (this.action === 'edit') {
            this.dialogTitle = 'Edit Student';
            this.student = _data.student;
            console.log(this.student);
        } else {
            this.dialogTitle = 'New Student';
            this.student = new StudentModel({});
        }

        this.studentForm = this.createStudentsForm();
    }

    ngOnInit() {
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

    createStudentsForm(): FormGroup {
        return this._formBuilder.group({
            avatar: [this.student.avatar],
            room: [this.student.room],
            studentnumber: [this.student.studentnumber],
            studentid: [this.student.studentid],
            prefix: [this.student.prefix],
            firstname: [this.student.firstname],
            lastname: [this.student.lastname],
            identificationnumber: [this.student.identificationnumber],
            attendancedate: [this.student.attendancedate],
            oldschool: [this.student.oldschool],
            province: [this.student.province],
            lastfloor: [this.student.lastfloor],
            birthday: [this.student.birthday],
            sex: [this.student.sex],
            nationality: [this.student.nationality],
            religion: [this.student.religion],
            fatherfullname: [this.student.fatherfullname],
            motherfullname: [this.student.motherfullname],
            pp1set: [this.student.pp1set],
            pp1number: [this.student.pp1number],
            pp2number: [this.student.pp2number],
            enddateofapproval: [this.student.enddateofapproval],
            approvaldate: [this.student.approvaldate],
            cause: [this.student.cause],
        });
    }

    onAddStudent() {
        this.studentService.updateData(this.studentForm.getRawValue());
        console.log('onAddStudent');
    }
}
