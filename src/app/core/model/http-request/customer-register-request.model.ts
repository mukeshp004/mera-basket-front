
export interface ICustomerRegisterRequest {
    first_name?: string;
    last_name?: string;
    email?: string;
    phone?: string;
    password?: string;
    password_confirmation?: string;
}

export class CustomerRegisterRequest implements ICustomerRegisterRequest {
}
