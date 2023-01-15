import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Projects } from 'src/app/model/projects';
import { ImageService } from 'src/app/service/image.service';
import { ProjectsService } from 'src/app/service/projects.service';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit {
  projects: Projects = null;

  constructor(private projectsService: ProjectsService, private activatedRoute: ActivatedRoute, private router: Router, public projectImageService: ImageService) { }

  ngOnInit(): void {
    this.projectImageService.clearUrl();
    const id = this.activatedRoute.snapshot.params['id'];
    this.projectsService.details(id).subscribe(
      data => {
        this.projects = data;
      }, err => {
        alert("Error modifying Project");
        this.router.navigate(['']);
      }
    );
  }

  onUpdate(): void {
    this.projectImageService.clearUrl();
    const id = this.activatedRoute.snapshot.params['id'];
    if(this.projectImageService.url != "") {
      this.projects.projectImg = this.projectImageService.url;
    }
    this.projectsService.update(id, this.projects).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error modifying Project");
        this.router.navigate(['']);
      }
    );
  }

  uploadImage($event: any) {
    const folder = "projectImg"
    this.projectImageService.uploadImage($event, folder);

  }

  cancel(): void {
    this.projectImageService.clearUrl();
    this.router.navigate(['']);
  }
}