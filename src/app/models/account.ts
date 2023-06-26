import { SafeResourceUrl } from "@angular/platform-browser";

export class Account {

  public id: number;
  public username: string;
  public display_name: string;
  public acct: string;
  public avatar: SafeResourceUrl;

  constructor(data?: any) {
    this.id = data?.id;
    this.username = data?.username;
    this.display_name = data?.display_name;
    this.acct = data?.acct;
    this.avatar = data?.avatar;
  }
}
