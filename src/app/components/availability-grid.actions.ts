import { createAction, props } from '@ngrx/store';
import { RoomAvailability, AvailabilityGridRequest } from './availability-grid.model';

export const getAvailability = createAction(
    '[Availability Grid] Get Availability',
    props<{ payload:AvailabilityGridRequest }>()
)

export const beginGetAvailability = createAction(
    '[Availability Grid] Begin Get Availability'   
)

export const successGetAvailability = createAction(
    '[Availability Grid] Successful Get Availability',
    props<{ payload: RoomAvailability[] }>()
)

export const getAvailabilityByDateRange = createAction(
    '[Availability Grid] Get Availabilit By Date Range',
    props<{ payload:AvailabilityGridRequest }>()
)

export const beginGetAvailabilityByDateRange = createAction(
    '[Availibility Grid] Begin Get Availability by Date Range',
    props<{ payload: AvailabilityGridRequest }>()
)

export const handleAvailabilityError = createAction('[Availability Grid] Error', props<Error>())