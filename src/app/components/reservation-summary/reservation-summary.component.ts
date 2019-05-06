import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Reservation } from '../../model/Reservation';

@Component({
  selector: 'app-reservation-summary',
  templateUrl: './reservation-summary.component.html',
  styleUrls: ['./reservation-summary.component.css']
})
export class ReservationSummaryComponent  {
  @Input()
  reservation: Reservation;

  @Output()
  userClick: EventEmitter<number> = new EventEmitter();
  constructor() { }

  userClicked() {
    this.userClick.emit(this.reservation.id);


}
}
