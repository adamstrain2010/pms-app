import { Component, OnInit } from '@angular/core';
import { AvailabilityGridRequest } from '../availability-grid.model';
import * as AvailabilityGridActions from '../availability-grid.actions';
import { Store } from '@ngrx/store';
import { AvailabilityGridState } from '../availability-grid.state';
import { IfStmt } from '@angular/compiler';

@Component({
  selector: 'app-availability-toolbar',
  templateUrl: './availability-toolbar.component.html',
  styleUrls: ['./availability-toolbar.component.scss']
})
export class AvailabilityToolbarComponent implements OnInit {
  fromDate: Date;
  toDate: Date;

  constructor( private store: Store<{ roomAvailability: AvailabilityGridState }> ) { }

  ngOnInit(): void {
  }

  showFromDate = () => {
    console.log(this.fromDate);
    console.log(this.toDate);
  }

  showAvailability = () => {
    let availabilityRequest: AvailabilityGridRequest = {fromDate: new Date(this.fromDate), toDate: new Date(this.toDate)};
    this.store.dispatch(AvailabilityGridActions.beginGetAvailabilityByDateRange({payload: availabilityRequest}))
  }

  setAvailability = () => {
    // if (type == 'from') this.fromDate = new Date(date);
    // if (type == 'to') this.toDate = new Date(date);

    
    if(this.fromDate != undefined && this.toDate != undefined){
      var differenceInTime = new Date(this.toDate).getTime() - new Date(this.fromDate).getTime();
      var differenceInDays = differenceInTime / (1000 * 3600 * 24);
      if(differenceInDays < 22){
        this.showAvailability();
      }
    }
    

    // alert()
  }
}
