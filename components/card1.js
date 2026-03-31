export default function Card1({ image, title, description, buttonText, buttonLink, onClick }) {
  return (
    <div className="container mx-auto px-4 group">
      <div className="bg-white rounded-lg shadow-md group-hover:shadow-xl p-4">
        {image && (
          <div className="overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-48 transition duration-300 group-hover:scale-110 object-cover rounded-md mb-4"
            />
          </div>
        )}
        {title && (
          <h3 className="text-xl font-bold mb-2 text-[palevioletred] group-hover:text-pink-600">
            {title}
          </h3>
        )}
        {description && <p className="mb-4 text-gray-700">{description}</p>}
        {buttonText && (
          <button
            onClick={onClick}  // <-- use button instead of <a> and attach onClick
            className="inline-block px-4 py-2 bg-[palevioletred] text-white rounded-lg group-hover:scale-110 transform duration-300 ease-in-out"
          >
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
}