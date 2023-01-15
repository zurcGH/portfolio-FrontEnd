import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Projects } from 'src/app/model/projects';
import { ImageService } from 'src/app/service/image.service';
import { ProjectsService } from 'src/app/service/projects.service';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {
  projectName: string = '';
  projectInfo: string = '';
  projectDate: string = '';
  projectSource: string = '';
  projectImg: string = '';

  constructor(private projectsService: ProjectsService, private router: Router, public projectImageService: ImageService) { }

  ngOnInit(): void {
    this.projectImageService.clearUrl();
  }

  onCreate(): void {
    this.projectImg = this.projectImageService.url;
    const projects = new Projects(this.projectName, this.projectInfo, this.projectDate, this.projectSource, this.projectImg);
    this.projectsService.save(projects).subscribe(
      data => {
        alert("Project added succesfully");
        this.router.navigate(['']);
      }, err => {
        alert("Failed");
        this.router.navigate(['']);
      }
    );
  }

  uploadImage($event:any) {
    const folder = "projectImg"
    this.projectImageService.uploadImage($event, folder);
  }
}