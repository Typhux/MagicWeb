import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Edition } from '../../../../model/edition';
import { EditionService } from '../edition.service';

@Component({
  selector: 'app-new-edition',
  templateUrl: './new-edition.component.html',
  styleUrls: ['./new-edition.component.scss']
})
export class NewEditionComponent {
  edition = new Edition();

  constructor(private router: Router, private editionService: EditionService) {}

  createEdition() {
    this.editionService.updateEdition(this.edition).subscribe(() => {
      this.router.navigateByUrl('edition');
    });

  }
}
