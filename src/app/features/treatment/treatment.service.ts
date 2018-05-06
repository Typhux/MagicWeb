import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TreatmentService {

  constructor(private http: HttpClient) { }

  treatEdition(id) {
    return this.http.get('/api/treatment/edition/' + id);
  }

  treatCard(codeName) {
    return this.http.get('/api/treatment/' + codeName);
  }
}
