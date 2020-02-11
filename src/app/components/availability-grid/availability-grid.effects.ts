import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from '@ngrx/store';
import { Observable, of } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";
import * as AvailabilityGridActions from './availability-grid.actions';
import { Availability, AvailabilityGridRequest, RoomAvailability } from './availability-grid.model';

@Injectable()
export class AvailabilityGridEffects {
    constructor(private _http: HttpClient, private action$: Actions){}

    private BaseApiUrl: string = 'http://localhost:4000/api';
    
    GetAvailabilityGrid$: Observable<Action> = createEffect(() => {
        return this.action$.pipe(
            ofType(AvailabilityGridActions.beginGetAvailability),
            mergeMap(action => 
                this._http.get(`${this.BaseApiUrl}/availability/2019-01-01/2019-01-04`).pipe(
                    map((data:any) => {
                        console.log(data);
                        return AvailabilityGridActions.successGetAvailability({ payload: data.data })
                    }),
                    catchError((error: Error) => {
                        return of(AvailabilityGridActions.handleAvailabilityError(error))
                    })
                )
            )
        )
    })

    GetAvailabilityByRangeGrid$: Observable<Action> = createEffect(() => {
        return this.action$.pipe(
            ofType(AvailabilityGridActions.beginGetAvailabilityByDateRange),
            mergeMap(action => 
                this._http.get(`${this.BaseApiUrl}/availability/${action.payload.fromDate}/${action.payload.toDate}`).pipe(
                    map((data:any) => {
                        console.log(data);
                        return AvailabilityGridActions.successGetAvailability({ payload: data.data })
                    }),
                    catchError((error: Error) => {
                        return of(AvailabilityGridActions.handleAvailabilityError(error))
                    })
                )
            )
        )
    })
}
