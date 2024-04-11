
export interface IProduct {
    id?: number;
    images?: string[];
    image?: string;
    name?: string;
    discount?: number;
    oldPrice?: number;
    price?: number;
}

export class Product implements IProduct {
    id?: number;
    images?: string[];
    image?: string;
    name?: string;
    discount?: number;
    oldPrice?: number;
    price?: number;
}
