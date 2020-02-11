import * as auth from './shared/auth/auth.reducers';

export interface AppState {
    authState: auth.State;
}