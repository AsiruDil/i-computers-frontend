import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function AdminProductPage(){
    return(
       <div className="w-full h-full">
        <Link to="/admin/add-product" className="fixed bottom-8 right-8 w-[60px] h-[60px] bg-accent flex justify-center items-center rounded-full  shadow-lg text-white text-3xl hover:bg-black hover:text-accent">
           <FaPlus/>
            </Link>
       </div>
    )
}