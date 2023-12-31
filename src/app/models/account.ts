import { SafeResourceUrl } from "@angular/platform-browser";

export class Account {

  public id: number;
  public username: string;
  public display_name: string;
  public acct: string;
  public avatar: SafeResourceUrl;
  public banner: SafeResourceUrl;
  public numberOfPosts: number;
  public numberOfFollowers: number;
  public numberOfFollowing: number;
  public note: string;

  constructor(data?: any) {
    this.id = data?.id;
    this.username = data?.username;
    this.display_name = data?.display_name;
    this.acct = data?.acct;
    this.avatar = data?.avatar;
    this.numberOfPosts = data?.statuses_count;
    this.numberOfFollowers = data?.followers_count;
    this.numberOfFollowing = data?.following_count;
    this.note = data?.note;

    const bann: string = data?.header;

    if (bann?.endsWith('missing.png')) {
      this.banner = '';
    } else {
      this.banner = data?.header;
    }
  }
}
