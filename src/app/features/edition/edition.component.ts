import { Component, OnInit } from '@angular/core';
import { Edition } from '../../../model/edition';
import { EditionService } from './edition.service';

@Component({
  selector: 'app-edition',
  templateUrl: './edition.component.html',
  styleUrls: ['./edition.component.scss']
})
export class EditionComponent implements OnInit {

  editions: Edition[];

  constructor(private editionService: EditionService) { }

  ngOnInit() {
    this.editionService.getEditions().subscribe(response => {
      this.editions = <any>response;
    });
  }

}
