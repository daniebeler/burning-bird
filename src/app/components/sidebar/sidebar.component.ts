import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from 'src/app/models/account';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent  implements OnInit {

  authState: boolean;
  user: Account;

  constructor(
    public router: Router,
    private authService: AuthService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.authService.authenticationState.subscribe(authState => {
      this.authState = authState;
    })

    this.userService.getLatestUser().subscribe(user => {
      this.user = user;
    })
  }

}
