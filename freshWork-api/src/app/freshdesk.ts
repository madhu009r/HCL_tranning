import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class Freshdesk {

  private baseUrl = '/freshdesk/api/v2/tickets';
  private apiKey = 'cjI2Ajj4BXNHt48OduwV';

 private headers = new HttpHeaders({
  Authorization: 'Basic ' + btoa(this.apiKey + ':X'),
  'Content-Type': 'application/json'
});



  constructor(private http: HttpClient) {}

  getTickets() {
    return this.http.get(this.baseUrl, { headers: this.headers });
  }

  // ✅ GET SINGLE TICKET (FULL DETAILS)
  getTicketById(id: number) {
    return this.http.get(`${this.baseUrl}/${id}`, {
      headers: this.headers
    });
  }

  // CREATE
  createTicket(data: any) {
    return this.http.post(this.baseUrl, data, { headers: this.headers });
  }

  // UPDATE
  updateTicket(id: number, data: any) {
    return this.http.put(`${this.baseUrl}/${id}`, data, {
      headers: this.headers
    });
  }

  // DELETE
  deleteTicket(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`, {
      headers: this.headers
    });
  }
}

