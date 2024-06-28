/**
 * 
 * @param product 
 * @returns 
 */
export const productValidation = (product:{
    title:string,
    description:string,
    imageURL:string,
    price:string,
    colors:string[],
}) => {
    // ** returns an object
    const errors:{    title:string,
        description:string,
        imageURL:string,
        price:string,
        colors:string} = {
            title:'',
            description:'',
            imageURL:'',
            price:'',
            colors:''
    };

    const validUrl = /^(ftp|http|https):\/\/[^*]+$/.test(product.imageURL);

    if(!product.title.trim() || !product.title || product.title.length<10 || product.title.length>80)
    {
        errors.title = "Product title is required and must be between 10 and 80 characters"
    }

    if(!product.description.trim() || !product.description || product.description.length<10 || product.description.length>500)
    {
        errors.description = "Product description is required and must be between 10 and 500 characters"
    }

    if(!product.imageURL.trim() || !product.imageURL || !validUrl)
    {
        errors.imageURL = "Valid image URL is required"
    }

    if(!product.price.trim() || !product.price || isNaN(Number(product.price)) || Number(product.price)<0)
    {
        errors.price = "Valid price is required"
    }
    console.log(product);
    if(product.colors.length ==0)
    {
        errors.colors = "You must select at least 1 color"
    }

    return errors;
}