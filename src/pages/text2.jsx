import { useState } from "react"

export default function Test2Page(){

    const[number,setNumber]=useState(0);
     
    return(
        <div className="w-full h-screen flex flex-col justify-center items-center bg-primary text-secondary">
                <div className="w-[300px] h-[300px] border-[6px] flex justify-center text-[50px] items-center">
                    {number}
                </div>

              <div className="w-[300px] flex flex-row justify-center">
                    <button onClick={
                        ()=>{
                            setNumber(number-1)
                        }
                    } className="bg-accent w-[70px] h-[30px] text-white border-primary">-</button>
                    <button onClick={
                        ()=>{
                            setNumber(0)
                        }
                    } className="bg-accent w-[70px] h-[30px] text-white border-primary">clear</button>
                    <button onClick={
                        ()=>{
                            setNumber(number+1)
                        }
                    } className="bg-accent w-[70px] h-[30px] text-white border-primary">+</button>


              </div>
        </div>
    )
}