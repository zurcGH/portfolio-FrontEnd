import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { WorkExp } from "../model/work-exp";

@Injectable ({
    providedIn: 'root'
})
export class WorkExpService {
    workExpURL = 'http://localhost:8080/workexp/'

    constructor(private httpClient: HttpClient) { }

    public list(): Observable<WorkExp[]>{
        return this.httpClient.get<WorkExp[]>(this.workExpURL + 'list');
    }

    public details(id: number):Observable<WorkExp>{
        return this.httpClient.get<WorkExp>(this.workExpURL + `details/${id}`);
    }

    public save(workExp: WorkExp): Observable<any>{
        return this.httpClient.post<any>(this.workExpURL + `create`, workExp);
    }

    public update(id: number, workExp: WorkExp): Observable<any>{
        return this.httpClient.put<any>(this.workExpURL + `update/${id}`, workExp);
    }

    public delete(id: number): Observable<any>{
        return this.httpClient.delete<any>(this.workExpURL + `delete/${id}`);
    }
}