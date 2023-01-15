import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { ImageService } from 'src/app/service/image.service';
import { SkillsService } from 'src/app/service/skills.service';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent implements OnInit {
  skills: Skills = null;

  constructor(private skillsService: SkillsService, private activatedRouter: ActivatedRoute, private router: Router, public skillsImageService: ImageService) { }

  ngOnInit(): void {
    this.skillsImageService.clearUrl();
    const id = this.activatedRouter.snapshot.params['id'];
    this.skillsService.details(id).subscribe(
      data => {
        this.skills = data;
      }, err => {
        alert("Error modifying Skills");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(){
    if (this.skillsImageService.url != "") {
      this.skills.skillImg = this.skillsImageService.url;
    }
    const id = this.activatedRouter.snapshot.params['id'];
    this.skillsService.update(id, this.skills).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error modifying Studies");
        this.router.navigate(['']);
      }
    );
  }

  uploadImage($event: any) {
    const folder = "skillImg";
    this.skillsImageService.uploadImage($event, folder);
  }
}