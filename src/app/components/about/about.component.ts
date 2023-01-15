import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/model/user.model';
import { UserService } from 'src/app/service/user.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  user: user = null;
  isLogged = false;
  isAdmin = false;

  constructor(public userService: UserService, public tokenService: TokenService){}

  ngOnInit(): void {
    this.addUser();
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

  addUser(){
    this.userService.details(1).subscribe(data => {this.user = data;})
  }
}
