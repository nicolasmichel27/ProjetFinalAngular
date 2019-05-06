import { Component, OnInit } from '@angular/core';
import { Client } from '../../model/Client';
import { Router } from '@angular/router';
import { ClientServiceService } from '../../services/client-service.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent {

clients: Client[];
client_in_progress: Client;

constructor(private router: Router, private clientService: ClientServiceService) {
this.client_in_progress = Client.createBlank();
this.getAllClients();

}


public addClientClicked() {
  console.log(JSON.stringify(this.client_in_progress, null, 2));
  this.clients.unshift(this.client_in_progress);
  this.client_in_progress = Client.createBlank();
}
public addNewClientPressed(): void {
  this.router.navigateByUrl('/editnewclient');
}
public userClickedOnClient(client_id): void {
  this.router.navigateByUrl('/client/' + client_id);
}
public getAllClients(): void {
  this.clientService.getAllClients().subscribe((response) => {
    this.clients = response;
    console.log(this.clients);
  });

}
}
