import { Routes, Route } from "react-router-dom";
import Lithium from "./Container/Lithium/Lithium";
import Home from "./Container/Home/Home";
import Inverter from "./Container/Inverter/Inverter";
import Solar from "./Container/Solar/Solar";
import Acid from "./Container/Acid/Acid";
import Tubular from "./Container/Tubular/Tubular";
import Products from "./Container/Products/Products";
import Contacts from "./Container/Contacts/Contacts";
import Help from "./Container/Help/Help";
// import { Footer } from "./Compnents";
import { Description } from "./Container";
import Upgrade from "./Container/Upgrade/Upgrade";
import Repair from "./Container/Repair/Repair";
import Terms from "./Container/Terms/Terms";
import Cookies from "./Container/Cookies/Cookies";
import Privacy from "./Container/Privacy/Privacy";
import Signup from "./Container/Signup/Signup";
// import Header from "./Compnents/Header";
// import { Slide } from "./Compnents";
function App() {
  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<Home />}/>
         <Route path="/Description" element={<Description />}/>
         <Route path="/Lithium" element={<Lithium />}/>
           <Route path="/Inverter" element={<Inverter />}/>
           <Route path="/Acid" element={<Acid />}/>
            <Route path="/Solar" element={<Solar />}/>
             <Route path="/Tubular" element={<Tubular />}/>
              <Route path="/Products" element={<Products />}/>
               <Route path="/Contacts" element={<Contacts />}/>
                <Route path="/Help" element={<Help />}/>
                <Route path="/Upgrade" element={<Upgrade />}/>
                <Route path="/Repair" element={<Repair/>}/>
                 <Route path="/Terms" element={<Terms/>}/>
                 <Route path="/Cookies" element={<Cookies/>}/>
                 <Route path="/Privacy" element={<Privacy/>}/>
                 <Route path="/Signup" element={<Signup/>}/>
       </Routes>
      
    </div>
  );
}

export default App;
