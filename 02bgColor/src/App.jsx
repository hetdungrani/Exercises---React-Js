import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import './App.css'

function App() {
  const [color, setcolor] = useState("lightblue");

  return (
    <>
      <div className=" w-full h-screen " style={{ backgroundColor: color }}>
        <div className="fixed flex flex-wrap bottom-12 inset-x-0 justify-center gap-3">
          <div>
            <button
              onClick={() => setcolor("red")}
              className=" font-bold text-white rounded-full px-6 py-3 text-lg border-3 border-solid"
              style={{ backgroundColor: "red" }}
            >
              RED
            </button>
          </div>
          <div>
            <button
              onClick={() => setcolor("green")}
              className=" font-bold text-white rounded-full px-6 py-3 text-lg border-3 border-solid"
              style={{ backgroundColor: "green" }}
            >
              GREEN
            </button>
          </div>
          <div>
            <button
              onClick={() => setcolor("yellow")}
              className=" font-bold text-white rounded-full px-6 py-3 text-lg border-3 border-solid"
              style={{ backgroundColor: "yellow" }}
            >
              YELLOW
            </button>
          </div>
          <div>
            <button
              onClick={() => setcolor("black")}
              className=" font-bold text-white rounded-full px-6 py-3 text-lg border-3 border-solid"
              style={{ backgroundColor: "black" }}
            >
              BLACK
            </button>
          </div>
          <div>
            <button
              onClick={() => setcolor("white")}
              className=" font-bold text-black rounded-full px-6 py-3 text-lg border-3 border-solid"
              style={{ backgroundColor: "white" }}
            >
              WHITE
            </button>
          </div>
          <div>
            <button
              onClick={() => setcolor("olive")}
              className=" font-bold text-white rounded-full px-6 py-3 text-lg border-3 border-solid"
              style={{ backgroundColor: "olive" }}
            >
              OLIVE
            </button>
          </div>
          <div>
            <button
              onClick={() => setcolor("pink")}
              className=" font-bold text-white rounded-full px-6 py-3 text-lg border-3 border-solid"
              style={{ backgroundColor: "pink" }}
            >
              PINK
            </button>
          </div>
          <div>
            <button
              onClick={() => setcolor("grey")}
              className=" font-bold text-white rounded-full px-6 py-3 text-lg border-3 border-solid"
              style={{ backgroundColor: "grey" }}
            >
              GREY
            </button>
          </div>
          <div>
            <button
              onClick={() => setcolor("blue")}
              className=" font-bold text-white rounded-full px-6 py-3 text-lg border-3 border-solid"
              style={{ backgroundColor: "blue" }}
            >
              BLUE
            </button>
          </div>
          <div>
            <button
              onClick={() => setcolor("lightgrey")}
              className=" font-bold text-white rounded-full px-6 py-3 text-lg border-3 border-solid"
              style={{ backgroundColor: "lightgrey" }}
            >
              LIGHTGREY
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
