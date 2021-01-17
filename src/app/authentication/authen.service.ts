import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'environments/environment';

@Injectable({
    providedIn: 'root',
})
export class AuthenService {
    jwt: JwtHelperService = new JwtHelperService();
    
    token: any;
    user: any;
    
    @Output() isLoggedIn: EventEmitter<any>; // = new EventEmitter();
    @Output() isRegisted: EventEmitter<any>; // = new EventEmitter();
    
    constructor(private http: HttpClient) {
        this.token = window.localStorage.getItem(`token@${environment.appName}`);
        this.user = this.token ? this.jwt.decodeToken(this.token) : null;
    }

    login(data: any): void { // ${environment.apiUrl}/api/auth/signin
        // console.log(JSON.stringify(data));
        this.http.post(`${environment.apiUrl}/accounts/login`, data).subscribe(
            (res: any) => {
                window.localStorage.setItem(`token@${environment.appName}`, res.token);
                
                this.token = window.localStorage.getItem(`token@${environment.appName}`);
                this.user = this.token ? this.jwt.decodeToken(this.token) : null;
                
                this.isLoggedIn.emit(res);
            },
            (err: any) => {
                this.isLoggedIn.error(err);
            }
        );
    }

    register(data: any): void { // ${environment.apiUrl}/api/auth/signup
        this.http.post(`${environment.apiUrl}/register`, data).subscribe(
            (res: any) => {
                window.localStorage.setItem(`token@${environment.appName}`, res.token);
                
                this.token = window.localStorage.getItem(`token@${environment.appName}`);
                this.user = this.token ? this.jwt.decodeToken(this.token) : null;
                
                this.isRegisted.emit(res);
            },
            (err: any) => {
                this.isRegisted.error(err);
            }
        );
    }

    logout(): void {
        window.localStorage.removeItem(`token@${environment.appName}`);
        window.localStorage.removeItem('schoolinfo');
        
        this.token = window.localStorage.getItem(`token@${environment.appName}`);
        this.user = this.token ? this.jwt.decodeToken(this.token) : null;
        
        // this.isLoggedIn.emit(this.user);
    }
}
