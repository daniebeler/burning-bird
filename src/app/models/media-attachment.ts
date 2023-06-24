import { SafeResourceUrl } from "@angular/platform-browser";
import { Account } from "./account";

export class MediaAttachment {

  public id: number;
  public type: string;
  public url: SafeResourceUrl

  constructor(data?: any) {
    this.id = data?.id;
    this.type = data?.type;
    this.url = data?.url;
  }
}
