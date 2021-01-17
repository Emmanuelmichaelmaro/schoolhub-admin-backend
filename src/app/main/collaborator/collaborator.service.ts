import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveEnd, RouterStateSnapshot } from '@angular/router';
import { Colaborator } from 'app/main/collaborator/collaborator.model';
import { environment } from 'environments/environment';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class CollaboratorService {
    onDataChanged: BehaviorSubject<any>;

    // colaborators: Colaborator[];

    // @Output() gettinglist: EventEmitter<any> = new EventEmitter();
    // @Output() created: EventEmitter<any> = new EventEmitter();
    // @Output() deleted: EventEmitter<any> = new EventEmitter();

    constructor(private http: HttpClient, private _httpClient: HttpClient) {
        this.onDataChanged = new BehaviorSubject([]);
    }
    collaborators: any = [];
    private authorizationHeader() {
        const token = window.localStorage.getItem(`token@${environment.appName}`);
        const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
        return headers;
    }
    // getlist() {
    //   this.http.get(environment.apiUrl + "/api/collaborators", { headers: this.authorizationHeader() }).subscribe((res: any) => {
    //     // console.log(res);
    //     this.gettinglist.emit(res);
    //   }, (err) => {
    //     this.gettinglist.emit(err);
    //   })
    // }
    // create(data: any) {
    //   this.http.post(environment.apiUrl + "/api/collaborators", data, { headers: this.authorizationHeader() }).subscribe((res: any) => {
    //     this.created.emit(res);
    //   }, (err) => {
    //     this.created.emit(err);
    //   })
    // }
    // delete(_id) {
    //   this.http.delete(environment.apiUrl + "/api/collaborators/" + _id, { headers: this.authorizationHeader() }).subscribe((res: any) => {
    //     this.deleted.emit(res);
    //   }, (err) => {
    //     this.deleted.emit(err);
    //   })
    // }

    resolve() {
        console.log('resolve');
        return this.getCollaboratorDataList();
    }

    getCollaboratorDataList(): Promise<any> {
        return new Promise((resolve, reject) => {
            this._httpClient
                .get(environment.apiUrl + '/api/collaborators', { headers: this.authorizationHeader() })
                .subscribe((response: any) => {
                    this.onDataChanged.next(response.data);
                    resolve(response.data);
                }, reject);
        });
    }
    updateData(data: any): Promise<any> {
        return new Promise((resolve, reject) => {
            this._httpClient
                .post(environment.apiUrl + '/api/collaborators', data, { headers: this.authorizationHeader() })
                .subscribe((response: any) => {
                    this.getCollaboratorDataList();
                    resolve(response.data);
                }, reject);
        });
    }
    deleteData(_id) {
        return new Promise((resolve, reject) => {
            this._httpClient
                .delete(environment.apiUrl + '/api/collaborators/' + _id, { headers: this.authorizationHeader() })
                .subscribe((response: any) => {
                    this.getCollaboratorDataList();
                    resolve(response.data);
                }, reject);
        });
    }
}
