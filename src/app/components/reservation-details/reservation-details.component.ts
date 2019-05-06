import { Component, OnInit } from '@angular/core';
import { Reservation } from 'src/app/model/Reservation';
import { ReservationServiceService } from '../../services/reservation-service.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-reservation-details',
  templateUrl: './reservation-details.component.html',
  styleUrls: ['./reservation-details.component.css']
})
export class ReservationDetailsComponent implements OnInit {

  reservation: Reservation;
  reservations: Reservation[];

  constructor(private reservationService: ReservationServiceService, private router: Router, private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.getReservationById(parseInt(params.get('reservation_id'), 10));
    });
  }

  public getReservationById(id: number): void {
    this.reservationService.findReservationById(id).subscribe((response) => {
      this.reservation = response; console.log(this.reservation);
      });
    }

  public goBackButtonPressed(): void {
    this.location.back();
  }
  public editButtonPressed(): void {
  this.router.navigateByUrl('/editnewreservation/' + this.reservation.id);
  }
  public deleteButtonPressed(): void {
    this.reservationService.deleteReservationById(this.reservation).subscribe((response) => {
    this.router.navigateByUrl('/reservation');
  }
  );
  }
  public findReservationById(id: number): Reservation {
    for (const reservation of this.reservations) {
      if (reservation.id === id) {
        return reservation;
      }
    }
    return null;
  }

}

