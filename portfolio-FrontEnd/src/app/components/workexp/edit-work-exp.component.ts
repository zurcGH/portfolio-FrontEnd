import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WorkExp } from 'src/app/model/work-exp';
import { WorkExpService } from 'src/app/service/work-exp.service';

@Component({
  selector: 'app-edit-work-exp',
  templateUrl: './edit-work-exp.component.html',
  styleUrls: ['./edit-work-exp.component.css']
})
export class EditWorkExpComponent implements OnInit {
  workExp: WorkExp = null;

  constructor(private workExpService: WorkExpService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.workExpService.detail(id).subscribe(
      data => {
        this.workExp = data;
      }, err => {
        alert("Error modifying WorkExp");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.workExpService.update(id, this.workExp).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error modifying WorkExp");
        this.router.navigate(['']);
      }
    )
  }
}
