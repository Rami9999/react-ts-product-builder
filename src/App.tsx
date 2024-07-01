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
import { inputName } from "./types";
import toast, {Toaster} from "react-hot-toast";

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

    const [productToEdit,setProductToEdit] = useState<IProduct>(defaultProductObject);
    const [productToEditIndex,setProductToEditIndex] = useState<number>(0);

    const [formInputs,setFormInputs] = useState<IProductFormInput[]>(formInputsList);
    const [isOpen, setIsOpen] = useState(false)
    const [isOpenEditModal, setIsOpenEditModal] = useState(false)
    const [isOpenConfirmDeleteModal, setIsOpenConfirmDeleteModal] = useState<boolean>(false)

    setIsOpenConfirmDeleteModal
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
      setSelectedCategory(categories[1]);
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
    }

    function openEditModal() {
      setErrorMessages(
        {
          title:'',
          description:'',
          imageURL:'',
          price:'',
          colors:'',
        }
      );
      setIsOpenEditModal(true);
    }

    function openConfirmModal () {
      setIsOpenConfirmDeleteModal(true);
    }


    function close() {
      setIsOpen(false)
    }

    function closeEditModal() {
      setIsOpenEditModal(false)
    }

    function closeConfirmDeleteModal(){
      setIsOpenConfirmDeleteModal(false)

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

    const onChangeEditHandler = (event:ChangeEvent<HTMLInputElement>)=>{
      const {value,name} = event.target;
      setErrorMessages({
        ...errorMessages,
        [name]:''
      });

      setProductToEdit({
        ...productToEdit,
        [name]:value
      });
    }

    const onCancel = () =>{
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

    const onCancelEditModal = () =>{
      setProductToEdit(defaultProductObject);
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
      closeEditModal();
    }

    const submitHandler = (event: FormEvent<HTMLFormElement>): void=>{
      event.preventDefault();
      const errors = productValidation({title:product.title,description:product.description,imageURL:product.imageURL,price:product.price,colors:tempColors});

      const hasErrorMsg = Object.values(errors).some(value=>value==='') && Object.values(errors).every(value=>value==='');

      if(!hasErrorMsg)
      {
        setErrorMessages(errors);
        return;
      }

      setProducts(prev=>[
        {...product,id:uuid(),colors:tempColors,category:selectedCategory},
        ...prev,
      ]);
      setProduct(defaultProductObject);
      setTempColors([]);
      onCancel();
      console.log('data of the product has been sent successfully!')
      toast('A new product has been added Successfully!',
      {
        duration:3000,
        style:{
          backgroundColor:"green",
          color:"white",
        }
      });
    }

    const submitEditHandler = (event: FormEvent<HTMLFormElement>): void=>{
      event.preventDefault();
      const errors = productValidation({title:productToEdit.title,description:productToEdit.description,imageURL:productToEdit.imageURL,price:productToEdit.price,colors:tempColors});

      const hasErrorMsg = Object.values(errors).some(value=>value==='') && Object.values(errors).every(value=>value==='');

      if(!hasErrorMsg)
      {
        setErrorMessages(errors);
        return;
      }
     // productToEdit.category = selectedCategory;
      productToEdit.colors =tempColors;
      const updatedProducts = [...products];

      updatedProducts[productToEditIndex]=productToEdit;

      setProducts(updatedProducts);
      setProductToEdit(defaultProductObject);
      setTempColors([]);
      onCancelEditModal();
      console.log('data of the product has been sent successfully!');
      toast('Updated Successfully!',
      {
        duration:3000,
        style:{
          backgroundColor:"green",
          color:"white",
        }
      });
      
    }

    const handleDeleteProduct = ()=>{
      const filteredProducts = products.filter(product=>product.id!=productToEdit.id);
      setProducts(filteredProducts);
      console.log('Deleted Successfully!');
      setProductToEdit(defaultProductObject);
      closeConfirmDeleteModal();
      toast('Deleted Successfully!',
      {
        duration:3000,
        style:{
          backgroundColor:"green",
          color:"white",
        }
      }
      );

    }



    // ** Render
    const renderdProductList = products.map((product,idx) =>
     
    <ProductCard openConfirmModal={openConfirmModal} setTempColors={setTempColors} key={product.id} product={product} index={idx} setProductToEditIndex={setProductToEditIndex} setProductToEdit={setProductToEdit} openEditModal={openEditModal}/> 
    );
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

    const renderProductEditWithErrorMsg = (id:string, label:string, name:inputName) =>{
      return(
      <div className="flex flex-col ">
        <label className="mb-[1px] text-sm font-medium text-gray-700" htmlFor={id}>{label}</label>
        <Input type="text" name={name} id={id} value={productToEdit[name]} onChange={onChangeEditHandler}/>
        <ErrorMessage message={errorMessages[name]} />
      </div>
      )
    }

    return (
      <main className="container">
        <Button className="bg-indigo-700 hover:bg-indigo-900"  onClick={open} > Add Product</Button> 
        <div className="p-2 m-5 gap-2 md:gap-4 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {renderdProductList}
        </div>
        {/* Add Modal */}
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

        {/* Edit Modal */}
        <Modal closeModal={closeEditModal} isOpen={isOpenEditModal} title="Edit Product" >
          <form className="space-y-4" onSubmit={submitEditHandler}>
            {renderProductEditWithErrorMsg('title','Product Title','title')}
            {renderProductEditWithErrorMsg('description','Product Description','description')}
            {renderProductEditWithErrorMsg('imageURL','Product Image Url','imageURL')}
            {renderProductEditWithErrorMsg('price','Product Price','price')}

            <Select selected={productToEdit.category} setSelected={(value)=>setProductToEdit({...productToEdit,category:value})}/>
            <div className="flex gap-1 items-center flex-wrap sm:grid-cols-3">
              {renderSelectedProductColors}
            </div>
            <div className="flex space-x-2 items-center ">
              {renderProductColorsList}
            </div>
            {errorMessages['colors']&&<ErrorMessage message={errorMessages['colors']} />}



            <div className="flex items-center gap-2 ">
              <Button className="bg-indigo-700 hover:bg-indigo-900"> Submit</Button>
              <Button className="bg-red-700 hover:bg-red-900"  onClick={onCancelEditModal}> Cancel</Button>
            </div>
          </form >



        </Modal>

        {/* Confirm Delete Modal */}
        <Modal closeModal={closeConfirmDeleteModal} 
        isOpen={isOpenConfirmDeleteModal} 
        title="Are you sure You want to Delete This Product from your store?" 
        description="Deleting tihs product will remove it permenantly from your inventory, Any Associated data,
        sales history, and other relate informationwill also be deleted, Please make sure  this is the intended
        action"
        >
          
            <div className="flex items-center gap-2 ">
              <Button className="bg-indigo-700 hover:bg-indigo-900" onClick={handleDeleteProduct}> Yes, remove</Button>
              <Button className="bg-red-700 hover:bg-red-900"  onClick={closeConfirmDeleteModal}> Cancel</Button>
            </div>


        </Modal>
        <Toaster />
      </main>

    )
}

export default App;