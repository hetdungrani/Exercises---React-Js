import { Route, Routes } from "react-router-dom";
import GetData from "./Pages/GetData";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Header from "./components/Header";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/getdata" element={<GetData />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      
    </>
  );
}

export default App;
