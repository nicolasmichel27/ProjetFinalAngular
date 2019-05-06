import { Component,  Input, Output, EventEmitter } from '@angular/core';
import { Client } from '../../model/Client';

@Component({
  selector: 'app-client-summary',
  templateUrl: './client-summary.component.html',
  styleUrls: ['./client-summary.component.css']
})
export class ClientSummaryComponent {
  @Input()
  client: Client;

  @Output()
  userClick: EventEmitter<number> = new EventEmitter();
  constructor() { }
  userClicked() {
    this.userClick.emit(this.client.id);
}
}
