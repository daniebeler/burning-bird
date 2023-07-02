import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Account } from 'src/app/models/account';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  acct: any = ''
  account: Account | null = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.acct = this.activatedRoute.snapshot.paramMap.get('acct');

    this.apiService.getAccount(this.acct).subscribe(account => {
      console.log(account)
      this.account = account;
    })
  }

}
