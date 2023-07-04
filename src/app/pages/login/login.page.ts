import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;

  constructor() {
    this.loginForm = new FormGroup({
      server: new FormControl<string | null>('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl<string | null>('', [Validators.required, Validators.email]),
      password: new FormControl<string | null>('', [Validators.required])
    });
   }

  ngOnInit() {
  }

}
