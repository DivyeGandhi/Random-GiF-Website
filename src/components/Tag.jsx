import { useState } from "react";
import useGif from "../hooks/useGif";

export default function Tag() {
  const {gif,loading,fetchData}=useGif();
  const [tag,setTag]=useState("car");

  function changeHandler(event){
    setTag(event.target.value);
  }
  
  return(
    <div className="w-full h-full flex flex-col justify-around items-center">
      {(loading === true)?(<div className="spinner"></div>):(<img className=" h-40"src={gif}/>)}
      <input type="text" onChange={(changeHandler)} value={tag} className="w-[500px]"/>
        <button onClick={()=>fetchData(tag)}className=" w-11/12 bg-yellow-400  active:bg-blue-500">Generate</button>
    </div>
  );
}
