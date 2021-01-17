import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'edit-course-name',
    templateUrl: './editcoursename.component.html',
    styleUrls: ['./editcoursename.component.scss'],
})
export class EditcoursenameComponent implements OnInit {
    formActive: boolean;
    form: FormGroup;

    @Input()
    course;

    @Output()
    courseNameChanged: EventEmitter<any>;

    @ViewChild('nameInput')
    nameInputField;
    constructor(private formBuilder: FormBuilder) {
        this.formActive = false;
        this.courseNameChanged = new EventEmitter();
    }

    openForm(): void {
        this.form = this.formBuilder.group({
            name: [this.course],
        });
        this.formActive = true;
        this.focusNameField();
    }

    focusNameField(): void {
        setTimeout(() => {
            this.nameInputField.nativeElement.focus();
        });
    }

    closeForm(): void {
        this.formActive = false;
    }

    onFormSubmit(): void {
        if (this.form.valid) {
            this.course = this.form.getRawValue().name;
            this.course = encodeURIComponent(this.course).replace(/%20/g, '-').toLowerCase();

            this.courseNameChanged.next(this.course);
            this.formActive = false;
        }
    }
    ngOnInit() {}
}
