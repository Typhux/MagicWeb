import { Injectable } from '@angular/core';
import { Card } from '../../../model/card';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EmulatorService {

  constructor(private http: HttpClient) { }

  emulateMech(card: Card, round: number) {
    return this.http.post('/api/mecha/emulate', {card: card, round: round});
  }
}
