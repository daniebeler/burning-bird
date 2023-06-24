export class Post {

  public id: number;
  public content: any;

  constructor(data?: any) {
    this.id = data?.id;
    this.content = data?.content;
  }
}
