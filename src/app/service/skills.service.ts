import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Skills } from "../model/skills";

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
    SkillsURL = 'http://localhost:8080/skill/'
  
    constructor(private httpClient: HttpClient) { }

    public list(): Observable<Skills[]>{
        return this.httpClient.get<Skills[]>(this.SkillsURL + 'list');
    }

    public details(id: number): Observable<Skills>{
        return this.httpClient.get<Skills>(this.SkillsURL + `details/${id}`);
    }

    public save(skills: Skills): Observable<any>{
        return this.httpClient.post<any>(this.SkillsURL + 'create', skills);
    }

    public update(id: number, skills: Skills): Observable<any>{
        return this.httpClient.put<any>(this.SkillsURL + `update/${id}`, skills);
    }

    public delete(id: number): Observable<any>{
        return this.httpClient.delete<any>(this.SkillsURL + `delete/${id}`);
    }
}