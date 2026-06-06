import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import uploadMedia from "../../lib/mediaUpload";
import axios from "axios";

export default function AdminAddProductPage(){

    const [productId,setProductId]=useState("");
    const [name,setName]=useState("");
    const [altNames,setAltNames]=useState("");
    const [price,setPrice]=useState("");
    const [labelledPrice,setLabelledPrice]=useState("");
    const [description,setDescription]=useState("");
    const [images,setImages]=useState([]);
    const [brand,setBrand]=useState("");
    const [model,setModel]=useState("");
    const [category,setCategory]=useState("");
    const [isAvailable,setIsAvailable]=useState(true);
    const [stock,setStock]=useState(0);
    const navigate = useNavigate();


   async function handleSave(){
        try{
            const token=localStorage.getItem("token");
            if(token==null){
                toast.error("you must be logged into perform this acction");
                window.location.href='/login'
                return;
            }

               const mediaUploadPromisess=[]
               for(let i=0;i<images.length;i++){
                mediaUploadPromisess.push(uploadMedia(images[i]))
               }

               const urls =await Promise.all(mediaUploadPromisess); 

               const altNamesArray=altNames.split(",");

               const productData={
                    productId:productId,
                    name:name,
                    altNames:altNamesArray,
                    price:price,
                    labelledPrice:labelledPrice,
                    description:description,
                    images:urls,
                    brand:brand,
                    model:model,
                    category:category,
                    isAvailable:isAvailable,
                    stock:stock
               }

               const response=await axios.post(import.meta.env.VITE_API_URL+"/products",productData,
                {
                    headers:{
                        "Authorization":"Bearer "+token
                    }
                }
               )

               toast.success("Product added successfully");
               navigate("/admin/products")

        }
        catch(error){
            console.log(error)
            toast.error(error?.response?.data.message||'Failed to add Product.Please Try again')
        }
    }

    return(
        <div className="w-full h-full flex flex-col items-center p-4 overflow-y-scroll">
            <div className="sticky top-0 w-full h-[100px] rounded-lg bg-accent text-white flex items-center p-5 justify-between shadow-2xl">
                <h1 className="text-2xl font-semibold">Add New Product</h1>
                <div className="h-full flex  justify-center items-center">
                    <button onClick={handleSave} className="ml-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">save</button>
                    <button className="ml-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">cancle</button>
                </div>
                
            </div>
            <div className="w-full  flex flex-wrap bg-white shadow-2xl p-5 mt-8 rounded-lg  ">
                    <div className="w-1/4 p-2">
                        <label className="block mb-2 font-semibold">Product ID</label>
                        <input className="border border-gray-300 rounded-md p-2 w-full"
                         value={productId}
                         onChange={(e)=>{
                                setProductId(e.target.value)
                         }}
                        />

                    </div>

                    <div className="w-3/4 p-2">
                        <label className="block mb-2 font-semibold">Name</label>
                        <input className="border border-gray-300 rounded-md p-2 w-full"
                         value={name}
                         onChange={(e)=>{
                                setName(e.target.value)
                         }}
                        />

                     </div>
                     <div className="w-full p-2">
                        <label className="block mb-2 font-semibold">Alternative Names (comma separated)</label>
                        <input className="border border-gray-300 rounded-md p-2 w-full"
                         value={altNames}
                         onChange={(e)=>{
                                setAltNames(e.target.value)
                         }}
                        />

                     </div>

                      <div className="w-1/4 p-2">
                        <label className="block mb-2 font-semibold">Price</label>
                        <input className="border border-gray-300 rounded-md p-2 w-full"
                         value={price}
                         onChange={(e)=>{
                                setPrice(e.target.value)
                         }}
                        />

                     </div>

                     <div className="w-1/4 p-2">
                        <label className="block mb-2 font-semibold">Labelled Price</label>
                        <input className="border border-gray-300 rounded-md p-2 w-full"
                         value={labelledPrice}
                         onChange={(e)=>{
                                setLabelledPrice(e.target.value)
                         }}
                        />

                     </div>
                   

                    <div className="w-1/4  p-2">
                        <label className="block mb-2 font-semibold">Catagory</label>
                        <select
                        value={category}
                         onChange={(e)=>{
                            setCategory(e.target.value)
                        }} className="border border-gray-300 rounded-md p-2 w-full bg-white">
                            <option value="Laptop">Laptop</option>
                            <option value="mobile">Mobile</option>
                            <option value="Headphones">Headphones</option>
                            <option value="Camera">Camera</option>
                           

                            <option value="Grapic Card">Grapic Card</option>
                            <option value="Processor">Processor</option>
                            <option value="SSD">Headphones</option>
                            <option value="Moniter">Moniter</option>
                            <option value="Printer">Printer</option>

                             <option value="Others">Others</option>
                        </select>
                    </div>

                    <div className="w-1/4 p-2">
                        <label className="block mb-2 font-semibold">Images</label>
                        <input type="file" multiple={true} className="border border-gray-300 rounded-md p-2 w-full"
                        
                         onChange={(e)=>{
                                setImages(e.target.files)
                         }}
                        />

                     </div>

                      <div className="w-full p-2">
                        <label className="block mb-2 font-semibold">Description</label>
                        <textarea className="border border-gray-300 rounded-md p-2 w-full"
                         value={description}
                         onChange={(e)=>{
                                setDescription(e.target.value)
                         }}
                        />

                     </div>

                      <div className="w-1/4  p-2">
                        <label className="block mb-2 font-semibold">Brand</label>
                        <select
                        value={brand}
                         onChange={(e)=>{
                            setBrand(e.target.value)
                        }} className="border border-gray-300 rounded-md p-2 w-full bg-white">
                            <option value="Apple">Apple</option>
                            <option value="Samsung">Samsung</option>
                            <option value="Sony">Sony</option>
                            <option value="Dell">Dell</option>
                            <option value="Lenavo">Lenavo</option>
                            <option value="Asus">Asus</option>
                            <option value="Acer">Acer</option>
                            <option value="Nvidia">Nvidia</option>
                            <option value="AMD">AMD</option>
                            <option value="Other">Others</option>
                           
                        </select>
                    </div>
                    
                      <div className="w-1/4 p-2">
                        <label className="block mb-2 font-semibold">Model</label>
                        <input className="border border-gray-300 rounded-md p-2 w-full"
                         value={model}
                         onChange={(e)=>{
                                setModel(e.target.value)
                         }}
                        />

                     </div>

                      <div className="w-1/4 p-2">
                        <label className="block mb-2 font-semibold">Stock</label>
                        <input className="border border-gray-300 rounded-md p-2 w-full"
                         value={stock}
                         onChange={(e)=>{
                                setStock(e.target.value)
                         }}
                        />

                     </div>

                     <div className="w-1/4  p-2">
                        <label className="block mb-2 font-semibold">Availability</label>
                        <select
                        value={isAvailable}
                         onChange={(e)=>{
                            setIsAvailable(e.target.value)
                        }} className="border border-gray-300 rounded-md p-2 w-full bg-white">
                            <option className="bg-green-600 text-white font-semibold" value={true}>Available</option>
                            <option className="bg-red-600 text-white font-semibold "value={false}>Not Available</option>
                        
                        </select>
                    </div>

                    
                     
            </div>
            
        </div>
    )
}