import { Component, OnInit } from '@angular/core';
import { EditionService } from '../../service/edition.service';
import { Edition } from '../../../model/edition';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edition-details',
  templateUrl: './edition-details.component.html',
  styleUrls: ['./edition-details.component.scss']
})

export class EditionDetailsComponent implements OnInit {

  edition: Edition;
  private id: number;

  constructor(private editionService: EditionService, private activatedRoute: ActivatedRoute, private router: Router) {
    activatedRoute.params.subscribe(params => {
      this.id = params['id'];
    });
   }

  ngOnInit() {
    this.editionService.getEdition(this.id).subscribe(response => {
      this.edition = <any>response;
    });
  }

    deleteEdition() {
      this.editionService.deleteEdition(this.id).subscribe(response => {
      this.router.navigateByUrl('edition');
      });
    }
}

