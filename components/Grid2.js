"use client";
import Card1 from "./card1";
import Card2 from "./card2";
import { useState } from "react";

export default function Grid2({ items, cardType = "card1" }) {
  const [popupIndex, setPopupIndex] = useState(null); // store index of clicked card

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {items.map((item, index) => (
          <div key={index} className="relative">
            {cardType === "card1" ? (
              <Card1
                {...item}
                onClick={() =>
                  item.buttonText === "See More"
                    ? setPopupIndex(index)
                    : null
                }
              />
            ) : (
              <Card2 {...item} />
            )}

          
            {popupIndex === index && (
              <div className="bg-gray-100 border border-gray-300 rounded-lg p-4 mt-2 relative">
                {/* X button */}
                <button
                  onClick={() => setPopupIndex(null)}
                  className="absolute top-2 right-2 text-gray-500 hover:text-gray-900 font-bold text-xl"
                >
                  ×
                </button>

                <h3 className="text-lg font-bold text-[palevioletred]">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}