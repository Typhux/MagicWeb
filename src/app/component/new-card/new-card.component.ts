import { Component, OnInit } from '@angular/core';
import { Card } from '../../../model/card';
import { EditionService } from '../../service/edition.service';
import { CardService } from '../../service/card.service';
import { Edition } from '../../../model/edition';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-card',
  templateUrl: './new-card.component.html',
  styleUrls: ['./new-card.component.scss']
})
export class NewCardComponent implements OnInit {

  card: Card;
  types: any[];
  rarities: any[];
  editions: Edition[];
  id: number;
  edition: Edition;
  cardId: number;

  constructor(private editionService: EditionService,
      private cardService: CardService,
      private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.cardId = params['cardId'];

      if (this.cardId) {
        this.cardService.getCard(this.cardId).subscribe(response => {
          this.card = <any>response;
        });
      } else {
        this.card = new Card();
      }

    this.cardService.getTypes().subscribe(response => {
      this.types = <any>response;

      if (!this.cardId) {
        this.card.type = this.types[0].id;
      }
    });

    this.cardService.getRarities().subscribe(response => {
      this.rarities = <any>response;

      if (!this.cardId) {
        this.card.rarity = this.rarities[0].id;
      }
    });

    this.editionService.getEditions().subscribe(response => {
      this.editions = <any>response;
      if (this.id) {
        this.edition = this.getEdition(this.id);
        this.card.editionId = this.edition.id;
      } else if (this.cardId) {
        this.edition = this.getEdition(this.id);
      } else {
        this.card.editionId = this.editions[0].id;
      }
    });
  });
  }

  private getEdition(id: number) {
    const editionIndex = this.editions.findIndex(e => e.id == this.id);
    return this.editions[editionIndex];
  }

  createCard() {
    this.cardService.updateCard(this.card).subscribe(() => {
      if (this.edition) {
        this.router.navigateByUrl('edition/' + this.edition.id);
      } else {
      this.router.navigateByUrl('card');
      }
    });
  }

}
