import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { ImageService } from 'src/app/service/image.service';
import { SkillsService } from 'src/app/service/skills.service';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})
export class NewSkillComponent implements OnInit {
  skill: string;
  percentage: number;
  skillImg: string;

  constructor(private skillsService: SkillsService, private router: Router, public skillsImageService: ImageService) { }

  ngOnInit(): void {
    this.skillsImageService.clearUrl();
  }

  onCreate(): void{
    this.skillImg = this.skillsImageService.url;
    const skills = new Skills(this.skill, this.percentage, this.skillImg);
    this.skillsService.save(skills).subscribe(
      data => {
        alert("Skill added succesfully");
        this.router.navigate(['']);
      }, err =>{
        alert("Failed");
        this.router.navigate(['']);
      }
    );
  }

  uploadImage($event: any) {
    const folder = "skillImg";
    this.skillsImageService.uploadImage($event, folder);
  }
}