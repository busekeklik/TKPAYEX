import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpportunityService {
  private jsonUrl = 'assets/opportunities.json';

  constructor(private http: HttpClient) {}

  getOpportunities(): Observable<any> {
    return this.http.get<any>(this.jsonUrl);
  }
}
