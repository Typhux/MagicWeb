import { Component, OnInit } from '@angular/core';
import { Card } from '../../../model/card';
import { CardService } from '../../service/card.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EditionService } from '../../service/edition.service';
import { Edition } from '../../../model/edition';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss']
})
export class CardDetailsComponent implements OnInit {

  id: number;
  card: Card;
  type: any;
  rarity: any;
  edition: Edition;

  constructor(private cardService: CardService,
    private editionService: EditionService,
     private activatedRoute: ActivatedRoute,
      private router: Router) {
   }

  ngOnInit() {
    // Refacto todo here
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.cardService.getCard(this.id).subscribe(response => {
        this.card = <any>response;
        this.editionService.getEdition(this.card.editionId).subscribe(edition => {
          this.edition = <any>edition;
        });
        this.cardService.getType(this.card.type).subscribe(type => {
          this.type = <any>type;
        });
        this.cardService.getRarity(this.card.rarity).subscribe(rarity => {
          this.rarity = <any>rarity;
        });
      });
    });
  }

    deleteCard() {
      if (confirm('Are you to delete this Card ?')) {
        this.cardService.deleteCard(this.id).subscribe(response => {
          this.router.navigateByUrl('card');
      });
    }
    }
  }
