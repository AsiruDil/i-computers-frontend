import { useState } from "react"

export default function TestPage(){

    const[emotion,setEmotion]=useState("🙂");
     
    return(
        <div className="w-full h-screen flex flex-col justify-center items-center bg-primary text-secondary">
                <div className="w-[300px] h-[300px] border-[6px] flex justify-center text-[50px] items-center">
                    {emotion}
                </div>

              <div className="w-[300px] flex flex-row justify-center">
                    <button onClick={
                        ()=>{
                            setEmotion("😪")
                        }
                    } className="bg-accent w-[70px] h-[30px] text-white border-primary">Sad</button>
                    <button onClick={
                        ()=>{
                            setEmotion("😀")
                        }
                    } className="bg-accent w-[70px] h-[30px] text-white border-primary">happy</button>
                    <button onClick={
                        ()=>{
                            setEmotion("😤")
                        }
                    } className="bg-accent w-[70px] h-[30px] text-white border-primary">Angry</button>


              </div>
        </div>
    )
}