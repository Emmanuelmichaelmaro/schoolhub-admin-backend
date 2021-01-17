import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CourseService } from '../course.service';

@Component({
    selector: 'courselist',
    templateUrl: './courselist.component.html',
    styleUrls: ['./courselist.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations,
})
export class CourselistComponent implements OnInit {
    course: any;
    private _unsubscribeAll: Subject<any>;
    constructor(private _courseService: CourseService) {
        this._unsubscribeAll = new Subject();
        this.course = {
            lists: [],
        };
    }

    ngOnInit(): void {
        this._courseService.onCourseChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe((course) => {
            this.course = course;
        });
    }
}
