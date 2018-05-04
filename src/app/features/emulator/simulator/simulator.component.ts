import { Component, Input, OnChanges } from '@angular/core';
import { Card } from '../../../../model/card';
import { EmulatorService } from '../emulator.service';

@Component({
  selector: 'app-simulator',
  templateUrl: './simulator.component.html',
  styleUrls: ['./simulator.component.scss']
})
export class SimulatorComponent implements OnChanges {
@Input() card: Card;

round = 0;
log: string;

  constructor(private emulatorService: EmulatorService) { }

  ngOnChanges() {
    if (this.round == 0) {
      if (this.card.title) {
        this.round = 1;
        this.emulatorService.emulateMech(this.card, this.round).subscribe(response => {
        const data = <any>response;
        this.log = data.log;
        });
      } else {
        this.log = '';
        this.round = 0;
      }
    } else {
      this.emulatorService.emulateMech(this.card, this.round).subscribe(response => {

      });
    }
  }
}
