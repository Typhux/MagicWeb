import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Edition } from '../../model/edition';

@Injectable()
export class EditionService {

  constructor(private http: HttpClient) { }

  updateEdition(edition: Edition) {
    return this.http.post('/api/edition', edition);
  }

  getEditions() {
    return this.http.get('/api/edition');
  }

  getEdition(id: number) {
    return this.http.get('/api/edition/' + id);
  }

  deleteEdition(id: number) {
    return this.http.delete('/api/edition/' + id);
  }
}
