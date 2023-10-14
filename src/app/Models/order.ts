import { User } from './user';
import { Product } from './product';

export interface Order {
    _id: string;
    user: User;
    products: orderProduct[];
    createdAt: Date;
    __v: number;
    status: string;
}

export interface orderProduct {
    product: Product;
    quantity: number;
    _id: string;
}
