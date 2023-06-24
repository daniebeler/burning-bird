import { Adapter } from "./adapter";
import { Post } from "../models/post";
import { Injectable } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { AccountAdapter } from "./account-adapter";
import { MediaAttachmentAdapter } from "./media-attachment-adapter";
import { MediaAttachment } from "../models/media-attachment";

@Injectable({
  providedIn: 'root',
})

export class PostAdapter implements Adapter<Post> {

  constructor(
    private domSanitizer: DomSanitizer,
    private accountAdapter: AccountAdapter,
    private mediaAttachmentAdapter: MediaAttachmentAdapter
  ) { }

  adapt(item: any): Post {
    item.created_at = new Date(item.created_at);
    item.content = this.domSanitizer.bypassSecurityTrustHtml(item.content);
    item.account = this.accountAdapter.adapt(item.account);
    let attachments: MediaAttachment[] = [];

    item.media_attachments.forEach((attachment: any) => {
      attachments.push(this.mediaAttachmentAdapter.adapt(attachment))
    });

    item.media_attachments = attachments;
    return new Post(item);
  }
}
