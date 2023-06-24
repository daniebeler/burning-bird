import { Adapter } from "./adapter";
import { Injectable } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { Account } from "../models/account";

@Injectable({
  providedIn: 'root',
})

export class AccountAdapter implements Adapter<Account> {

  constructor(private domSanitizer: DomSanitizer) { }

  adapt(item: any): Account {
    item.avatar = this.domSanitizer.bypassSecurityTrustResourceUrl(item.avatar);
    return new Account(item);
  }
}
