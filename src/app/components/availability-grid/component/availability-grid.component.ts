import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import * as AvailabilityGridActions from '../availability-grid.actions';
import { Availability, AvailabilityGridRequest, RoomAvailability } from '../availability-grid.model';
import { AvailabilityGridState } from '../availability-grid.state';

@Component({
  selector: 'app-availability-grid',
  templateUrl: './availability-grid.component.html',
  styleUrls: ['./availability-grid.component.scss']
})

export class AvailabilityGridComponent implements OnInit {

  constructor(private store: Store<{ roomAvailability: AvailabilityGridState }>) {
    var t = store.pipe(select('roomAvailability'));
    console.log(typeof(t));
    
    this.availabilityGrid$ = store.pipe(select('roomAvailability'));
  }

  ngOnInit() {
    this.availabilityGridSubscription = this.availabilityGrid$
      .pipe(
        map(x => {
          this.availabilityGridList = x.roomAvailability;
          this.availabilityGridError = x.roomAvailabilityError;
        })
      )
      .subscribe()

      this.store.dispatch(AvailabilityGridActions.beginGetAvailability());
      console.log(this.availabilityGridList);
  }

  availabilityGrid$: Observable<AvailabilityGridState>;
  availabilityGridSubscription: Subscription;
  availabilityGridList: RoomAvailability[] = [];

  availabilityGridError: Error = null;

  ngOnDestroy() {
    if (this.availabilityGridSubscription) {
      this.availabilityGridSubscription.unsubscribe();
    }
  }

  reloadAvailability = () => {
    this.store.dispatch(AvailabilityGridActions.beginGetAvailability());
    console.log(this.availabilityGridList);
  }

  testAvailability = () => {
    let availabilityRequest: AvailabilityGridRequest = {fromDate: new Date(2020,1,1), toDate: new Date(2020,1,10)};
    console.log(availabilityRequest);
    this.store.dispatch(AvailabilityGridActions.beginGetAvailabilityByDateRange({payload: availabilityRequest}))
  }
}
