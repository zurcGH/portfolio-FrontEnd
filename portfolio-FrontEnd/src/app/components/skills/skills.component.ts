import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/service/skills.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills: Skills[] = [];

  constructor(private skillsService: SkillsService, private tokenService: TokenService) { }
 
  isLogged = false;
  
  ngOnInit(): void {
    this.addSkill();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  addSkill(): void{
    this.skillsService.list().subscribe(
      data => {
        this.skills = data;
      }
    );
  }

  deleteSkill(id: number){
    if(id != undefined){
      this.skillsService.delete(id).subscribe(
        data => {
          this.addSkill();
        }, err => {
          alert("Couldn't delete skill");
        }
      );
    }
  }
}