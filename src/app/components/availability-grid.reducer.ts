import { Action, createReducer, on } from '@ngrx/store';
import * as AvailabilityActions from './availability-grid.actions';
import { RoomAvailability, AvailabilityGridRequest } from './availability-grid.model'; 
import { AvailabilityGridState, initializeState } from './availability-grid.state';

export const initialState = initializeState();

const reducer = createReducer(
    initialState,
    on(AvailabilityActions.getAvailability, state => state),
    on(AvailabilityActions.successGetAvailability, (state: AvailabilityGridState, { payload }) => {
        return { ...state,  roomAvailability: payload} 
    })
)

export function AvailabilityGridReducer(state: AvailabilityGridState | undefined, action: Action){
    return reducer(state, action);
}
