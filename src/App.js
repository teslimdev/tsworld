import { Routes, Route } from "react-router-dom";
import Home from "./Container/Home/Home";
import Header from "./Compnents/Header";
function App() {
  return (
    <div className="App">
    <div>
      <Header/>
    </div>
       <Routes>
        <Route path="/" element={<Home />}/>
       </Routes>
    </div>
  );
}

export default App;
