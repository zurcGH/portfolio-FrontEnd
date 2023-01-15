import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Studies } from 'src/app/model/studies';
import { ImageService } from 'src/app/service/image.service';
import { StudiesService } from 'src/app/service/studies.service';

@Component({
  selector: 'app-edit-study',
  templateUrl: './edit-study.component.html',
  styleUrls: ['./edit-study.component.css']
})
export class EditStudyComponent implements OnInit {
  studies: Studies = null;

  constructor(private studiesService: StudiesService, private activatedRoute: ActivatedRoute, private router: Router, public studiesImageService: ImageService) { }

  ngOnInit(): void {
    this.studiesImageService.clearUrl();
    const id = this.activatedRoute.snapshot.params['id'];
    this.studiesService.details(id).subscribe(
      data => {
        this.studies = data;
      }, err => {
        alert("Error modifying Studies");
        this.router.navigate(['']);
      }
    );
  }

  onUpdate(): void{
    if(this.studiesImageService.url != "") {
      this.studies.studyImg = this.studiesImageService.url;
    }
    const id = this.activatedRoute.snapshot.params['id'];
    this.studiesService.update(id, this.studies).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error modifying Studies");
        this.router.navigate(['']);
      }
    );
  }

  uploadImage($event:any) {
    const folder = "studyImg"
    this.studiesImageService.uploadImage($event, folder);
  }
}
