export class QueryCard {

  public title: string;
  public type: number;
  public minBlueMana: number;
  public maxBlueMana: number;
  public minGreenMana: number;
  public maxGreenMana: number;
  public minWhiteMana: number;
  public maxWhiteMana: number;
  public minBlackMana: number;
  public maxBlackMana: number;
  public minRedMana: number;
  public maxRedMana: number;
  public minNeutralMana: number;
  public maxNeutralMana: number;
  public levelCard:  number;
  public rarity: number;
  public editionId: number;

  constructor() {
    this.minBlueMana = null;
    this.maxBlueMana = null;
    this.minGreenMana = null;
    this.maxGreenMana = null;
    this.minWhiteMana = null;
    this.maxWhiteMana = null;
    this.minBlackMana = null;
    this.maxBlackMana = null;
    this.minRedMana = null;
    this.maxRedMana = null;
    this.minNeutralMana = null;
    this.maxNeutralMana = null;
    this.levelCard = null;
  }
}
