import useGif from "../hooks/useGif";

export default function Random() {
  const {gif,loading,fetchData}=useGif();
  return (
    <div className="w-[48vw] h-[70vh] border rounded border-black py-[100px] bg-green-300 flex flex-col justify-between items-center">
        {(loading === true)?(<div className="spinner"></div>):(<img className=" h-40"src={gif}/>)}
        <button onClick={()=>fetchData()}className=" w-11/12 bg-yellow-400  active:bg-blue-500">Generate</button>
    </div>
  );
}
