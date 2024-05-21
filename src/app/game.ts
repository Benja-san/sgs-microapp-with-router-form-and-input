export class Game {
  //   constructor(
  //     public title: string,
  //     public img: string,
  //     public description: string
  //   ) {}

  public title: string;
  public img: string;
  public description: string;
  public id: number;

  constructor(id: number, title: string, img: string, description: string) {
    this.id = id;
    this.title = title;
    this.img = img;
    this.description = description;
  }
}
