import React, { useState, useEffect } from "react";
import { Footer, Header } from "../../Compnents";
import itemsData from "../../../src/itemsData.json";
import power from "../../../src/Assets/power.jpg";
import power2 from "../../../src/Assets/power2.png";
import power3 from "../../../src/Assets/power3.png";
import power4 from "../../../src/Assets/power4.png";
import power5 from "../../../src/Assets/power5.png";
import power6 from "../../../src/Assets/power6.png";
import power7 from "../../../src/Assets/power7.png";
import power8 from "../../../src/Assets/power8.png";
import power9 from "../../../src/Assets/power9.png";
import { Link } from "react-router-dom";

const images = {
  "power.jpg": power,
  "power2.png": power2,
  "power3.png": power3,
  "power4.png": power4,
  "power5.png": power5,
  "power6.png": power6,
  "power7.png": power7,
  "power8.png": power8,
  "power9.png": power9,
};

const Cart = () => {
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [itemsToRemove, setItemsToRemove] = useState([]);
  const [quantity, setQuantity] = useState({}); // State for item quantity

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const getItemDetails = (itemId) => {
    return itemsData.find((item) => item.itemId === itemId);
  };

  // Load cart items from localStorage on component mount
  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  useEffect(() => {
    const initialQuantities = cartItems.reduce((acc, cartItem) => {
      acc[cartItem.itemId] = 1; // Initialize quantity to 1 for each item
      return acc;
    }, {});
    setQuantity(initialQuantities);
  }, [cartItems]);

  const handleAddToCartClick = () => {
    // Example: Add a new item to the cart
    const newItem = {
      itemId: "newItemId", // Replace this with the actual itemId of the new item
      // Add other properties of the item if needed
    };

    // Append the new item to the existing cartItems
    const updatedCartItems = [...cartItems, newItem];
    setCartItems(updatedCartItems);

    // Update localStorage with the updated cartItems
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

 const handleRemoveItemClick = (itemId) => {
  // Add itemId to itemsToRemove state
  setItemsToRemove([...itemsToRemove, itemId]);

  // Remove the item from cartItems state
  const updatedCartItems = cartItems.filter((cartItem) => cartItem.itemId !== itemId);
  setCartItems(updatedCartItems);

  // Update localStorage with the updated cartItems
  localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
};

const handleChangeQuantity = (itemId, newQuantity) => {
    // Ensure quantity does not go below 1
    newQuantity = Math.max(newQuantity, 1);
    setQuantity({ ...quantity, [itemId]: newQuantity });
    // Update local storage with the new quantity
    localStorage.setItem(`quantity_${itemId}`, newQuantity);
};



  const filteredCartItems = cartItems.filter(
    (cartItem) => !itemsToRemove.includes(cartItem.itemId)
  );

return (
  <div>
    <Header />
    <div className="h-lvh overflow-auto">
      <div className="pt-28 flex flex-col justify-center items-center">
        {filteredCartItems.length === 0 ? (
          <div className="empty-cart-container">
            <h2 className="text-[1rem] pb-2 text-center">Your cart is empty.</h2>
            <div>
              <button className="bg-gray-800 text-gray-300 py-2 px-7 rounded-md">Start shopping</button>
            </div>
          </div>
        ) : (
          <div className="place-self-start pt-6">
            <div className="items grid md:grid-cols-2 gap-4 px-3 overflow-auto">
              {filteredCartItems.map((cartItem) => {
                const itemDetails = getItemDetails(cartItem.itemId);
                return (
                  <div key={cartItem.itemId} className="w-fit">
                   <Link
                        to={{
                          pathname: `/description/${cartItem.itemId}`,
                          state: { cartItem},
                        }}
                      >
                    <div className="shadow-2xl w-fit h-[12rem] grid grid-cols-2">
                      <img src={images[itemDetails.imageSrc]} alt="" className="h-[192px] w-fit" />
                      <div className="rounded-tr-lg  bg-gray-500 px-3 py-3">
                        <h3 className="text-[.9rem] pb-2">{itemDetails.title}</h3>
                        <ul className="list-disc pl-4">
                          {itemDetails.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                          ))}
                        </ul>
                        <p className="pt-5">{itemDetails.price}</p>
                      </div>
                    </div>
                    </Link>
                    <div className="rounded-br-lg  py-2 px-4 grid grid-cols-2  bg-gray-900">
                     <div className="text-white pt-1">
                       <button onClick={() => handleRemoveItemClick(cartItem.itemId)}>Remove</button>
                     </div>
                     <div className="quantity flex items-center">
                     <div className={`w-12 h-8 rounded-md text-center ${quantity[cartItem.itemId] === 1 ? 'bg-gray-400' : 'bg-gray-200'}`}>
                        <button className="border border-gray-800  w-full h-full text-[1.2rem] " onClick={() => handleChangeQuantity(cartItem.itemId, quantity[cartItem.itemId] - 1)}>-</button>
                     </div>
                       <span className="w-full text-center text-gray-200">{quantity[cartItem.itemId]}</span>
                      <div className="w-12 h-8 bg-gray-200 rounded-md text-center">
                         <button className="border border-gray-800  w-full h-full text-[1.2rem] "  onClick={() => handleChangeQuantity(cartItem.itemId, quantity[cartItem.itemId] + 1)}>+</button>
                      </div>
                     </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
    <Footer />
  </div>
);
};

export default Cart;
