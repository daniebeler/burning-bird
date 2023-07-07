import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;

  constructor(
    private apiService: ApiService,
    private storageService: StorageService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.loginForm = new FormGroup({
      server: new FormControl<string | null>('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl<string | null>('', [Validators.required, Validators.email]),
      password: new FormControl<string | null>('', [Validators.required])
    });
  }

  ngOnInit() {

    this.activatedRoute.queryParams.subscribe(params => {
      console.log(params);
      let code = params['code'];
      console.log('Params:', code);

      console.log('Token', this.storageService.getToken())

      if (code && !this.storageService.getToken()) {
        this.apiService.obtainToken(code).subscribe(resul => {
          this.storageService.setToken(resul.access_token)
          console.log('lo', this.storageService.getToken())

          this.apiService.verifyCredentials().subscribe(resp => {
            console.log('Verified', resp)
          })
        })
      }
    }
    );
  }

  startLoginProcess() {
    this.apiService.registerApplication().subscribe((res: JSON) => {
      console.log(res);
      this.storageService.setApplication(JSON.stringify(res));
      this.apiService.authorizeUser()

    })
  }

}
