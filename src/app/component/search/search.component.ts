import { Component, OnInit } from '@angular/core';
import { Edition } from '../../../model/edition';
import { Card } from '../../../model/card';
import { CardService } from '../../service/card.service';
import { EditionService } from '../../service/edition.service';
import { SearchService } from '../../service/search.service';
import { QueryCard } from '../../../model/queryCard';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  query: QueryCard;
  types: any[];
  rarities: any[];
  editions: Edition[];
  results: Card[];

  constructor(private editionService: EditionService,
    private cardService: CardService,
    private searchService: SearchService) { }

  ngOnInit() {

    this.query = new QueryCard();

    this.cardService.getTypes().subscribe(response => {
      this.types = <any>response;
    });

    this.cardService.getRarities().subscribe(response => {
      this.rarities = <any>response;
    });

    this.editionService.getEditions().subscribe(response => {
      this.editions = <any>response;
    });
  }

  search() {
    this.searchService.executeQuery(this.query).subscribe(response => {
      this.results = <any>response;
      console.log(this.results);
    });
  }

  reset() {
    this.query = new QueryCard();
    this.results = [];
  }

}
