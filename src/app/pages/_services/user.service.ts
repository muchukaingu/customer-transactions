import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../_model/user';

const apiUrl = 'http://localhost:4200';


@Injectable({ providedIn: 'root' })
export class UserService {


    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`${apiUrl}/users`);
    }

    getById(id: number) {
        return this.http.get(`${apiUrl}/users/${id}`);
    }
    register(user: User) {
        return this.http.post(`${apiUrl}/users/register`, user);
    }

    update(user: User) {
        return this.http.put(`${apiUrl}/users/${user.id}`, user);
    }

    delete(id: number) {
        return this.http.delete(`${apiUrl}/users/${id}`);
    }

}

