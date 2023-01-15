import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { user } from 'src/app/model/user.model';
import { ImageService } from 'src/app/service/image.service';
import { UserService } from 'src/app/service/user.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-edit-about',
  templateUrl: './edit-about.component.html',
  styleUrls: ['./edit-about.component.css']
})
export class EditAboutComponent implements OnInit {
  User: user = null;
  isLogged = false;
  isAdmin = false;

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute, private router: Router, public imageService: ImageService, private tokenService: TokenService) { }   

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
    if(this.tokenService.getAuthorities().length == 2) {
      this.isAdmin = true;
    } else {
      this.isAdmin = false;
    }

    this.imageService.clearUrl();

    this.userService.details(id).subscribe(
      data => {
        this.User = data;
      }, err => {
        alert("Error modifying user");
        this.router.navigate(['']);
      }
    );
  }

  onUpdate():void {
    const id = this.activatedRoute.snapshot.params['id'];
    if(this.imageService.url != "") {
      this.User.img = this.imageService.url;
    }
    this.userService.update(id, this.User).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error modifying user");
        this.router.navigate(['']);
      }
    );
  }

  uploadImage($event:any) {
    const folder = "userImg";
    this.imageService.uploadImage($event, folder);
  }
}