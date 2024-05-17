import React, { useState, useEffect, useRef } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { Footer } from "../../Compnents";

const Upgrade = () => {
    const [batteryType, setBatteryType] = useState("");
const otherDetailsRef = useRef(null);
  const handleBatteryTypeChange = (event) => {
    setBatteryType(event.target.value);
  };

   const adjustTextareaHeight = () => {
    const textarea = otherDetailsRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  useEffect(() => {
    adjustTextareaHeight(); // Adjust height initially
  }, []);

  return (
    <div>
      <div>
        <div className="bg-gray-400 fixed w-full z-20">
          <div className="flex items-center justify-between max-w-[1200px] m-auto px-3 py-2">
            <p className="text-black text-3xl">
              <Link to="/">
                <IoIosArrowRoundBack />
              </Link>
            </p>
            <h2 className="text-black text-[1.1rem] uppercase">
              Upgrade Request
            </h2>
            <div></div>{" "}
            {/* This empty div creates space for the center alignment */}
          </div>
        </div>
      </div>
    <div className="pt-16">
        <h2 className="text-center capitalize text-[1.2rem] font-semibold text-gray-700">please fill in the form below</h2>
        <div className="pt-6 max-w-[400px] md:max-w-[600px] px-4 m-auto">
          <form action="">
            <label htmlFor="">Name</label>
            <br />
            <input
              type="text"
              required
              placeholder="Joe"
              className="outline-none border w-full mb-6 mt-3 border-gray-600 bg-gray-300 rounded pl-4 pr-4 py-1"
            />
            <br />
            <label htmlFor="">Mobile No</label>
            <br />
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              className="bg-gray-300 rounded mb-6 mt-3 w-full pl-4 pr-4 py-1 outline-none border border-gray-600"
              placeholder="08123456789"
            />
            <br />
            <label htmlFor="batteryType">Type of Battery</label>
            <br />
            <select
              id="batteryType"
              name="batteryType"
              required
              className="bg-gray-300 border w-full  mt-3 cursor-pointer border-gray-600 rounded pl-4 pr-4 py-1 outline-none"
              value={batteryType}
              onChange={handleBatteryTypeChange}
            >
              <option value="" disabled>
                Select an option
              </option>
              <option value="companyBattery">Company's lithium battery</option>
              <option value="otherLithiumBattery">Lithium battery</option>
              <option value="otherBattery">Other battery</option>
            </select>

            {batteryType === "companyBattery" && (
              <div className="company pt-6">
                <label htmlFor="capacity">Capacity of Battery</label>
                <select
                  id="capacity"
                  name="capacity"
                  required
                  className="bg-gray-300 border cursor-pointer w-full mb-6 mt-3 border-gray-600 rounded pl-4 pr-4 py-1 outline-none"
                >
                  <option value="" disabled selected>
                    Select an option
                  </option>
                  <option value="100kMah">100kMah</option>
                  <option value="160kMah">160kMah</option>
                  <option value="200kMah">200kMah</option>
                </select>
                <label htmlFor="desiredCapacity">To which capacity of battery</label>
                <select
                  id="desiredCapacity"
                  name="desiredCapacity"
                  required
                  className="bg-gray-300 border cursor-pointer w-full mt-3 border-gray-600 rounded pl-4 pr-4 py-1 outline-none"
                >
                  <option value="" disabled selected>
                    Select an option
                  </option>
                  <option value="160kMah">160kMah</option>
                  <option value="160kMah">160kMah</option>
                  <option value="160kMah">160kMah</option>
                </select>
              </div>
            )}

            {(batteryType === "otherLithiumBattery" || batteryType === "otherBattery") && (
              <div className="other pt-6">
                <label htmlFor="otherDetails">State capacity of battery and desired upgrade capacity</label>
                <br />
                <div className="pt-2">
                  <textarea
                    id="otherDetails"
                    name="otherDetails"
                    required
                    ref={otherDetailsRef}
                    className="bg-gray-300 border w-full border-gray-600 rounded pl-4 pr-4 py-1 outline-none resize-none overflow-hidden"
                    onInput={adjustTextareaHeight}
                  ></textarea>
                </div>
              </div>
            )}

            <p className=" py-6">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus assumenda ad illo saepe officia facere totam animi tenetur consectetur! Fugit quis culpa dolorum hic quos at illum, aspernatur dicta vel.</p>
            <input type="checkbox" 
                required
            /> 
             <label htmlFor=""> I agree to the above condition</label>
             <br />
           <div className=" pb-12">
             <button className="mt-4 bg-gray-500 px-4 py-2 w-full rounded">Submit</button>
           </div>
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Upgrade;
