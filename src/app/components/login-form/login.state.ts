import { User } from '../../models/user.model';
import { State } from '@ngrx/store';

export interface LoginState {
    isAuthenticated: boolean;
    user: User | null;
    errorMessage: null;
}

export const initialState: LoginState = {
    isAuthenticated: false,
    user: null,
    errorMessage: null
}
