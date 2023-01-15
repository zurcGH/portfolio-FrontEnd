import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Projects } from "../model/projects";

@Injectable ({
    providedIn: 'root'
})
export class ProjectsService {
    projectsURL = environment.URL + '/project/';

    constructor(private httpClient: HttpClient) { }

    public list(): Observable<Projects[]>{
        return this.httpClient.get<Projects[]>(this.projectsURL + 'list');
    }

    public details(id: number):Observable<Projects>{
        return this.httpClient.get<Projects>(this.projectsURL + `details/${id}`);
    }

    public save(projects: Projects): Observable<any>{
        return this.httpClient.post<any>(this.projectsURL + `create`, projects);
    }

    public update(id: number, projects: Projects): Observable<any>{
        return this.httpClient.put<any>(this.projectsURL + `update/${id}`, projects);
    }

    public delete(id: number): Observable<any>{
        return this.httpClient.delete<any>(this.projectsURL + `delete/${id}`);
    }
}