/**
 * 
 * @param {string} text 
 * @param {number} [maxLength=50]
 * @returns  {string}
 */
export function textSlicer(text:string,maxLength:number=50)
{
    if (text.length>=maxLength)
        return text.substring(0,maxLength)+'...';
    else{
        return text;
    }
}

export function fixPrice(price:string)
{
    let priceNumber:number = Number(price);
    if(priceNumber<1000) return price 
    else{
        let finalPrice:string='';
        while(priceNumber>1000)
        {
            let mod:number = priceNumber%1000;
            finalPrice = priceNumber/1000+','+(mod<10 ? '00'+mod:(mod<100?'0'+mod:mod));
            priceNumber = priceNumber/1000;
        }
        return finalPrice;
    }
}