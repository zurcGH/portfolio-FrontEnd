import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Studies } from 'src/app/model/studies';
import { ImageService } from 'src/app/service/image.service';
import { StudiesService } from 'src/app/service/studies.service';

@Component({
  selector: 'app-new-study',
  templateUrl: './new-study.component.html',
  styleUrls: ['./new-study.component.css']
})
export class NewStudyComponent implements OnInit {
  studyName: string = '';
  studyInfo: string = '';
  studyDate: string = '';
  studyImg: string = '';
  
  constructor(private studiesService: StudiesService, private router: Router, public studiesImageService: ImageService) { }

  ngOnInit(): void {
    this.studiesImageService.clearUrl();
  }

  onCreate(): void {
    this.studyImg = this.studiesImageService.url;
    const studies = new Studies(this.studyName, this.studyInfo, this.studyDate, this.studyImg);
    this.studiesService.save(studies).subscribe(
    data => {
      alert("Studies added succesfully");
      this.router.navigate(['']);
    }, err =>{
      alert("Failed");
      this.router.navigate(['']);
    });
  }

  uploadImage($token: any) {
    const folder = "studyImg";
    this.studiesImageService.uploadImage($token, folder);
  }
}
