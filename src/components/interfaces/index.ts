import { inputName } from "../../types";

export interface IProduct {
    id?:string | undefined,
    title:string,
    description:string,
    imageURL:string,
    price:string,
    colors:string[],
    category:ICategory
}

export interface ICategory {
    id?:string | undefined,
    name:string,
    imageURL:string,
}

export interface IProductFormInput{
    id:string,
    name:inputName,
    label:string,
    type:string,
}