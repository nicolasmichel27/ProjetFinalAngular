import { Component } from '@angular/core';
import { Reservation } from '../../model/Reservation';
import { Router } from '@angular/router';
import { ReservationServiceService } from '../../services/reservation-service.service';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent {


  reservations: Reservation[];
  reservation_in_progress: Reservation;

  constructor(private router: Router, private reservationService: ReservationServiceService) {
    this.reservation_in_progress = Reservation.createBlank();
    this.getAllReservation();

  }

  public addReservationClicked() {
    console.log(JSON.stringify(this.reservation_in_progress, null, 2));
    this.reservations.unshift(this.reservation_in_progress);
    this.reservation_in_progress = Reservation.createBlank();
  }
  public addNewReservationPressed(): void {
    this.router.navigateByUrl('/editnewreservation');
  }
  public userClickedOnReservation(reservation_id): void {
    this.router.navigateByUrl('/reservation/' + reservation_id);
  }
  public getAllReservation(): void {
    this.reservationService.getAllReservations().subscribe((response) => {
      this.reservations = response;
      console.log(this.reservations);
    });

  }
}
