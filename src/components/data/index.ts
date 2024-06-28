import {v4 as uuid} from "uuid";

import {IProduct,IProductFormInput,ICategory} from "../interfaces";

export const productList : IProduct[] = [
    {
        id:uuid(),
        title: "2022 Gensis GV70: Nominee",
        description: " As luxury brands car, South Korea",
        imageURL:"https://www.iihs.org/cdn-cgi/image/width=636/api/ratings/model-year-images/3321/",
        price: "50000",
        colors: ["#FF0032","#25633b","#FF6#31"],
        category:{
            name:"Cars",
            imageURL:"https://www.iihs.org/cdn-cgi/image/width=636/api/ratings/model-year-images/3321/",

        }
    },
    {
        id:uuid(),
        title: "2022 Gensis GV70: Nominee",
        description: " As luxury brands car, South Korea",
        imageURL:"https://www.iihs.org/cdn-cgi/image/width=636/api/ratings/model-year-images/3321/",
        price: "50000",
        colors: ["#FF0032","#25633b","#FF6#31"],
        category:{
            name:"Cars",
            imageURL:"https://www.iihs.org/cdn-cgi/image/width=636/api/ratings/model-year-images/3321/",

        }
    },
    {
        id:uuid(),
        title: "2022 Gensis GV70: Nominee",
        description: " As luxury brands car, South Korea",
        imageURL:"https://www.iihs.org/cdn-cgi/image/width=636/api/ratings/model-year-images/3321/",
        price: "50000",
        colors: ["#FF0032","#25633b","#FF6#31"],
        category:{
            name:"Cars",
            imageURL:"https://www.iihs.org/cdn-cgi/image/width=636/api/ratings/model-year-images/3321/",

        }
    },
    {
        id:uuid(),
        title: "2022 Gensis GV70: Nominee",
        description: " As luxury brands car, South Korea",
        imageURL:"https://www.iihs.org/cdn-cgi/image/width=636/api/ratings/model-year-images/3321/",
        price: "50000",
        colors: ["#FF0032","#25633b","#FF6#31"],
        category:{
            name:"Cars",
            imageURL:"https://www.iihs.org/cdn-cgi/image/width=636/api/ratings/model-year-images/3321/",

        }
    },
    {
        id:uuid(),
        title: "2022 Gensis GV70: Nominee",
        description: " As luxury brands car, South Korea",
        imageURL:"https://www.iihs.org/cdn-cgi/image/width=636/api/ratings/model-year-images/3321/",
        price: "50000",
        colors: ["#FF0032","#25633b","#FF6#31"],
        category:{
            name:"Cars",
            imageURL:"https://www.iihs.org/cdn-cgi/image/width=636/api/ratings/model-year-images/3321/",

        }
    },
    {
        id:uuid(),
        title: "2022 Gensis GV70: Nominee",
        description: " As luxury brands car, South Korea",
        imageURL:"https://www.iihs.org/cdn-cgi/image/width=636/api/ratings/model-year-images/3321/",
        price: "50000",
        colors: ["#FF0032","#25633b","#FF6#31"],
        category:{
            name:"Cars",
            imageURL:"https://www.iihs.org/cdn-cgi/image/width=636/api/ratings/model-year-images/3321/",

        }
    },
    {
        id:uuid(),
        title: "2022 Gensis GV70: Nominee",
        description: " As luxury brands car, South Korea",
        imageURL:"https://www.iihs.org/cdn-cgi/image/width=636/api/ratings/model-year-images/3321/",
        price: "50000",
        colors: ["#FF0032","#25633b","#FF6#31"],
        category:{
            name:"Cars",
            imageURL:"https://www.iihs.org/cdn-cgi/image/width=636/api/ratings/model-year-images/3321/",

        }
    },
    {
        id:uuid(),
        title: "2022 Gensis GV70: Nominee",
        description: " As luxury brands car, South Korea",
        imageURL:"https://www.iihs.org/cdn-cgi/image/width=636/api/ratings/model-year-images/3321/",
        price: "50000",
        colors: ["#FF0032","#25633b","#FF6#31"],
        category:{
            name:"Cars",
            imageURL:"https://www.iihs.org/cdn-cgi/image/width=636/api/ratings/model-year-images/3321/",

        }
    },
    {
        id:uuid(),
        title: "2022 Gensis GV70: Nominee",
        description: " As luxury brands car, South Korea",
        imageURL:"https://www.iihs.org/cdn-cgi/image/width=636/api/ratings/model-year-images/3321/",
        price: "50000",
        colors: ["#FF0032","#25633b","#FF6#31"],
        category:{
            name:"Cars",
            imageURL:"https://www.iihs.org/cdn-cgi/image/width=636/api/ratings/model-year-images/3321/",

        }
    },
    {
        id:uuid(),
        title: "2022 Gensis GV70: Nominee",
        description: " As luxury brands car, South Korea",
        imageURL:"https://www.iihs.org/cdn-cgi/image/width=636/api/ratings/model-year-images/3321/",
        price: "50000",
        colors: ["#FF0032","#25633b","#FF6#31"],
        category:{
            name:"Cars",
            imageURL:"https://www.iihs.org/cdn-cgi/image/width=636/api/ratings/model-year-images/3321/",

        }
    },
];

export const formInputsList :IProductFormInput[]=[
    {
        id:'title',
        name:"title",
        label:"Product Title",
        type:"text",
    },
    {
        id:'description',
        name:"description",
        label:"Product Description",
        type:"text",
    },
    {
        id:'image',
        name:"imageURL",
        label:"Product image URL",
        type:"text",
    },
    {
        id:'price',
        name:"price",
        label:"Product Price",
        type:"number",
    },

]


export const colors: string[]= [
    "#a855f7",
    "#2563eb",
    "#84D2C5",
    "#13005A",
    "#A31ACB",
    "#FF6331",
    "#3C2A21",
    "#6C4AB6",
    "#CB1C8D",
    "#000000",
    "#645CBB",
    "#1F8A70",
    "#820000",
    "#FF0032",
];

export const categories:ICategory[] = [
    {
        id:uuid(),
        name:"nike",
        imageURL:"https://www.iihs.org/cdn-cgi/image/width=636/api/ratings/model-year-images/3321/",
    },
    {
        id:uuid(),
        name:"Addidas",
        imageURL:"https://www.iihs.org/cdn-cgi/image/width=636/api/ratings/model-year-images/3321/",
    },
    {
        id:uuid(),
        name:"ferrari",
        imageURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrHWhVCrVug5Maodgb_dcJKvfpSjAG60Ooew&s",
    }

]