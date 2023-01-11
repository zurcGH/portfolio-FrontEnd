import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/service/skills.service';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})
export class NewSkillComponent implements OnInit {
  skill: string;
  percentage: number;

  constructor(private skillsService: SkillsService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const skills = new Skills(this.skill, this.percentage);
    this.skillsService.save(skills).subscribe(
      data => {
        alert("Skill added succesfully");
        this.router.navigate(['']);
      }, err =>{
        alert("Failed");
        this.router.navigate(['']);
      }
    )
  }
}