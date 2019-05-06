import { Component, OnInit } from '@angular/core';
import { Client, Personne } from '../../model/Client';
import { ClientServiceService } from '../../services/client-service.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {

  client: Client;
  clients: Client[];

  constructor(private clientService: ClientServiceService, private router: Router, private route: ActivatedRoute,
              private location: Location) { }


   ngOnInit(): void {

this.route.paramMap.subscribe((params: ParamMap) => {
      this.getClientById(parseInt(params.get('client_id'), 10));
    });
    }
public getClientById(id: number): void {
  this.clientService.findClientById(id).subscribe((response) => {
    this.client = response; console.log(this.client);
    });
  }


public goBackButtonPressed(): void {
  this.location.back();
}
public editButtonPressed(): void {
this.router.navigateByUrl('/editnewclient/' + this.client.id);
}
public deleteButtonPressed(): void {
  this.clientService.deleteClientById(this.client).subscribe((response) => {
  this.router.navigateByUrl('/client');
}
);
}
public findClientById(id: number): Client {
  for (const client of this.clients) {
    if (client.id === id) {
      return client;
    }
  }
  return null;
}
}
