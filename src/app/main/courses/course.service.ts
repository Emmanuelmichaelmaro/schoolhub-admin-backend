import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class CourseService {
    course: any;
    routeParams: any;

    onCoursesChanged: BehaviorSubject<any>;
    onCourseChanged: BehaviorSubject<any>;

    constructor() {
        this.onCoursesChanged = new BehaviorSubject([]);
        this.onCourseChanged = new BehaviorSubject([]);
    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
        console.log('resolve');
        this.routeParams = route.params;
        return new Promise((resolve, reject) => {
            Promise.all([this.getBoard()]).then(() => {
                resolve();
            }, reject);
        });
    }
    createNewCourse(newCourse): Promise<any> {
        return new Promise((resolve, reject) => {
            // this._httpClient.post('api/scrumboard-boards/' + board.id, board)
            //     .subscribe(response => {
            //         resolve(board);
            //     }, reject);
            newCourse.id = '1';
            resolve(newCourse);
        });
    }

    getBoards(): Promise<any> {
        return new Promise((resolve, reject) => {
            // this._httpClient.get('api/scrumboard-boards')
            //     .subscribe((response: any) => {
            //         this.boards = response;
            //         this.onBoardsChanged.next(this.boards);
            //         resolve(this.boards);
            //     }, reject);
            resolve([]);
        });
    }

    getBoard(): Promise<any> {
        return new Promise((resolve, reject) => {
            // this._httpClient.get('api/scrumboard-boards/' + boardId)
            // .subscribe((response: any) => {
            // this.course = newCourse;
            this.onCourseChanged.next('pooree');
            resolve(this.course);
            // }, reject);
        });
    }
}
