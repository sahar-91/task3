"use client";
import Card1 from "./card1";
import Card2 from "./card2";
import {useState} from "react";
import PopUp from "./PopUp";

export default function Grid2({ items, cardType = "card1" }) {
  const [popupData, setPopupData] = useState(null);

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {items.map((item, index) =>
          cardType === "card1" ? (
            <Card1
              key={index}
              {...item}
              onClick={() =>
                item.buttonText === "See More"
                  ? setPopupData(item)
                  : null
              }
            />
          ) : (
            <Card2 key={index} {...item} />
          )
        )}
      </div>


      <PopUp
        isOpen={!!popupData}
        onClose={() => setPopupData(null)}
        title={popupData?.title}
        description={popupData?.description}
        age={popupData?.age}
        breed={popupData?.breed}
      />
    </div>
  );
}