
import { useState } from "react"
import uploadMedia from "../lib/mediaUpload";

export default function TestPage(){


    const [file,setFile]=useState(null);

    async function handleUpload(){
      try{
            const url=await uploadMedia(file)
            console.log(url)
      }catch(error){
        console.log(error)
      }
    }

    // function handleUpload(){
    //  uploadMedia(file).then((url)=>{
    //     console.log(url)
    //  }).catch((error)=>{
    //     console.log(error)
    //  })
    // }

     
    return(
        
        <div className="flex flex-col justify-center items-center">
                <input onChange={(e)=>{
                    setFile(e.target.files[0])
                }} type="file"/>
                <button onClick={handleUpload} className="bg-secondary text-primary px-4 py-4">upload</button>
        </div>
    )
}

//https://qdvkvpqzwjshkhqgeisa.supabase.co/rest/v1/
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFkdmt2cHF6d2pzaGtocWdlaXNhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkyMTI1NDMsImV4cCI6MjA5NDc4ODU0M30.j6khqtipVi3dTPKi1uUik3T4cGr8UrnEQzb8BhPt_sE 