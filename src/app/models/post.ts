import { Account } from "./account";
import { MediaAttachment } from "./media-attachment";

export class Post {

  public id: number;
  public content: any;
  public account: Account;
  public media_attachments: MediaAttachment[];

  constructor(data?: any) {
    this.id = data?.id;
    this.content = data?.content;
    this.account = data?.account;
    this.media_attachments = data?.media_attachments;
  }
}
