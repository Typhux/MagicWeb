import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-log-battle',
  templateUrl: './log-battle.component.html',
  styleUrls: ['./log-battle.component.scss']
})
export class LogBattleComponent implements OnChanges {
  allLog: string[];

  @Input() log: string;

  constructor() {
    this.allLog = [];
   }

  ngOnChanges() {
    if (this.log && this.log !== undefined) {
    this.allLog.push(this.log);
    } else {
      this.allLog = [];
    }
  }
}
