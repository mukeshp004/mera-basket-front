
export interface ICustomerLoginRequest {
    email?: string;
    phone?: string;
    password?: string;
}

export class CustomerLoginRequest implements ICustomerLoginRequest {
}
