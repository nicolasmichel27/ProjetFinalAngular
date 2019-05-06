import { Component, OnInit } from '@angular/core';
import { Client } from '../../model/Client';
import { Reservation } from 'src/app/model/Reservation';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ReservationServiceService } from '../../services/reservation-service.service';
import { ClientServiceService } from '../../services/client-service.service';

@Component({
  selector: 'app-edit-new-reservation',
  templateUrl: './edit-new-reservation.component.html',
  styleUrls: ['./edit-new-reservation.component.css']
})
export class EditNewReservationComponent implements OnInit {

  client_in_progress: Client;
  reservation_in_progress: Reservation;
  mode_access: string;


  constructor(private clientService: ClientServiceService,
              private router: Router, private route: ActivatedRoute, private reservationService: ReservationServiceService) { }

  ngOnInit() {

    this.route.paramMap.subscribe((params: ParamMap) => {
      if (params.get('reservation_id') != null) {
        console.log(params.get('reservation_id'));
        this.mode_access = 'MODIFICATION';
        this.reservationService.findReservationById(parseInt(params.get('reservation_id'), 10)).subscribe(
          (response) => {
            this.reservation_in_progress = response;
          }
        );

      } else {
        this.mode_access = 'AJOUT';
        this.reservation_in_progress = Reservation.createBlank();
        this.clientService.findClientById(1).subscribe(
          (data) => {
            this.reservation_in_progress.client = data;
          }
        );
        console.log('good');
      }
    });
  }
  public updateReservation(reservation: Reservation): void {
    this.reservationService.updateReservation(this.reservation_in_progress).subscribe((response) => {
      this.router.navigateByUrl('/reservation');
    });
  }
  public addReservation(reservation: Reservation): void {
          //appel webservice getActivityBy nom

//reservation.activite = resultat du webservice
    this.reservationService.createReservation(this.reservation_in_progress).subscribe((response) => {
      this.router.navigateByUrl('/reservation');
    });
  }
  public addUpdateReservationClicked(): void {
    if (this.mode_access === 'MODIFICATION') {
      this.updateReservation(this.reservation_in_progress);
    } else {
      this.addReservation(this.reservation_in_progress);
    }
  }

}

