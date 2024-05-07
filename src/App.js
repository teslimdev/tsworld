import { Routes, Route } from "react-router-dom";
import Lithium from "./Container/Lithium/Lithium";
import Home from "./Container/Home/Home";
import { Footer } from "./Compnents";
import { Description } from "./Container";
// import Header from "./Compnents/Header";
// import { Slide } from "./Compnents";
function App() {
  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<Home />}/>
         <Route path="/Description" element={<Description />}/>
         <Route path="/Lithium" element={<Lithium />}/>
       </Routes>
       <Footer/>
    </div>
  );
}

export default App;
