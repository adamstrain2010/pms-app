import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from '@ngrx/store';
import { Observable, of } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";
import * as LoginActions from './login.actions';
import { Login } from './login.model';
import { User } from './../../models/user.model';

@Injectable()
export class LoginEffects {
    constructor(private _http: HttpClient, private action$: Actions){}

    private BaseApiUrl: string = 'http://localhost:4000/api';

    TryLogin: Observable<Action> = createEffect(() => {
        console.log("doing it");
        return this.action$.pipe(
            ofType(LoginActions.tryLogin),
            mergeMap(action => 
                this._http.post(`${this.BaseApiUrl}/TryLogin`, action.payload).pipe(
                    map((data:any) => {
                        console.log(data);
                        return LoginActions.successTryLogin()
                    })
                )
            )
        )
    })
}