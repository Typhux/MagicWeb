import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { QueryCard } from '../../../model/queryCard';

@Injectable()
export class SearchService {

  constructor(private http: HttpClient) { }


  executeQuery(query: QueryCard) {
    return this.http.post('/api/search/', query);
  }

  getCardByCodeName(query: string) {
    return this.http.get('/api/search/' + query);
  }
}
