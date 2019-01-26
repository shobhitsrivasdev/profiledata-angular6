import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetProfileService {

  constructor(private http: HttpClient) {
  }

  public getProfiles(): Observable<any> {
    return this.http.get('../../assets/peoples.json');
  }
}
