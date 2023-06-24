import { Adapter } from "./adapter";
import { Post } from "../models/post";
import { Injectable } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

@Injectable({
  providedIn: 'root',
})

export class PostAdapter implements Adapter<Post> {

  constructor(private domSanitizer: DomSanitizer) { }

  adapt(item: any): Post {
    item.created_at = new Date(item.created_at);
    item.content = this.domSanitizer.bypassSecurityTrustHtml(item.content);
    return new Post(item);
  }
}
