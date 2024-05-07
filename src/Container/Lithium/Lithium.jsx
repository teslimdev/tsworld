import React, { useState, useEffect } from "react";
import itemsData from "../../../src/itemsData.json";
import power4 from "../../../src/Assets/power4.png";
import { Link } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";

const Lithium = () => {
    const [lithiumItems, setLithiumItems] = useState([]);
    const [recentlyClickedItems, setRecentlyClickedItems] = useState(
    JSON.parse(localStorage.getItem("recentlyClickedItems")) || []
  );
  useEffect(() => {
    // Filter items with id 'lithium'
    const filteredItems = itemsData.filter((item) => item.id === "lithium");
    setLithiumItems(filteredItems);
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

  return (
    <div>
       <div className="">
      <div className="bg-[#14381f] fixed w-full">
        <div className=" flex items-center max-w-[1200px] m-auto px-4  py-2 gap-6 ">
            <p className=" text-white text-3xl"><Link to='/'><IoIosArrowRoundBack /></Link></p>
            <h2 className=" text-white text-[1.1rem] uppercase">
          lithium Batteries
        </h2>
        </div>
      </div>
      <div className="lithium max-w-[1200px] m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-20 pb-8 px-6">
        {lithiumItems.map((item, index) => (
        <div onClick={() => handleItemClick(item)}> 
              <Link 
          to={{
                  pathname: `/description`,
                  state: { item },
                }}
          >
            <div key={index} className="shadow-2xl h-[12rem] grid grid-cols-2">
            <img src={power4} alt="" className="h-[192px] w-full" /> {/* Using the imported image */}
            <div className="bg-[#14381f] text-white py-3 px-4">
              <h3 className="text-[.9rem] pb-2">{item.title}</h3>
              <ul className="list-disc pl-4">
                {item.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <p className="pt-2">{item.price}</p>
            </div>
          </div>
          </Link>
        </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Lithium
