import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Card } from '../../../model/card';

@Injectable()
export class CardService {

  constructor(private http: HttpClient) { }

  updateCard(card: Card) {
    return this.http.post('/api/card', card);
  }

  getCards() {
    return this.http.get('/api/card');
  }

  getCard(id: number) {
    return this.http.get('/api/card/' + id);
  }

  deleteCard(id: number) {
    return this.http.delete('/api/card/' + id);
  }

  getTypes() {
    return this.http.get('/api/type');
  }

  getType(id: number) {
    return this.http.get('/api/type/' + id);
  }

  getRarities() {
    return this.http.get('/api/rarity');
  }

  getRarity(id: number) {
    return this.http.get('/api/rarity/' + id);
  }
}
