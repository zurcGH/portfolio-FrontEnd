import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Studies } from 'src/app/model/studies';
import { StudiesService } from 'src/app/service/studies.service';

@Component({
  selector: 'app-new-study',
  templateUrl: './new-study.component.html',
  styleUrls: ['./new-study.component.css']
})
export class NewStudyComponent implements OnInit {
  studyName: string = '';
  studyInfo: string = '';
  
  constructor(private studiesService: StudiesService, private router: Router) { }

  ngOnInit(): void {
    
  }

  onCreate(): void {
    const studies = new Studies(this.studyName, this.studyInfo);
    this.studiesService.save(studies).subscribe(
    data => {
      alert("Studies added succesfully");
      this.router.navigate(['']);
    }, err =>{
      alert("Failed");
      this.router.navigate(['']);
    });
  }
}
