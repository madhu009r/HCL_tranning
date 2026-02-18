import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl = 'https://localhost:7219/api/countries';

  constructor(private http: HttpClient) {}

  getCountries() {
    return this.http.get<any[]>(this.apiUrl);
  }
}
