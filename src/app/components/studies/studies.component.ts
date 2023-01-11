import { Component, OnInit } from '@angular/core';
import { Studies } from 'src/app/model/studies';
import { TokenService } from 'src/app/service/token.service';
import { StudiesService } from 'src/app/service/studies.service';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.css']
})
export class StudiesComponent implements OnInit {
  studies: Studies[] = [];

  constructor(private studiesService: StudiesService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.addStudy();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  addStudy(): void {
    this.studiesService.list().subscribe(data => { this.studies = data; });
  }
  
  deleteStudy(id?: number){
    if(id != undefined){
      this.studiesService.delete(id).subscribe(
        data => {
          this.addStudy();
        }, err => {
          alert("Couldn't delete Study");
        }
      )
    }
  }
}