import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Edition } from '../../../../model/edition';
import { EditionService } from '../edition.service';

@Component({
  selector: 'app-edition-details',
  templateUrl: './edition-details.component.html',
  styleUrls: ['./edition-details.component.scss']
})

export class EditionDetailsComponent implements OnInit {

  edition: Edition;
  private id: number;

  constructor(private editionService: EditionService, private activatedRoute: ActivatedRoute, private router: Router) {

   }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.editionService.getEdition(this.id).subscribe(response => {
        this.edition = <any>response;
      });
    });
  }

    deleteEdition() {
      if (confirm('Are you sure to delete this edition ?')) {
        this.editionService.deleteEdition(this.id).subscribe(response => {
        this.router.navigateByUrl('edition');
        });
    }
    }
}

