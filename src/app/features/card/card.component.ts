import { Component, OnInit } from '@angular/core';
import { Card } from '../../../model/card';
import { CardService } from './card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  cards: Card[];

  constructor(private cardService: CardService) { }

  ngOnInit() {
    this.cardService.getCards().subscribe(response => {
      this.cards = <any>response;
    });
  }

}
