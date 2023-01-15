import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { user } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userURL = environment.URL + '/users/';
  
  constructor(private httpClient: HttpClient) { }

    public list(): Observable<user[]>{
        return this.httpClient.get<user[]>(this.userURL + 'list');
    }

    public details(id: number):Observable<user>{
        return this.httpClient.get<user>(this.userURL + `details/${id}`);
    }

    public save(User: user): Observable<any>{
        return this.httpClient.post<any>(this.userURL + `create`, User);
    }

    public update(id: number, User: user): Observable<any>{
        return this.httpClient.put<any>(this.userURL + `update/${id}`, User);
    }

    public delete(id: number): Observable<any>{
        return this.httpClient.delete<any>(this.userURL + `delete/${id}`);
    }
}