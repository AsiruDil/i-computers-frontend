import { createClient } from "@supabase/supabase-js";

let url="https://qdvkvpqzwjshkhqgeisa.supabase.co"
let key="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFkdmt2cHF6d2pzaGtocWdlaXNhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkyMTI1NDMsImV4cCI6MjA5NDc4ODU0M30.j6khqtipVi3dTPKi1uUik3T4cGr8UrnEQzb8BhPt_sE"
const supabase=createClient(url,key)

export default function uploadMedia(file){
    return new Promise((resolve ,reject)=>{
        if(file==null){
            reject("no file selected")
        }else{
            const timeStamp=new Date().getTime();
            const fileName=timeStamp+"_"+file.name

            supabase.storage.from("images").upload(fileName,file,{
            upsert:false,
            cacheControl:"3600",
               }).then(()=>{
                    const publicUrl = supabase.storage.from("images").getPublicUrl(fileName).data.publicUrl 
                     resolve(publicUrl)
              }).catch((error)=>{
                    reject(error)
              })  
        }
    })
}
    