import axios from "axios";
import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function AdminProductPage(){
   
   const [products,setProducts]=useState([]);
   useEffect(
      ()=>{
         const token =localStorage.getItem("token")
          axios.get(import.meta.env.VITE_API_URL+"/products",
      {
         headers:{
            "Authorization":"Bearer "+token
         }
      }
   ).then((response)=>{
      setProducts(response.data)
   }).catch((error)=>{
      console.log(error)
   })
      },
      []
   )



  


    return(
       <div className="w-full h-full overflow-y-scroll p-5">

         <div className="sticky top-0 w-full h-[100px] rounded-lg bg-accent text-white flex items-center p-5 justify-between shadow-2xl">
                <h1 className="text-2xl font-semibold">Products</h1>
                
                
            </div>
         <table className="mt-5 w-full text-secondary">
            <thead className="bg-accent/45 text-white">
               <tr>
                  <th className="text-center border border-primary p-4">Image</th>
                  <th className="text-center border border-primary p-4">Product Id</th>
                  <th className="text-center border border-primary p-4">Name</th>
                  <th className="text-center border border-primary p-4">Price</th>
                  <th className="text-center border border-primary p-4">Labelled Price</th>
                  <th className="text-center border border-primary p-4">Brand</th>
                  <th className="text-center border border-primary p-4">Model</th>
                  <th className="text-center border border-primary p-4">Category</th>
                  <th className="text-center border border-primary p-4">Availability</th>
                  <th className="text-center border border-primary p-4">Stock</th>
               </tr>
            </thead>
            <tbody>
                  {
                     products.map(
                        (item)=>{
                           return(
                              <tr className="odd:bg-gray-500 even:bg-primary border-t-4 border-primary odd:text-white hover:bg-accent/45" key={item.productId}>
                                 <td className="p-2" >
                                   <img src={item.images[0]} className="w-16 h-16 object-cover rounded-full" />
                                    </td>
                                 <td className="text-center text-wrap p-2">{item.productId}</td>
                                 <td className="text-center text-wrap p-2">{item.name}</td>
                                 <td className="text-center text-wrap p-2">{item.price}</td>
                                 <td className="text-center text-wrap p-2">{item.labelledPrice}</td>
                                 <td className="text-center text-wrap p-2">{item.brand}</td> 
                                 <td className="text-center text-wrap p-2">{item.model}</td>
                                 <td className="text-center text-wrap p-2">{item.category}</td>
                                 <td className="text-center text-wrap p-2"></td>
                                 <td className="text-center text-wrap p-2">{item.stock}</td>
                                 
                              </tr>
                           )
                        }
                     )
                  }
            </tbody>
         </table>

        <Link to="/admin/add-product" className="fixed bottom-8 right-8 w-[60px] h-[60px] bg-accent flex justify-center items-center rounded-full  shadow-lg text-white text-3xl hover:bg-black hover:text-accent">
           <FaPlus/>
            </Link>
       </div>
    )
}