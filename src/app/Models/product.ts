export interface Product {
    price: Price;
    _id: string;
    title_en: string;
    title_ar: string;
    img: string;
    aboutItem_en: string;
    aboutItem_ar: string;
    categoryId: string;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
}

export interface Price {
    old: number;
    new: number;
    discount: number;
    shipping: number;
}
