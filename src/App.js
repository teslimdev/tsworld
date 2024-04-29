import { Routes, Route } from "react-router-dom";
import Home from "./Container/Home/Home";
import Header from "./Compnents/Header";
import { Slide } from "./Compnents";
function App() {
  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<Home />}/>
       </Routes>
    </div>
  );
}

export default App;
