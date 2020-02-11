export class Availability {
    roomType: number;
    availabilityDate: Date;
    numberAvailable: number;
    numberBooked: number;
    totalRooms: number;
}

export interface RoomAvailability {
    roomType: number;
    roomTypeName: string;
    availability: Availability[];
}

export class AvailabilityGridRequest {
    fromDate: Date;
    toDate: Date;
}
