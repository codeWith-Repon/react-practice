import { useState } from "react";
import "./App.css";

function App() {

  const [color, setColor] = useState("olive")
  return (
    <>
      <div className="w-full h-screen duration-200"
       style={{backgroundColor: color}}
       >
        <div className="fixed bottom-10 left-0 inset-x-0 flex flex-wrap justify-center">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-3xl px-3 py-2">
            <button onClick={()=>setColor("pink")} className="bg-pink-600 p-2 rounded-3xl">Pink</button>
            <button onClick={()=>setColor("window")} className="bg-sky-600 p-2 rounded-3xl">sky</button>
            <button onClick={()=>setColor("black")} className="bg-black text-white p-2 rounded-3xl">black</button>
          </div>
        </div>

      </div>
    </>
  );
}

export default App;
