import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WorkExp } from 'src/app/model/work-exp';
import { ImageService } from 'src/app/service/image.service';
import { WorkExpService } from 'src/app/service/work-exp.service';

@Component({
  selector: 'app-new-work-exp',
  templateUrl: './new-work-exp.component.html',
  styleUrls: ['./new-work-exp.component.css']
})
export class NewWorkExpComponent implements OnInit {
  workName: string = '';
  workInfo: string = '';
  workDate: string = '';
  workImg: string = '';
  
  constructor(private workExpService: WorkExpService, private router: Router, public workExpImageService: ImageService) { }

  ngOnInit(): void {
    this.workExpImageService.clearUrl();
  }

  onCreate(): void {
    const workExp = new WorkExp(this.workName, this.workInfo, this.workDate, this.workImg);
    this.workExpService.save(workExp).subscribe(
    data => {
      alert("WorkExp added succesfully");
      this.router.navigate(['']);
    }, err =>{
      alert("Failed");
      this.router.navigate(['']);
    });
  }

  uploadImage($event: any) {
    const folder = "workExpImg";
    this.workExpImageService.uploadImage($event, folder);
  }
}
