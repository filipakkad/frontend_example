import { Address, MaterialsDemand } from 'domain/value-objects';

export interface Staff {
  name: string,
  phoneNumber: string,
  emailAddress: string,
  volunteersAmount: number;
  area: string;
  address: Address,
  materialsDemand: MaterialsDemand,
}
