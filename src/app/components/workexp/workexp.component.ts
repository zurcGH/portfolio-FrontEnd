import { Component, OnInit } from '@angular/core';
import { WorkExp } from 'src/app/model/work-exp';
import { TokenService } from 'src/app/service/token.service';
import { WorkExpService } from 'src/app/service/work-exp.service';

@Component({
  selector: 'app-workexp',
  templateUrl: './workexp.component.html',
  styleUrls: ['./workexp.component.css']
})
export class WorkexpComponent implements OnInit {
  workExp: WorkExp[] = [];
  isLogged = false;
  isAdmin = false;

  constructor(private workExpService: WorkExpService, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.addWorkExp();
    if(this.tokenService.getToken()){
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

  addWorkExp(): void {
    this.workExpService.list().subscribe(data => { this.workExp = data; });
  }
  
  deleteWorkExp(id?: number){
    const response = confirm ("Are you sure u want to delete this work experience?");
    if (response == true) {
      if(id != undefined){
        this.workExpService.delete(id).subscribe(
          data => {
            this.addWorkExp();
          }, err => {
            alert("Couldn't delete WorkExp");
          }
        );
      }
    }
  }
}