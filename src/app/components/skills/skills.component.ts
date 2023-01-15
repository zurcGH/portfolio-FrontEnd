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
  isAdmin = false;
  
  ngOnInit(): void {
    this.addSkill();
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

  addSkill(): void{
    this.skillsService.list().subscribe(data => { this.skills = data; });
  }

  deleteSkill(id: number){
    const response = confirm ("Are you sure u want to delete this skill?");
    if (response == true) {
      if(id != undefined){
        this.skillsService.delete(id).subscribe(
          data => {
            this.addSkill();
          }, err => {
            alert("Couldn't delete skill");
          }
        );
        alert("Skill deleted succesfully");
      }
    }
  }
}