import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Freshdesk } from './freshdesk';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html'
})
export class App implements OnInit{

  tickets: any[] = [];

  newTicket = {
    email: '',
    subject: '',
    description: '',
    priority: 1,
    status: 2
  };

  constructor(private fd: Freshdesk) {}

ngOnInit() {
    this.loadTickets();
  }

loadTickets() {
    this.fd.getTickets().subscribe(res => {
      this.tickets = res as any[];
    });
  }

  createTicket() {
    this.fd.createTicket(this.newTicket).subscribe(() => {
      this.loadTickets();
      this.newTicket = {
        email: '',
        subject: '',
        description: '',
        priority: 1,
        status: 2
      };
    });
  }


  updateTicket() {
  if (!this.selectedTicket) return;

  const id = this.selectedTicket.id;

  const updatePayload = {
    subject: this.selectedTicket.subject,
    priority: this.selectedTicket.priority,
    status: this.selectedTicket.status
  };

  this.fd.updateTicket(id, updatePayload)
    .subscribe(() => {
      this.selectedTicket = null;
      this.loadTickets();
    });
}

   updatePriority(id: number) {
    this.fd.updateTicket(id, { priority: 3 })
      .subscribe(() => this.loadTickets());
  }

  deleteTicket(id: number) {
    this.fd.deleteTicket(id)
      .subscribe(() => this.loadTickets());
  }
  //protected readonly title = signal('freshWork-api');
}
