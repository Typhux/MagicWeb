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

  card = new Card();
  types: any[];
  rarities: any[];
  editions: Edition[];
  id: number;
  edition: Edition;

  constructor(private editionService: EditionService,
      private cardService: CardService,
      private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
    this.cardService.getTypes().subscribe(response => {
      this.types = <any>response;
      this.card.type = this.types[0].id;
    });

    this.cardService.getRarities().subscribe(response => {
      this.rarities = <any>response;
      this.card.rarity = this.rarities[0].id;
    });

    this.editionService.getEditions().subscribe(response => {
      this.editions = <any>response;
      if (this.id) {
        const editionIndex = this.editions.findIndex(e => e.id == this.id);
        this.edition = this.editions[editionIndex];
        this.card.editionId = this.edition.id;
      } else {
        this.card.editionId = this.editions[0].id;
      }
    });

  });
  }

  createCard() {
    this.cardService.updateCard(this.card).subscribe(() => {
      this.router.navigateByUrl('card');
    });
  }

}
