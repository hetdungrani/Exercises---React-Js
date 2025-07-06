import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [count, setCount] = useState(0);

  const addCount = () => {
    if (count > 9 ) {
      alert("Count is not allowed greterthen 10");
    } else {
      setCount(count + 1);
      // setCount(count=count + 1);
      // setCount(count=count + 1);
      // setCount(count=count + 1);
    }
  };
  const removeCount = () => {
    if (count < 1) {
      alert("Count is not allowed lessthen 0");
    } else {
      setCount(count - 1);
    }
  };
  const resetCount = () => {
    setCount((count = count - count));
  };
  return (
    <>
      <h1>Welcome to Counter Page</h1>
      <h2>Count : {count}</h2>
      <button onClick={addCount}>Add</button>
      <button onClick={removeCount}>Remove</button>
      <button onClick={resetCount}>Reset</button>
    </>
  );
}

export default App;
