import { Card } from './card';

export class Edition {

  public id: number;
  public title: string;
  public urlLogo: string;
  public cards: Array<Card>;

  constructor() {  }
}
