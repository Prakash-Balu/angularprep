import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class Auth {
    API_URL = 'http://localhost:3000/users';

    constructor(private httpClient: HttpClient) {}

    register(user: any) {
        return this.httpClient.post(this.API_URL, user);
    }

    getUsers() {
        return this.httpClient.get<any[]>(this.API_URL);
    }
}