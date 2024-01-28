
export interface IProduct {
    id?: number;
    image?: string;
    name?: string;
    discount?: number;
    oldPrice?: number;
    price?: number;
}

export class Product implements IProduct {
    id?: number;
    image?: string | undefined;
    name?: string | undefined;
    discount?: number | undefined;
    oldPrice?: number | undefined;
    price?: number | undefined;
}
