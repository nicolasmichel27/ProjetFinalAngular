import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientListComponent } from './components/client-list/client-list.component';
import { EditNewClientComponent } from './components/edit-new-client/edit-new-client.component';
import { ClientSummaryComponent } from './components/client-summary/client-summary.component';
import { ClientDetailsComponent } from './components/client-details/client-details.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { EditNewReservationComponent } from './components/edit-new-reservation/edit-new-reservation.component';
import { ReservationListComponent } from './components/reservation-list/reservation-list.component';
import { ReservationDetailsComponent } from './components/reservation-details/reservation-details.component';
import { ReservationSummaryComponent } from './components/reservation-summary/reservation-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientListComponent,
    EditNewClientComponent,
    ClientSummaryComponent,
    ClientDetailsComponent,
    ReservationListComponent,
    EditNewReservationComponent,
    ReservationSummaryComponent,
    ReservationDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'editnewclient', component: EditNewClientComponent },
      { path: 'client', component: ClientListComponent },
      { path: 'editnewclient/:client_id', component: EditNewClientComponent },
      { path: 'client/:client_id', component: ClientDetailsComponent },
      { path: '', redirectTo: '/client', pathMatch: 'full'  },
      { path: 'editnewreservation', component: EditNewReservationComponent },
      { path: 'reservation', component: ReservationListComponent },
      { path: 'editnewreservation/:reservation_id', component: EditNewReservationComponent },
      { path: 'reservation/:reservation_id', component: ReservationDetailsComponent },
      { path: '', redirectTo: '/reservation', pathMatch: 'full'  },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
 })
export class AppModule { }
