import React, { useState, useEffect } from "react";
import itemsData from "../../../src/itemsData.json";
import power4 from "../../../src/Assets/power4.png";
import { Link } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Footer } from "../../Compnents";

const Solar = () => {
   const [loading, setLoading] = useState(true);
    const [solarItems, setSolarItems] = useState([]);
    const [recentlyClickedItems, setRecentlyClickedItems] = useState(
    JSON.parse(localStorage.getItem("recentlyClickedItems")) || []
  );
  useEffect(() => {
    // Filter items with id 'lithium'
    const filteredItems = itemsData.filter((item) => item.id === "solar");
    setSolarItems(filteredItems);
  }, []);
  

 const handleItemClick = (item) => {
  // Check if the item with the same itemId already exists in recentlyClickedItems
  const itemExists = recentlyClickedItems.some(
    (i) => i.itemId === item.itemId
  );

  // If the item doesn't exist, add it to the array
  if (!itemExists) {
    const updatedRecentlyClickedItems = [...recentlyClickedItems, item];
    setRecentlyClickedItems(updatedRecentlyClickedItems);
    localStorage.setItem(
      "recentlyClickedItems",
      JSON.stringify(updatedRecentlyClickedItems)
    );
  }
};
useEffect(() => {
   

    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

   if (loading) {
    return (
      <div className="fflex justify-center items-center relative container  bg-gray-300  h-svh">
        <div className="absolute top-[20rem]  sl:top-[25rem] box border"></div>
      </div>
    );
  }

  return (
    <div>
       <div className=" bg-gray-600">
        <div className="bg-gray-400 fixed w-full z-20">
          <div className="flex items-center justify-between max-w-[1200px] m-auto px-3 py-2">
            <p className="text-black text-3xl">
              <Link to="/">
                <IoIosArrowRoundBack />
              </Link>
            </p>
            <h2 className="text-black text-[1.1rem] uppercase">Solar Panels</h2>
            <div></div>{" "}
            {/* This empty div creates space for the center alignment */}
          </div>
        </div>
     <div className="max-w-[1000px] m-auto bg-gray-300 ">
       <div className="lithium max-w-[900px] m-auto grid grid-cols-1 md:grid-cols-2  gap-4 pt-20 pb-8 px-6">
        {solarItems.map((item, index) => (
        <div onClick={() => handleItemClick(item)}> 
              <Link 
           to={`/description/${item.itemId}`} key={index}
          >
            <div key={index} className="shadow-2xl h-[12rem] grid grid-cols-2 relative">
            <img src={power4} alt="" className="h-[192px] w-full" /> {/* Using the imported image */}
            <div className="bg-gray-500  py-3 px-4">
              <h3 className="text-[.9rem] pb-2">{item.title}</h3>
              <ul className="list-disc pl-4">
                {item.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <p className="absolute bottom-4">₦ {item.price}</p>
            </div>
          </div>
          </Link>
        </div>
        ))}
      </div>
     </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Solar
