import { VOIVODESHIPS } from 'domain/data';

export interface Address {
    streetName: string,
    streetNumber: string,
    apartmentNumber?: string,
    zipCode: string,
    city: string,
    voivodeship: VOIVODESHIPS,
}
