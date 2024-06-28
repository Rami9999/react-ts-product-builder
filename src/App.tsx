import { ChangeEvent, FormEvent, useState } from "react";
import ProductCard from "./components/ProductCard";
import Modal from "./components/UI/Modal";
import { productList ,formInputsList, colors, categories} from "./components/data";
import Button from "./components/UI/Button";
import Input from "./components/UI/Input";
import { IProduct, IProductFormInput } from "./components/interfaces";
import { productValidation } from "./validation";
import ErrorMessage from "./components/ErrorMessage";
import CircleColor from "./components/CircleColor";
import {v4 as uuid} from "uuid";
import Select from "./components/UI/Select";

const App  = () => {

    const defaultProductObject: IProduct = 
    {
      title:'',
      description:'',
      imageURL:'',
      price:'',
      colors:[],
      category:{
        name:'',
        imageURL:''
      }
    }

    const [product,setProduct] = useState<IProduct>(
      defaultProductObject
    );

    const [products,setProducts] = useState<IProduct[]>(productList);

    const [formInputs,setFormInputs] = useState<IProductFormInput[]>(formInputsList);
    const [isOpen, setIsOpen] = useState(false)

    const [errorMessages,setErrorMessages] = useState({
      title:'',
      description:'',
      imageURL:'',
      price:'',
      colors:'',
    });

    const [tempColors,setTempColors] = useState<string[]>([]);

    const [selectedCategory, setSelectedCategory] = useState(categories[1]);

    function open() {
      setFormInputs(formInputsList);

      setErrorMessages(
        {
          title:'',
          description:'',
          imageURL:'',
          price:'',
          colors:'',
        }
      );
      setIsOpen(true);
      console.log(formInputsList)
    }

    function close() {
      setIsOpen(false)
    }

    const onChangeHandler = (event:ChangeEvent<HTMLInputElement>)=>{
      const {value,name} = event.target;
      setErrorMessages({
        ...errorMessages,
        [name]:''
      });

      setProduct({
        ...product,
        [name]:value
      });
    }

    const onCancel = () =>{
      console.log('canceled!');
      setProduct(defaultProductObject);
      setTempColors([]);
      setErrorMessages(
        {
          title:'',
          description:'',
          imageURL:'',
          price:'',
          colors:'',
        }
      );
      close();
    }

    const submitHandler = (event: FormEvent<HTMLFormElement>): void=>{
      event.preventDefault();
      const errors = productValidation({title:product.title,description:product.description,imageURL:product.imageURL,price:product.price,colors:tempColors});
      console.log(errors);

      const hasErrorMsg = Object.values(errors).some(value=>value==='') && Object.values(errors).every(value=>value==='');

      if(!hasErrorMsg)
      {
        setErrorMessages(errors);
        console.log("must not add the product!");
        return;
      }

      setProducts(prev=>[
        {...product,id:uuid(),colors:tempColors,category:selectedCategory},
        ...prev,
      ]);
      setProduct(defaultProductObject);
      setTempColors([]);
      onCancel();
      console.log(product)
      console.log('data of the product has been sent successfully!')
    }



    // ** Render
    const renderdProductList = products.map(product => <ProductCard key={product.id} product={product}/> );
    const renderdFormInputsList = formInputs.map(input =>
      <div className="flex flex-col " key={input.id}>
        <label className="mb-[1px] text-sm font-medium text-gray-700" htmlFor={input.id}>{input.label}</label>
        <Input type={input.type} name={input.name} id={input.id} value={product[input.name]} onChange={onChangeHandler}/>
        {errorMessages[input.name]&&<ErrorMessage message={errorMessages[input.name]} />}
      </div>
    );
    const renderProductColorsList = colors.map(color=><CircleColor key={color} color={color} onClick={()=>{
      setErrorMessages(prev => {prev.colors='' ; return prev});
      setTempColors(prev=>prev.includes(color) ?  prev.filter((c) => { return c !== color }):[...prev,color])
      
    }
    } />);
    const renderSelectedProductColors = tempColors.map(color=><span className={`rounded-md cursor-pointer p-1 mr-1 mb-1 text-sm  `} style={{backgroundColor:color, color:color!="#000000"?"#000000":"ffffff"}}  onClick={()=>{setTempColors(prev=>prev.filter((c) => { return c !== color }));}} key={color}>{color}</span>)


    return (
      <main className="container">
        <Button className="bg-indigo-700 hover:bg-indigo-900"  onClick={open} > Add Product</Button> 
        <div className="p-2 m-5 gap-2 md:gap-4 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {renderdProductList}
        </div>
        <Modal closeModal={close} isOpen={isOpen} title="Add A New Product" >
          <form className="space-y-4" onSubmit={submitHandler}>
            {renderdFormInputsList}

            <Select selected={selectedCategory} setSelected={setSelectedCategory}/>
            <div className="flex gap-1 items-center flex-wrap sm:grid-cols-3">
              {renderSelectedProductColors}
            </div>
            <div className="flex space-x-2 items-center ">
              {renderProductColorsList}
            </div>
            {errorMessages['colors']&&<ErrorMessage message={errorMessages['colors']} />}



            <div className="flex items-center gap-2 ">
              <Button className="bg-indigo-700 hover:bg-indigo-900"> Submit</Button>
              <Button className="bg-red-700 hover:bg-red-900"  onClick={onCancel}> Cancel</Button>
            </div>
          </form >



        </Modal>
      </main>

    )
}

export default App;