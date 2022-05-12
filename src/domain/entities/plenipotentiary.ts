import { Address, FullName } from 'domain/value-objects';

export interface Plenipotentiary {
  fullName: FullName;
  peselNumber: string,
  phoneNumber: string,
  emailAddress: string,
  address: Address,
}
