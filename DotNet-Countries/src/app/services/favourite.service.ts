import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FavouriteService {

  private apiUrl = 'http://localhost:5145/api/favourite';

  constructor(private http: HttpClient) {}

  addFavourite(data: any) {
    return this.http.post(this.apiUrl, data);
  }

  getUserFavourites(userId: number) {
    return this.http.get<any[]>(`${this.apiUrl}/${userId}`);
  }
}
