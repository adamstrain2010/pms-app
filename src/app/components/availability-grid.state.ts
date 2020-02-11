import { RoomAvailability } from './availability-grid.model';

export class AvailabilityGridState {
    roomAvailability: Array<RoomAvailability>;
    roomAvailabilityError: Error;
}

export const initializeState = (): AvailabilityGridState => {
    return { roomAvailability: Array<RoomAvailability>(), roomAvailabilityError: null };
} 
