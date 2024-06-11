// import React, { useState, useRef } from "react";
// import { Link } from "react-router-dom";
// import { IoIosArrowRoundBack } from "react-icons/io";
// import { MdKeyboardArrowRight } from "react-icons/md";
// import { Footer } from "../../Compnents";

// const Delivery = () => {
//   const [selectedState, setSelectedState] = useState("");
//   const [selectedCity, setSelectedCity] = useState("");
//   const [isOpenState, setIsOpenState] = useState(false);
//   const [isOpenCity, setIsOpenCity] = useState(false);
//   const [selectedOption, setSelectedOption] = useState("");
//   const [selectedMode, setSelectedMode] = useState("");
//   const [isOpenMode, setIsOpenMode] = useState(false);
//   const otherDetailsRef = useRef(null);

//   const adjustTextareaHeight = () => {
//     const textarea = otherDetailsRef.current;
//     if (textarea) {
//       textarea.style.height = "auto";
//       textarea.style.height = `${textarea.scrollHeight}px`;
//     }
//   };

//   const states = [
//     "Abia",
//     "Adamawa",
//     "Akwa Ibom",
//     "Anambra",
//     "Bauchi",
//     "Bayelsa",
//     "Benue",
//     "Borno",
//     "Cross River",
//     "Delta",
//     "Ebonyi",
//     "Edo",
//     "Ekiti",
//     "Enugu",
//     "Federal Capital Territory (FCT)",
//     "Gombe",
//     "Imo",
//     "Jigawa",
//     "Kaduna",
//     "Kano",
//     "Katsina",
//     "Kebbi",
//     "Kogi",
//     "Kwara",
//     "Lagos",
//     "Nasarawa",
//     "Niger",
//     "Ogun",
//     "Ondo",
//     "Osun",
//     "Oyo",
//     "Plateau",
//     "Rivers",
//     "Sokoto",
//     "Taraba",
//     "Yobe",
//     "Zamfara",
//   ];

//   const lagosCities = [
//     "Lagos Island",
//     "Ikeja",
//     "Victoria Island",
//     "Lekki",
//     "Ajah",
//     "Surulere",
//     "Yaba",
//     "Apapa",
//     "Ikorodu",
//     "Agege",
//     "Badagry",
//     "Epe",
//   ];

//   const modes = ["Pick Up", "Delivery", "Installment service"];

//   const handleSelectState = (value) => {
//     setSelectedState(value);
//     setIsOpenState(false);
//     setIsOpenCity(false);
//   };

//   const handleSelectCity = (value) => {
//     setSelectedCity(value);
//     setIsOpenCity(false);
//   };

//   const handleOptionChange = (option) => {
//     setSelectedOption(option);
//   };

//   const handleSelectMode = (mode) => {
//   setSelectedMode(mode);
//   setIsOpenMode(false); // Close the mode dropdown after selecting an option
// };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted with selected state:", selectedState);
//     console.log("Form submitted with selected city:", selectedCity);
//     console.log("Form submitted with selected mode:", selectedMode);
//   };

//   return (
//     <div>
//       <div className="bg-gray-400 fixed w-full z-20">
//         <div className="flex items-center justify-between max-w-[1200px] m-auto px-3 py-2">
//           <p className="text-black text-3xl">
//             <Link to="/Cart">
//               <IoIosArrowRoundBack />
//             </Link>
//           </p>
//           <h2 className="text-black text-[1.1rem] uppercase">
//             delivery details
//           </h2>
//           <div></div>{" "}
//         </div>
//       </div>
//       <div className="pt-20">
//         <div className=" pb-7">
//           <h2 className="text-center text-[1.1rem] font-semibold capitalize text-gray-900">
//             Choose your Location
//           </h2>
//         </div>
//         <div>
//           <form onSubmit={handleSubmit} className="px-3  max-w-[700px] m-auto">
//             <div className="custom-select max-w-[700px] m-auto mb-4">
//               <div
//                 className="selected-item flex items-center  py-1 bg-gray-200  px-3 rounded-md border-gray-800 border justify-between"
//                 onClick={() => setIsOpenState(!isOpenState)}
//               >
//                 {selectedState || "Select State"} <MdKeyboardArrowRight />
//               </div>
//               {isOpenState && (
//                 <div className="dropdown-items">
//                   {states.map((state, index) => (
//                     <div
//                       key={index}
//                       className="dropdown-item border-b border-gray-600 text-gray-200 hover:text-gray-800 bg-gray-700 hover:bg-gray-200 py-1 px-3"
//                       onClick={() => handleSelectState(state)}
//                     >
//                       {state}
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//             <div className={`pt-3 max-w-[700px] m-auto ${selectedState === "Lagos" ? '' : 'hidden'}`}>
//               <div className="custom-select max-w-[700px] m-auto mb-4">
//                 <div
//                   className="selected-item flex items-center  py-1 bg-gray-200  px-3 rounded-md border-gray-800 border justify-between"
//                   onClick={() => setIsOpenMode(!isOpenMode)}
//                 >
//                   {selectedMode || "Select Mode"} <MdKeyboardArrowRight />
//                 </div>
//                 {isOpenMode && (
//                   <div className="dropdown-items">
//                     {modes.map((mode, index) => (
//                       <div
//                         key={index}
//                         className="dropdown-item border-b border-gray-600 text-gray-200 hover:text-gray-800 bg-gray-700 hover:bg-gray-200 py-1 px-3"
//                         onClick={() => handleSelectMode(mode)}
//                       >
//                         {mode}
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             </div>
//             {selectedState === "Lagos" && (selectedMode === "Delivery" || selectedMode === "Installment service") && (
//               <div className={`custom-select max-w-[700px] m-auto py-3`}>
//                 <div
//                   className="selected-item flex items-center rounded-md  py-1 bg-gray-200  px-3 border-gray-800 border justify-between"
//                   onClick={() => setIsOpenCity(!isOpenCity)}
//                 >
//                   {selectedCity || "Select City"} <MdKeyboardArrowRight />
//                 </div>
//                 {isOpenCity && (
//                   <div className="dropdown-items">
//                     {lagosCities.map((city, index) => (
//                       <div
//                         key={index}
//                         className="dropdown-item border-b border-gray-600 hover:text-gray-800  text-gray-200 bg-gray-700 hover:bg-gray-200  py-1 px-3"
//                         onClick={() => handleSelectCity(city)}
//                       >
//                         {city}
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             )}
//             <div className={`py-3 max-w-[700px] m-auto ${selectedState === "Lagos" && (selectedMode === "Delivery" || selectedMode === "Installment service") ? '' : 'hidden'}`}>
//               <textarea
//                 id="details"
//                 name="details"
//                 placeholder=" Detailed Address"
//                 required
//                 ref={otherDetailsRef}
//                 className="bg-gray-300 border placeholder:text-gray-700 w-full border-gray-600 rounded pl-4 pr-4 py-1 outline-none resize-none overflow-hidden"
//                 onInput={adjustTextareaHeight}
//               ></textarea>
//             </div>
//             <div className=" pt-3">
             
//             <input
//               type="text"
//               required
//               placeholder="Reciever's Name"
//               className="outline-none border w-full  placeholder:text-gray-800 border-gray-600 bg-gray-200 rounded pl-3 pr-4 py-1"
//             />
//             <br />
//             </div>
//            <div className=" pt-6">
//              <input
//               type="tel"
//               id="phone"
//               name="phone"
//               required
//               className="bg-gray-200 rounded  placeholder:text-gray-800 w-full pl-4 pr-4 py-1 outline-none border border-gray-600"
//               placeholder="Reciever's Number"
//             />
//            </div>
//            <div className=" py-4">
//             <p>Note: Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quas ad quod autem ab voluptatibus.</p>
//               <p className=" py-3"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quas ad quod autem ab voluptatibus.</p>
//                 <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quas ad quod autem ab voluptatibus.</p>
//            </div>
//              <div className=" bg-gray-100 sticky bottom-0 px-3 py-2 shadow-lg">
//             <a href="/Delivery"><button className=" bg-gray-800  py-2 w-full rounded-md text-gray-100">Save</button></a>
//           </div>
//           <div className=" py-10">
//             <p className=" text-center">In Partnership with txx</p>
//           </div>
//           </form>
//         </div>
//       </div>
//       <Footer/>
//     </div>
//   );
// };

// export default Delivery;

import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Footer } from "../../Compnents";

const Delivery = () => {
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedMode, setSelectedMode] = useState("");
  const otherDetailsRef = useRef(null);

  const adjustTextareaHeight = () => {
    const textarea = otherDetailsRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  const handleSelectState = (event) => {
    setSelectedState(event.target.value);
    setSelectedCity(""); // Reset selected city when state changes
  };

  const handleSelectCity = (event) => {
    setSelectedCity(event.target.value);
  };

  const handleSelectMode = (event) => {
    setSelectedMode(event.target.value);
  };

  const handleSubmit = (e) => {
 
    console.log("Form submitted with selected state:", selectedState);
    console.log("Form submitted with selected city:", selectedCity);
    console.log("Form submitted with selected mode:", selectedMode);
  };

  return (
    <div>
      <div className="bg-gray-400 fixed w-full z-20">
        <div className="flex items-center justify-between max-w-[1200px] m-auto px-3 py-2">
          <p className="text-black text-3xl">
            <Link to="/Cart">
              <IoIosArrowRoundBack />
            </Link>
          </p>
          <h2 className="text-black text-[1.1rem] uppercase">
            delivery details
          </h2>
          <div></div>{" "}
        </div>
      </div>
      <div className="pt-20">
        <div className="pb-7">
          <h2 className="text-center text-[1.1rem] font-semibold capitalize text-gray-900">
            Choose your Location
          </h2>
        </div>
        <div>
          <form onSubmit={handleSubmit} className="px-3 max-w-[700px] m-auto">
            <div className="custom-select  mb-4">
              <select
                value={selectedState}
                onChange={handleSelectState}
                required
                className="selected-item flex items-center py-1 w-full bg-gray-200 px-3 rounded-md border-gray-800 border justify-between"
              >
                <option value="" disabled selected>Select State</option>
                <option value="Abia">Abia</option>
                <option value="Adamawa">Adamawa</option>
                <option value="Akwa Ibom">Akwa Ibom</option>
                <option value="Anambra">Anambra</option>
                <option value="Bauchi">Bauchi</option>
                <option value="Bayelsa">Bayelsa</option>
                <option value="Benue">Benue</option>
                <option value="Borno">Borno</option>
                <option value="Cross River">Cross River</option>
                <option value="Delta">Delta</option>
                <option value="Ebonyi">Ebonyi</option>
                <option value="Edo">Edo</option>
                <option value="Ekiti">Ekiti</option>
                <option value="Enugu">Enugu</option>
                <option value="Federal Capital Territory (FCT)">Federal Capital Territory (FCT)</option>
                <option value="Gombe">Gombe</option>
                <option value="Imo">Imo</option>
                <option value="Jigawa">Jigawa</option>
                <option value="Kaduna">Kaduna</option>
                <option value="Kano">Kano</option>
                <option value="Katsina">Katsina</option>
                <option value="Kebbi">Kebbi</option>
                <option value="Kogi">Kogi</option>
                <option value="Kwara">Kwara</option>
                <option value="Lagos">Lagos</option>
                <option value="Nasarawa">Nasarawa</option>
                <option value="Niger">Niger</option>
                <option value="Ogun">Ogun</option>
                <option value="Ondo">Ondo</option>
                <option value="Osun">Osun</option>
                <option value="Oyo">Oyo</option>
                <option value="Plateau">Plateau</option>
                <option value="Rivers">Rivers</option>
                <option value="Sokoto">Sokoto</option>
                <option value="Taraba">Taraba</option>
                <option value="Yobe">Yobe</option>
                <option value="Zamfara">Zamfara</option>
              </select>
            </div>
            {selectedState === "Lagos" && (
              <div className="custom-select  mb-4">
                <select
                  value={selectedMode}
                  required
                  onChange={handleSelectMode}
                  className="selected-item flex items-center w-full py-1 bg-gray-200 px-3 rounded-md border-gray-800 border justify-between"
                >
                  <option value="" disabled  selected>Select Mode</option>
                  <option value="Pick Up">Pick Up</option>
                  <option value="Delivery">Delivery</option>
                  <option value="Installment service">Installment service</option>
                </select>
              </div>
            )}
            {selectedState === "Lagos" &&
              (selectedMode === "Delivery" || selectedMode === "Installment service") && (
                <div className={`custom-select py-3`}>
                  <select
                    value={selectedCity}
                    required
                    onChange={handleSelectCity}
                    className="selected-item flex items-center w-full rounded-md py-1 bg-gray-200 px-3 border-gray-800 border justify-between"
                  >
                    <option value="" disabled selected>Select City</option>
                    <option value="Lagos Island">Lagos Island</option>
                    <option value="Ikeja">Ikeja</option>
                    <option value="Victoria Island">Victoria Island</option>
                    <option value="Lekki">Lekki</option>
                    <option value="Ajah">Ajah</option>
                    <option value="Surulere">Surulere</option>
                    <option value="Yaba">Yaba</option>
                    <option value="Apapa">Apapa</option>
                    <option value="Ikorodu">Ikorodu</option>
                    <option value="Agege">Agege</option>
                    <option value="Badagry">Badagry</option>
                    <option value="Epe">Epe</option>
                  </select>
                </div>
              )}
            {selectedState === "Lagos" &&
              (selectedMode === "Delivery" || selectedMode === "Installment service") && (
                <div className={`py-3 max-w-[700px] m-auto`}>
                  <textarea
                    id="details"
                    name="details"
                    placeholder=" Detailed Address"
                    required
                    ref={otherDetailsRef}
                    className="bg-gray-300 border placeholder:text-gray-700 w-full border-gray-600 rounded pl-4 pr-4 py-1 outline-none resize-none overflow-hidden"
                    onInput={adjustTextareaHeight}
                  ></textarea>
                </div>
              )}
            <div className={`pt-3`}>
              <input
                type="text"
                required
                placeholder="Receiver's Name"
                className="outline-none border w-full placeholder:text-gray-800 border-gray-600 bg-gray-200 rounded pl-3 pr-4 py-1"
              />
            </div>
            <div className={`pt-6`}>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="bg-gray-200 rounded placeholder:text-gray-800 w-full pl-4 pr-4 py-1 outline-none border border-gray-600"
                placeholder="Receiver's Number"
              />
            </div>
            <div className={`py-4`}>
              <p>Note: Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quas ad quod autem ab voluptatibus.</p>
              <p className="py-3"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quas ad quod autem ab voluptatibus.</p>
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quas ad quod autem ab voluptatibus.</p>
            </div>
            <div className="bg-gray-100 sticky bottom-0 px-3 py-2 shadow-lg">
              <button type="submit" className="bg-gray-800 py-2 w-full rounded-md text-gray-100">Save</button>
            </div>
            <div className="py-10">
              <p className="text-center">In Partnership with txx</p>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Delivery;
