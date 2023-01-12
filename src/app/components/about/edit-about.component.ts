import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { user } from 'src/app/model/user.model';
import { ImageService } from 'src/app/service/image.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-edit-about',
  templateUrl: './edit-about.component.html',
  styleUrls: ['./edit-about.component.css']
})
export class EditAboutComponent implements OnInit {
  user: user = null;

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService, private router: Router, public imageService: ImageService) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.userService.details(id).subscribe(
      data => {
        this.user = data;
      }, err => {
        alert("Error modifying User");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.user.img = this.imageService.url;
    this.userService.update(id, this.user).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error modifying User");
        this.router.navigate(['']);
      }
    );
  }

  uploadImage($event: any){
    const id = this.activatedRoute.snapshot.params['id'];
    const imgName = "pfp_" + id;
    this.imageService.uploadImage($event, imgName);
  }
}
