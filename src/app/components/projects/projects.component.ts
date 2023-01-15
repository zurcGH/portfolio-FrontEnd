import { Component, OnInit } from '@angular/core';
import { Projects } from 'src/app/model/projects';
import { ProjectsService } from 'src/app/service/projects.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Projects[] = [];

  constructor(private projectsService: ProjectsService, private tokenService: TokenService) { }
  isLogged = false;
  isAdmin = false;

  ngOnInit(): void {
    this.addProject();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
    if(this.tokenService.getAuthorities().length == 2) {
      this.isAdmin = true;
    } else {
      this.isAdmin = false;
    }
  }

  addProject(): void {
    this.projectsService.list().subscribe(data => {this.projects = data;});
  }

  deleteProject(id?: number) {
    const response = confirm ("Are you sure u want to delete this project?");
    if (response == true){
      if (id != undefined) {
        this.projectsService.delete(id).subscribe(
          data => {
            this.addProject();
          }, err => {
            alert("Couldn't delete project");
          }
        )
        alert("Project deleted succesfully");
      }
    }
  }
}