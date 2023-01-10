import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WorkExp } from 'src/app/model/work-exp';
import { WorkExpService } from 'src/app/service/work-exp.service';

@Component({
  selector: 'app-new-work-exp',
  templateUrl: './new-work-exp.component.html',
  styleUrls: ['./new-work-exp.component.css']
})
export class NewWorkExpComponent implements OnInit {
  workName: string = '';
  workInfo: string = '';
  
  constructor(private workExpService: WorkExpService, private router: Router) { }

  ngOnInit(): void {
    
  }

  onCreate(): void {
    const workExp = new WorkExp(this.workName, this.workInfo);
    this.workExpService.save(workExp).subscribe(
    data => {
      alert("WorkExp added succesfully");
      this.router.navigate(['']);
    }, err =>{
      alert("Failed");
      this.router.navigate(['']);
    });
  }
}
