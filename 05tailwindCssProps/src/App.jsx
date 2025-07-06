import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Card
        username="Het"
        img="https://plus.unsplash.com/premium_photo-1748876811441-fdc37ada7905?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8"
      />
      <Card
        username="Dungrani"
        img="https://images.unsplash.com/photo-1745894118353-88e64617e064?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8"
      />
      <Card
        username="ChaiourCode"
        img="https://images.unsplash.com/photo-1745894118353-88e64617e064?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8"
      />
    </>
  );
}

export default App;
