import { Component } from '@angular/core';
import { SearchService } from '../search/search.service';
import { Card } from '../../../model/card';

@Component({
  selector: 'app-emulator',
  templateUrl: './emulator.component.html',
  styleUrls: ['./emulator.component.scss']
})
export class EmulatorComponent {

  codeName: string;
  card: Card;

  constructor(private searchService: SearchService) { }

  emulate() {
    this.card = new Card();
    this.searchService.getCardByCodeName(this.codeName).subscribe(response => {
      this.card = <any>response;
    });
  }

}
