import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";

const Repair = () => {
  const otherDetailsRef = useRef(null);
  const [fileButtonText, setFileButtonText] = useState("Browse File");
  const [filePreview, setFilePreview] = useState(null);
  const [fileSelected, setFileSelected] = useState(false);
 const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const adjustTextareaHeight = () => {
    const textarea = otherDetailsRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.size > 20 * 1024 * 1024) {
      alert("File size should not exceed 20MB.");
      event.target.value = ""; // Clear the file input
    } else {
      setFileButtonText(file.name);
      const reader = new FileReader();
      reader.onload = () => {
        if (file.type.startsWith("image")) {
          setFilePreview(reader.result);
        } else if (file.type.startsWith("video")) {
          setFilePreview(URL.createObjectURL(file));
        }
      };
      reader.readAsDataURL(file);
      setFileSelected(true);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted!");
    if (!fileSelected) {
      alert("Please select a file.");
      return;
    }
    console.log("File selected:", fileSelected);
    // Additional form submission logic here...

    // Reset form after submission
    event.target.reset();
    setFileButtonText("Browse File");
    setFilePreview(null);
    setFileSelected(false);

    // Show success message
    setShowSuccessMessage(true);
    // Hide success message after 3 seconds
    setTimeout(() => setShowSuccessMessage(false), 5000);
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
            <h2 className="text-black text-[1.1rem] uppercase">Repair Request</h2>
            <div></div> {/* This empty div creates space for the center alignment */}
          </div>
        </div>
      </div>
      <div className="pt-16">
        <h2 className="text-center capitalize text-[1.2rem] font-semibold text-gray-700">Please fill in the form below</h2>
        <div className="pt-6 max-w-[400px] md:max-w-[600px] px-4 m-auto">
          <p className="text-[0.9rem] pb-6">
            <span className="text-[1rem] font-bold">Note:</span> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo minima ex enim adipisci eum sit temporibus in placeat vel? Cumque!
          </p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <br />
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Joe"
              className="outline-none border w-full mb-6 mt-3 border-gray-600 bg-gray-300 rounded pl-4 pr-4 py-1"
            />
            <br />
            <label htmlFor="phone">Mobile No</label>
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
            <div className="">
              <label htmlFor="details" className="text-[1.1rem]">State The Issue</label>
              <br />
              <div className="pt-3">
                <textarea
                  id="details"
                  name="details"
                  required
                  ref={otherDetailsRef}
                  className="bg-gray-300 border w-full border-gray-600 rounded pl-4 pr-4 py-1 outline-none resize-none overflow-hidden"
                  onInput={adjustTextareaHeight}
                ></textarea>
              </div>
            </div>
            <div className="pt-6">
              <label htmlFor="attachment" className="text-[1.1rem] block mb-2">Attach a Picture or Video (Max 20MB)</label>
              <label htmlFor="attachment" className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded outline-none cursor-pointer inline-block mb-4">
                {fileButtonText}
              </label>
              <input
                type="file"
                id="attachment"
                name="attachment"
                accept="image/*,video/*"
                className="hidden"
                onChange={handleFileChange}
                required // Making file input required
              />
            {filePreview && (
              <div className="border border-gray-300 rounded-lg overflow-hidden" style={{ maxHeight: "350px" }}>
                {filePreview.startsWith("data:image") ? (
                  <img src={filePreview} alt="Preview" className="block w-full" style={{ maxHeight: "100%", width: "auto" }} />
                ) : (
                  <video key={filePreview} controls className="block w-full" style={{ maxHeight: "100%", width: "auto" }}>
                    <source src={filePreview} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
            )}
            </div>
            <p className="py-6">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus assumenda ad illo saepe officia facere totam animi tenetur consectetur! Fugit quis culpa dolorum hic quos at illum, aspernatur dicta vel.</p>
            <input type="checkbox" required />
            <label htmlFor=""> I agree to the above condition</label>
            <br />
            <div className="pb-12">
              <button type="submit" className="mt-4 bg-gray-500 px-4 py-2 w-full rounded">Submit</button>
            </div>
          </form>
        </div>
      </div>
       <div className=" px-6">
        {showSuccessMessage && (
      <div className="fixed top-0 left-0 w-full px-6 h-full flex items-center justify-center">
        <div className="bg-gray-600 text-white shadow-md rounded p-6">
          <h2 className="text-lg font-semibold mb-4">Request Sent Successfully!</h2>
          <p className=" pt-4 text-[1rem]">Your repair request has been submitted successfully.</p>
        </div>
      </div>
    )}
       </div>
    </div>
  );
};

export default Repair;

