export class QueryCard {

  public title: string;
  public type: number;
  public blueMana: number;
  public greenMana: number;
  public whiteMana: number;
  public blackMana: number;
  public redMana: number;
  public neutralMana: number;
  public levelCard:  number;
  public rarity: number;
  public editionId: number;

  constructor() {
    this.blueMana = null;
    this.greenMana = null;
    this.whiteMana = null;
    this.blackMana = null;
    this.redMana = null;
    this.neutralMana = null;
    this.levelCard = null;
  }
}
