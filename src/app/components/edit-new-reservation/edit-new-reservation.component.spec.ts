import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNewReservationComponent } from './edit-new-reservation.component';

describe('EditNewReservationComponent', () => {
  let component: EditNewReservationComponent;
  let fixture: ComponentFixture<EditNewReservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditNewReservationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditNewReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
