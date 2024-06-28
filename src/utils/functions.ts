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