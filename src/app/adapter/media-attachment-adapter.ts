import { Adapter } from "./adapter";
import { Injectable } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { MediaAttachment } from "../models/media-attachment";

@Injectable({
  providedIn: 'root',
})

export class MediaAttachmentAdapter implements Adapter<MediaAttachment> {

  constructor(private domSanitizer: DomSanitizer) { }

  adapt(item: any): MediaAttachment {
    item.url = this.domSanitizer.bypassSecurityTrustResourceUrl(item.url);
    return new MediaAttachment(item);
  }
}
