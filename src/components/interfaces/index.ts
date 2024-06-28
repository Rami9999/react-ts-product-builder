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

type inputName = 'title'|'description'|'imageURL'|'price';
export interface IProductFormInput{
    id:string,
    name:inputName,
    label:string,
    type:string,
}