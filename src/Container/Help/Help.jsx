import React, { useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { PiShoppingBagOpenFill } from "react-icons/pi";
import { MdKeyboardArrowRight, MdAdd, MdRemove } from "react-icons/md";
const Help = () => {
  const [selectedGuide, setSelectedGuide] = useState(null);
  const [selectedFAQ, setSelectedFAQ] = useState(null);
  const [expandedQuestion, setExpandedQuestion] = useState(null);
  const [showAllListItems, setShowAllListItems] = useState(true); // State to toggle list items on small screens
  const [showBackButton, setShowBackButton] = useState(false);

  const listItemData = {
    "Place an Order": {
      steps: [
        {
          title: "Step 1 : Lorem ipsum dolor sit amet",
          details: [
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
            "Vero, hic.",
          ],
        },
        {
          title: "Step 2 : Consectetur adipiscing elit",
          details: [
            "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          ],
        },
        {
          title: "Step 3 : Consectetur adipiscing elit",
          details: [
            "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          ],
        },
        {
          title: "Step 4 : Consectetur adipiscing elit",
          details: [
            "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          ],
        },
        {
          title: "Step 5 : Consectetur adipiscing elit",
          details: [
            "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          ],
        },
        // Add more steps as needed
      ],
    },
    "Track Order Status": {
      steps: [
        {
          title: "Step 1 : Lorem ipsum dolor sit amet",
          details: [
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
            "Vero, hic.",
          ],
        },
        {
          title: "Step 2 : Consectetur adipiscing elit",
          details: [
            "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          ],
        },
        {
          title: "Step 3 : Consectetur adipiscing elit",
          details: [
            "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          ],
        },
        {
          title: "Step 4 : Consectetur adipiscing elit",
          details: [
            "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          ],
        },
        {
          title: "Step 5 : Consectetur adipiscing elit",
          details: [
            "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          ],
        },
        // Add more steps as needed
      ],
    },
    "Returns and Refunds": {
      steps: [
        {
          title: "Step 1 : Lorem ipsum dolor sit amet",
          details: [
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
            "Vero, hic.",
          ],
        },
        {
          title: "Step 2 : Consectetur adipiscing elit",
          details: [
            "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          ],
        },
        {
          title: "Step 3 : Consectetur adipiscing elit",
          details: [
            "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          ],
        },
        {
          title: "Step 4 : Consectetur adipiscing elit",
          details: [
            "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          ],
        },
        {
          title: "Step 5 : Consectetur adipiscing elit",
          details: [
            "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          ],
        },
        // Add more steps as needed
      ],
    },
    "Shipping Information": {
      steps: [
        {
          title: "Step 1 : Lorem ipsum dolor sit amet",
          details: [
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
            "Vero, hic.",
          ],
        },
        {
          title: "Step 2 : Consectetur adipiscing elit",
          details: [
            "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          ],
        },
        {
          title: "Step 3 : Consectetur adipiscing elit",
          details: [
            "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          ],
        },
        {
          title: "Step 4 : Consectetur adipiscing elit",
          details: [
            "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          ],
        },
        {
          title: "Step 5 : Consectetur adipiscing elit",
          details: [
            "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          ],
        },
        // Add more steps as needed
      ],
    },
    "Payment Methods": {
      steps: [
        {
          title: "Step 1 : Lorem ipsum dolor sit amet",
          details: [
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
            "Vero, hic.",
          ],
        },
        {
          title: "Step 2 : Consectetur adipiscing elit",
          details: [
            "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          ],
        },
        {
          title: "Step 3 : Consectetur adipiscing elit",
          details: [
            "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          ],
        },
        {
          title: "Step 4 : Consectetur adipiscing elit",
          details: [
            "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          ],
        },
        {
          title: "Step 5 : Consectetur adipiscing elit",
          details: [
            "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          ],
        },
        // Add more steps as needed
      ],
    },
    // Add more list items as needed
  };
  //     const listItemInfo = {
  //     "Place an Order": "This guide explains how to place an order.",
  //     "Track Order Status": "This guide helps you track the status of your order.",
  //     "Returns and Refunds": "This guide provides information on returns and refunds.",
  //     "Shipping Information": "This guide covers shipping information and delivery times.",
  //     "Payment Methods": "This guide explains the payment methods available.",
  //   };
  const faqData = {
    delivery: {
      questions: [
        {
          question: "Question 1",
          answer: "Answer to question 1 for Place an Order.",
        },
        {
          question: "Question 2",
          answer: "Answer to question 2 for Place an Order.",
        },
        {
          question: "Question 2",
          answer: "Answer to question 2 for Track Order Status.",
        },
        {
          question: "Question 2",
          answer: "Answer to question 2 for Track Order Status.",
        },
      ],
    },
    "Track Order Status": {
      questions: [
        {
          question: "Question 3",
          answer: "Answer to question 1 for Track Order Status.",
        },
        {
          question: "Question 2",
          answer: "Answer to question 2 for Track Order Status.",
        },
        {
          question: "Question 2",
          answer: "Answer to question 2 for Track Order Status.",
        },
        {
          question: "Question 2",
          answer: "Answer to question 2 for Track Order Status.",
        },
      ],
    },
     "Track Order ": {
      questions: [
        {
          question: "Question 3",
          answer: "Answer to question 1 for Track Order Status.",
        },
        {
          question: "Question 2",
          answer: "Answer to question 2 for Track Order Status.",
        },
        {
          question: "Question 2",
          answer: "Answer to question 2 for Track Order Status.",
        },
        {
          question: "Question 2",
          answer: "Answer to question 2 for Track Order Status.",
        },
      ],
    },
     "Track  Status": {
      questions: [
        {
          question: "Question 3",
          answer: "Answer to question 1 for Track Order Status.",
        },
        {
          question: "Question 2",
          answer: "Answer to question 2 for Track Order Status.",
        },
        {
          question: "Question 2",
          answer: "Answer to question 2 for Track Order Status.",
        },
        {
          question: "Question 2",
          answer: "Answer to question 2 for Track Order Status.",
        },
      ],
    },
     " Order Status": {
      questions: [
        {
          question: "Question 3",
          answer: "Answer to question 1 for Track Order Status.",
        },
        {
          question: "Question 2",
          answer: "Answer to question 2 for Track Order Status.",
        },
        {
          question: "Question 2",
          answer: "Answer to question 2 for Track Order Status.",
        },
        {
          question: "Question 2",
          answer: "Answer to question 2 for Track Order Status.",
        },
      ],
    },
    // Other FAQ items
  };

  const handleGuideClick = (itemName) => {
    setSelectedGuide(itemName);
    setSelectedFAQ(null);
    setExpandedQuestion(null);
    setShowAllListItems(false); // Hide all list items on small screens when a guide item is clicked
    setShowBackButton(true); // Show the back button
  };

  const handleFAQClick = (itemName) => {
    setSelectedFAQ(itemName);
    setSelectedGuide(null);
    setExpandedQuestion(null);
    setShowAllListItems(false); // Hide all list items on small screens when an FAQ item is clicked
    setShowBackButton(true); // Show the back button
  };

  const toggleQuestion = (question) => {
    if (expandedQuestion === question) {
      setExpandedQuestion(null);
    } else {
      setExpandedQuestion(question);
    }
  };

  const toggleListItems = () => {
    setSelectedGuide(null);
    setSelectedFAQ(null);
    setShowBackButton(false); // Hide the back button when all list items are displayed
    setShowAllListItems(true); // Show all list items on small screens when button is clicked
  };
  
  return (
    <div>
      <div>
        <div className="bg-[#14381f] fixed w-full z-20">
          <div className="flex items-center justify-between max-w-[1200px] m-auto px-4 py-2">
            <p className="text-white text-3xl">
              <Link to="/">
                <IoIosArrowRoundBack />
              </Link>
            </p>
            <h2 className="text-white text-[1.1rem] uppercase">Help center</h2>
            <div></div>{" "}
            {/* This empty div creates space for the center alignment */}
          </div>
        </div>
      </div>

 <div className="py-16 md:hidden">
        <div className="max-w-[400px] m-auto md:m-0 px-3">
          {showBackButton && (
                <div className="mt-4">
                  <button onClick={toggleListItems} className="bg-gray-200 text-gray-800 py-2 px-4 rounded-md">
                    Back To All Topics
                  </button>
                </div>
              )}
          {!selectedGuide && !selectedFAQ && (
            <>
              <div>
                <h2 className="pb-3">Guides</h2>
                <ul className={`border pt-2 space-y-3 ${showAllListItems ? '' : 'hidden'} md:flex flex-col`}>
                  {Object.keys(listItemData).map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-between border-b pb-3 px-3"
                      onClick={() => handleGuideClick(item)}
                      style={{ cursor: "pointer" }}
                    >
                      <p className="flex items-center gap-2">
                        <PiShoppingBagOpenFill /> {item}
                      </p>
                      <MdKeyboardArrowRight />
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8">
                <h2 className="pb-3">Frequently Asked Questions</h2>
                <ul className={`border pt-2 space-y-3 ${showAllListItems ? '' : 'hidden'} md:flex flex-col`}>
                  {Object.keys(faqData).map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-between border-b pb-3 px-3"
                      onClick={() => handleFAQClick(item)}
                      style={{ cursor: "pointer" }}
                    >
                      <p className="flex items-center gap-2">
                        <PiShoppingBagOpenFill /> {item}
                      </p>
                      <MdKeyboardArrowRight />
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}

          {selectedGuide && (
            <div className="pt-8">
              <h2 className="font-bold">{selectedGuide}</h2>
              <div>
                {listItemData[selectedGuide].steps.map((step, index) => (
                  <div key={index} className="pt-6">
                    <h3 className="font-semibold">{step.title}</h3>
                    <ul className="list-disc px-6 space-y-2 pt-2">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="text-[0.9rem]">
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
          {selectedFAQ && (
            <div className="pt-8">
              <h2 className="font-bold pb-3">{selectedFAQ}</h2>
              <div className="border">
                {faqData[selectedFAQ].questions.map((faq, index) => (
                  <div
                    key={index}
                    className={`pt-4 pb-4 px-3 border-b border-gray-300 ${
                      expandedQuestion === faq.question ? "bg-gray-100" : ""
                    }`}
                    onClick={() => toggleQuestion(faq.question)}
                    style={{ cursor: "pointer" }}
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="font-semibold">{faq.question}</h3>
                      {expandedQuestion === faq.question ? (
                        <MdRemove />
                      ) : (
                        <MdAdd />
                      )}
                    </div>
                    {expandedQuestion === faq.question && (
                      <p className="text-[0.9rem] pt-2">{faq.answer}</p>
                    )}
                  </div>
                ))}
              </div>
             
            </div>
          )}
        </div>
      </div>

          <div className="py-16 hidden md:block">
        <div className=" px-3 max-w-[1200px] m-auto">
         <div className=" grid grid-cols-2 ">
             <div className=" max-w-[400px]">
            <div>
            <h2 className="pb-3">Guides</h2>
            <ul className="border pt-2 space-y-3">
              {Object.keys(listItemData).map((item, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between border-b pb-3 px-3"
                  onClick={() => handleGuideClick(item)}
                  style={{ cursor: "pointer" }}
                >
                  <p className="flex items-center gap-2">
                    <PiShoppingBagOpenFill /> {item}
                  </p>
                  <MdKeyboardArrowRight />
                </li>
              ))}
            </ul>
          </div>
          <div className="pt-8">
            <h2 className="pb-3">Frequently Asked Questions</h2>
            <ul className="border pt-2 space-y-3">
              {Object.keys(faqData).map((item, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between border-b pb-3 px-3"
                  onClick={() => handleFAQClick(item)}
                  style={{ cursor: "pointer" }}
                >
                  <p className="flex items-center gap-2">
                    <PiShoppingBagOpenFill /> {item}
                  </p>
                  <MdKeyboardArrowRight />
                </li>
              ))}
            </ul>
          </div>
          </div>

          <div>
            {selectedGuide && (
            <div className="pt-8">
              <h2 className="font-bold">{selectedGuide}</h2>
              <div>
                {listItemData[selectedGuide].steps.map((step, index) => (
                  <div key={index} className="pt-6">
                    <h3 className="font-semibold">{step.title}</h3>
                    <ul className="list-disc px-6 space-y-2 pt-2">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="text-[0.9rem]">
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
          {selectedFAQ && (
            <div className="pt-8">
              <h2 className="font-bold pb-3">{selectedFAQ}</h2>
              <div className="border">
                {faqData[selectedFAQ].questions.map((faq, index) => (
                  <div
                    key={index}
                    className={`pt-4 pb-4 px-3 border-b border-gray-300 ${
                      expandedQuestion === faq.question ? "bg-gray-100" : ""
                    }`}
                    onClick={() => toggleQuestion(faq.question)}
                    style={{ cursor: "pointer" }}
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="font-semibold">{faq.question}</h3>
                      {expandedQuestion === faq.question ? (
                        <MdRemove />
                      ) : (
                        <MdAdd />
                      )}
                    </div>
                    {expandedQuestion === faq.question && (
                      <p className="text-[0.9rem] pt-2">{faq.answer}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
          </div>
         </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
