import { Component, OnInit } from '@angular/core';
import { UserService } from '../../04-services-http-module/user.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  public welcome: string;

  constructor(private userService: UserService) { }


  ngOnInit(): void {
    this.welcome = this.userService.isLoggedIn ? 'Welcome, ' + this.userService.user.name : 'Please log in.';
  }

}
