import { Component, OnInit } from '@angular/core';
import { provideProtractorTestingSupport } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { WorkExp } from 'src/app/model/work-exp';
import { ImageService } from 'src/app/service/image.service';
import { WorkExpService } from 'src/app/service/work-exp.service';

@Component({
  selector: 'app-edit-work-exp',
  templateUrl: './edit-work-exp.component.html',
  styleUrls: ['./edit-work-exp.component.css']
})
export class EditWorkExpComponent implements OnInit {
  workExp: WorkExp = null;

  constructor(private workExpService: WorkExpService, private activatedRoute: ActivatedRoute, private router: Router, public workExpImageService: ImageService) { }

  ngOnInit(): void {
    this.workExpImageService.clearUrl();
    const id = this.activatedRoute.snapshot.params['id'];
    this.workExpService.details(id).subscribe(
      data => {
        this.workExp = data;
      }, err => {
        alert("Error modifying WorkExp");
        this.router.navigate(['']);
      }
    );
  }

  onUpdate(): void{
    const id = this.activatedRoute.snapshot.params['id'];
    if (this.workExpImageService.url != "") {
      this.workExp.workImg = this.workExpImageService.url;
    }
    this.workExpService.update(id, this.workExp).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error modifying WorkExp");
        this.router.navigate(['']);
      }
    );
  }

  uploadImage ($event: any) {
    const folder = "workExpImg";
    this.workExpImageService.uploadImage($event, folder);
  }
}
