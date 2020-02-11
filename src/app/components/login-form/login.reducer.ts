import { Action, createReducer, on } from '@ngrx/store';
import * as LoginActions from './login.actions';
import { Login } from './login.model'; 
import { LoginState } from './login.state';
import { Router } from '@angular/router';

export const initialState = initializeState();

const reducer = createReducer(
    initialState,
    on(LoginActions.getLoginStatus, state => state),
    on(LoginActions.successTryLogin, payload => {
        if(payload.data.validated){
            let router: Router;
            router.navigateByUrl('/availability');
        }
        else{
            alert("NOPE");
        }
    })
)