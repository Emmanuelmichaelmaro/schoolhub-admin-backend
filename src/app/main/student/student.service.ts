import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class StudentService {
    onDataChanged: BehaviorSubject<any>;
    filterBy: string;

    constructor(private http: HttpClient, private _httpClient: HttpClient) {
        this.onDataChanged = new BehaviorSubject([]);
    }
    students: any = [];
    private authorizationHeader() {
        const token = window.localStorage.getItem(`token@${environment.appName}`);
        const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
        return headers;
    }

    resolve() {
        console.log('resolve');
        return this.getStudentDataList();
    }

    getStudentDataList(): Promise<any> {
        return new Promise((resolve, reject) => {
            this._httpClient
                .get('http://localhost:3000/api/students', { headers: this.authorizationHeader() })
                .subscribe((response: any) => {
                    this.onDataChanged.next(response.data);
                    resolve(response.data);
                }, reject);
        });
    }
    updateData(data: any): Promise<any> {
        return new Promise((resolve, reject) => {
            this._httpClient
                .post('http://localhost:3000/api/students', data, { headers: this.authorizationHeader() })
                .subscribe((response: any) => {
                    this.getStudentDataList();
                    resolve(response.data);
                }, reject);
        });
    }
    deleteData(_id) {
        return new Promise((resolve, reject) => {
            this._httpClient
                .delete('http://localhost:3000/api/students/' + _id, { headers: this.authorizationHeader() })
                .subscribe((response: any) => {
                    this.getStudentDataList();
                    resolve(response.data);
                }, reject);
        });
    }

    // ทดลองทำตาม Demo//
    /**
     * Update student
     *
     * @param student
     * @returns {Promise<any>}
     */
    updateStudent(student): Promise<any> {
        return new Promise((resolve, reject) => {
            this._httpClient
                .post('http://localhost:3000/api/students/' + student._id, { headers: this.authorizationHeader() })
                .subscribe((response: any) => {
                    this.getStudentDataList();
                    resolve(response.data);
                }, reject);
        });
    }
    // ทดลองทำตาม Demo//
}
