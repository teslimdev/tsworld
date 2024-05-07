import { Routes, Route } from "react-router-dom";
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
       </Routes>
       <Footer/>
    </div>
  );
}

export default App;
