import Image from "./Image";
import Button from "./UI/Button";
import { IProduct } from "./interfaces";
import { textSlicer } from "../utils/functions";
import CircleColor from "./CircleColor";
interface IProps {
    product:IProduct
}


const ProductCard  = ({product}:IProps) => {
    const renderProductColorsList = product.colors.map(color=><CircleColor key={color} color={color}/>);
    return (
        <div className="max-w-sm md:max-w-lg mx-auto md:mx-0 border rounded-md  p-2 flex flex-col">

            <Image imageURL={product.imageURL}alt={product.title} />
            <h3>{product.title}</h3>
            <p>{textSlicer(product.description,50)}</p>

            <div className="flex items-center space-x-2 my-4">
                {renderProductColorsList}
            </div>

            <div className="flex items-center justify-between">
                <span className="text-lg text-blue-500">${product.price}</span>
                <Image className="w-10 h-10 rounded-full object-bottom" imageURL={product.category.imageURL} alt={product.category.name} />
            </div>

            <div className="my-5 flex items-center justify-between gap-3">
                <Button className="bg-blue-600" >Edit </Button>
                <Button className="bg-red-600">Delete </Button>

            </div>
        </div>
    )
}

export default ProductCard;