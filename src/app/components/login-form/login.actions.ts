import { createAction, props } from '@ngrx/store';
import { User } from './../../models/user.model';

export const getLoginStatus = createAction(
    '[Login] Get Login Status'
)

export const tryLogin = createAction(
    '[Login] Try Login',
    props<{ payload: User }>()
)

export const beginTryLogin = createAction(
    '[Login] Begin Try Login'
)

export const successTryLogin = createAction(
    '[Login] Successful Try Login',
)