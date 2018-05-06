import { Component, OnInit } from '@angular/core';
import { TreatmentService } from './treatment.service';

@Component({
  selector: 'app-treatment',
  templateUrl: './treatment.component.html',
  styleUrls: ['./treatment.component.scss']
})
export class TreatmentComponent {

  public codeName = '';

  constructor(private treatmentService: TreatmentService) { }

  treatCodeName() {
   this.treatmentService.treatCard(this.codeName);
  }

  treatAll(editionId) {
    this.treatmentService.treatEdition(editionId);
  }

}
