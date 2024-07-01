import Image from "./Image";
import Button from "./UI/Button";
import { IProduct } from "./interfaces";
import { fixPrice, textSlicer } from "../utils/functions";
import CircleColor from "./CircleColor";
interface IProps {
    product:IProduct,
    setProductToEdit : (product:IProduct)=>void,
    openEditModal : ()=>void,
    setProductToEditIndex : (index:number)=>void,
    setTempColors: (colors:string[])=>void,
    openConfirmModal: ()=> void,
    index:number,
}


const ProductCard  = ({product,setProductToEdit,openEditModal,setProductToEditIndex,index,setTempColors,openConfirmModal}:IProps) => {
    const renderProductColorsList = product.colors.map(color=><CircleColor key={color} color={color}/>);

    const onEdit = ()=>{
        setProductToEditIndex(index)
        setProductToEdit(product);
        setTempColors(product.colors);
        openEditModal();
    }

    const onRemove = () => {
        setProductToEdit(product);
        openConfirmModal();
    } 
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
                <div className="flex gap-2 items-center justify-between">
                    <span className="text-lg text-gray-500">{product.category.name}</span>
                    <Image className="w-10 h-10 rounded-full object-bottom" imageURL={product.category.imageURL} alt={product.category.name} />
                </div>
            </div>

            <div className="my-5 flex items-center justify-between gap-3">
                <Button className="bg-blue-600" onClick={onEdit}>Edit </Button>
                <Button className="bg-red-600" onClick={onRemove}>Delete </Button>

            </div>
        </div>
    )
}

export default ProductCard;