import Card1 from "./card1";
import Card2 from "./card2";

export default function Grid2({ items, cardType = "card1"||"card2" }) {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {items.map((item, index) => 
          cardType === "card1" ? (
            <Card1 key={index} {...item} />
          ) : (
            <Card2 key={index} {...item} />
        ))}
      </div>
    </div>
  );
}