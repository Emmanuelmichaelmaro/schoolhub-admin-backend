import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../student.service';

@Component({
    selector: 'student-main-sidebar',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
    filterBy: string;

    constructor(private studentService: StudentService) {}

    ngOnInit() {
        this.filterBy = this.studentService.filterBy || 'all';
    }
    changeFilter(filter): void {
        this.filterBy = filter;
    }
}
