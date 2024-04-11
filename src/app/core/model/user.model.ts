export interface ICustomer {
    id?: number;
    name?: string;
    email?: string;
    email_verified_at?: string;
    token?: string;
  }
  
  export class Customer implements ICustomer {
    constructor(
      id: number,
      name: string,
      email: string,
      email_verified_at: string,
      token: string
    ) {}
  }
  