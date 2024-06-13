import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import cities from "../../../src/cities.json"; // Adjust the path to your cities.json file

const Confirm = () => {
  const formData = JSON.parse(localStorage.getItem("deliveryForm"));
  const totalQuantity = localStorage.getItem("totalQuantity");
  const totalPrice = parseFloat(localStorage.getItem("totalPrice")); // Ensure totalPrice is parsed as a float
  const totalWeight = parseFloat(localStorage.getItem("totalWeight")); // Ensure totalWeight is parsed as a float
  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate("/delivery");
  };

  // Initialize delivery fee
  let deliveryFee = 0;
  const installmentServicePrice = 20000;

  if (formData.selectedMode === "Delivery") {
    if (formData.selectedState === "Lagos") {
      // Find the city in the cities data
      const cityData = cities["Lagos"]?.find((city) => city.city === formData.selectedCity);
      if (cityData) {
        deliveryFee = cityData.price; // Directly assign the price for Lagos
      }
    } else {
      // Find the city in the cities data for states other than Lagos
      const cityData = cities[formData.selectedState]?.find((city) => city.city === formData.selectedCity);
      if (cityData) {
        deliveryFee = cityData.price.delivery * totalWeight;
      }
    }
  } else if (formData.selectedMode === "Pick Up") {
    if (formData.selectedState !== "Lagos") {
      // Find the city in the cities data for states other than Lagos
      const cityData = cities[formData.selectedState]?.find((city) => city.city === formData.selectedCity);
      if (cityData) {
        deliveryFee = cityData.price.pickup * totalWeight;
      }
    }
  }

  // Determine if installment service should be shown
  const showInstalmentService = formData.selectedMode === "Installment Service";

  // Condition to hide City and Address based on mode and state
  const hideCity = formData.selectedMode === "Pick Up" && formData.selectedState === "Lagos";
  const hideAddress = formData.selectedMode === "Pick Up";

  // Calculate total amount
  const totalAmount = showInstalmentService
    ? totalPrice + deliveryFee + installmentServicePrice
    : totalPrice + deliveryFee;

  return (
    <div>
      <div className="bg-gray-400 fixed w-full z-20">
        <div className="flex items-center justify-between max-w-[1200px] m-auto px-3 py-2">
          <p className="text-black text-3xl">
            <Link to="/cart">
              <IoIosArrowRoundBack />
            </Link>
          </p>
          <h2 className="text-black text-[1.1rem] uppercase">Order Confirmation</h2>
          <div></div>
        </div>
      </div>

      <div className="pt-20">
        <div className="max-w-[700px] m-auto px-3">
          <h2 className="bg-gray-300 py-2 rounded-tl-lg rounded-tr-lg pl-4">Order Summary</h2>
          <ul className="py-3 bg-gray-200 mt-2 px-3 rounded-bl-lg rounded-br-lg">
            <li className="flex items-center justify-between pt-2">
              <p>Items Total ({totalQuantity})</p> <p>₦{totalPrice}</p>
            </li>
            {formData.selectedState !== "Lagos" && (
              <li className="flex items-center justify-between pt-2">
                <p>Total Weight</p> <p>{totalWeight}Kg</p>
              </li>
            )}
            <li className="flex items-center justify-between pt-2">
              <p>Delivery Fees</p> <p>₦{deliveryFee}</p>
            </li>
            {showInstalmentService && (
              <li className="flex items-center justify-between py-2">
                <p>Installment Service</p> <p>₦{installmentServicePrice}</p>
              </li>
            )}
            <li className="flex items-center justify-between pt-2 border-t border-gray-400">
              <p>Total</p> <p>₦{totalAmount}</p>
            </li>
          </ul>
        </div>
        <div className="py-6">
          <div className="max-w-[700px] m-auto px-3">
            <div className="bg-gray-300 py-2 rounded-tl-lg rounded-tr-lg px-4 flex items-center justify-between">
              <h2>Order Details</h2>
              <button onClick={handleEditClick}>Edit</button>
            </div>
            <ul className="py-3 bg-gray-200 mt-2 px-3 rounded-bl-lg rounded-br-lg">
              <li className="flex items-center gap-3 py-2 border-b border-gray-400">
                <p>State:</p> <p>{formData.selectedState}</p>
              </li>
              <li className="flex items-center gap-3 py-2 border-b border-gray-400">
                <p>Mode:</p> <p>{formData.selectedMode}</p>
              </li>
              {!hideCity && (
                <li className="flex items-center gap-3 py-2 border-b border-gray-400">
                  <p>City:</p> <p>{formData.selectedCity}</p>
                </li>
              )}
              {!hideAddress && (
                <li className="flex gap-3 py-2 border-b border-gray-400">
                  <p>Address:</p> <p>{formData.detailedAddress}</p>
                </li>
              )}
              <li className="flex items-center gap-3 py-2 border-b border-gray-400">
                <p>Name:</p> <p>{formData.receiversName}</p>
              </li>
              <li className="flex items-center gap-3 py-2">
                <p>Number:</p> <p>{formData.receiversNumber}</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-gray-100 lg:rounded-md sticky bottom-0 px-3 py-2 shadow-lg">
          <button type="submit" className="bg-gray-800 py-2 w-full rounded-md text-gray-100">
            Proceed To Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Confirm;


