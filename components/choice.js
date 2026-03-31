"use client";
import { useState } from "react";
import PopUp from "./PopUp"; 

export default function Choice({ facts }) {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [showPopup, setShowPopup] = useState(false);


  const handleChange = (title) => {
    if (selectedOptions.includes(title)) {
      setSelectedOptions(selectedOptions.filter((t) => t !== title));
    } else {
      setSelectedOptions([...selectedOptions, title]);
    }
  };

 
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold text-[palevioletred] mb-6 text-center">
        Cat Care Survey
      </h2>
      <p className="text-gray-600 text-center mb-6">
        Which of the above facts do you find most useful? (Select all that apply)
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mx-auto">
        {facts.map((fact, index) => (
          <label key={index} className="flex items-center gap-2 text-gray-700">
            <input
              type="checkbox"
              value={fact.title}
              checked={selectedOptions.includes(fact.title)}
              onChange={() => handleChange(fact.title)}
              className="w-4 h-4 accent-[palevioletred] cursor-pointer"
            />
            {fact.title}
          </label>
        ))}

        <button
          type="submit"
          className="mt-4 px-4 py-2 bg-[palevioletred] text-white rounded-lg hover:bg-pink-600 cursor-pointer transition-colors duration-300"
        >
          Submit
        </button>
      </form>

      <PopUp
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
        title="Thank you for your feedback!"
        description={
          selectedOptions.length > 0
            ? `You selected: ${selectedOptions.join(", ")}`
            : "You didn't select any options."
        }
      />
    </div>
  );
}