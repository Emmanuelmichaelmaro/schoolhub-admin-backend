import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
    providedIn: 'root',
})
export class SchoolService {
    @Output() savedschool: EventEmitter<any>; // = new EventEmitter();

    constructor(private http: HttpClient) {}

    private authorizationHeader() {
        const token = window.localStorage.getItem(`token@${environment.appName}`);
        const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
        return headers;
    }

    saveSchool(data: any) {
        this.http.post(environment.apiUrl + '/api/schools', data, { headers: this.authorizationHeader() }).subscribe(
            (res: any) => {
                this.savedschool.emit(res);
            },
            (err) => {
                this.savedschool.emit(err);
            }
        );
    }

    getbyid(id: any) {
        this.http.get(environment.apiUrl + '/api/schools/' + id, { headers: this.authorizationHeader() }).subscribe(
            (res: any) => {
                window.localStorage.setItem('schoolinfo', JSON.stringify(res.data));
            },
            (err: any) => {}
        );
    }
}
