import Random from "./components/Random"
import Tag from "./components/Tag";

export default function App() {
  return (

    <div className="background w-[100vw] h-[100vh] flex flex-col justify-around items-center">
      <h1 className="p-1 bg-white rounded-lg w-[30vw] flex justify-center text-xl">Random GIF</h1>
      <div className="flex gap-3">
        {/* random gif */}
        <div className="w-[48vw] h-[70vh] border rounded border-black bg-green-300 flex flex-col items-center"><Random/></div>
        {/* tagged gif */}
        <div className="w-[48vw] h-[70vh] border rounded border-black bg-blue-300"><Tag/></div>
      </div>
    </div>

  );
}
