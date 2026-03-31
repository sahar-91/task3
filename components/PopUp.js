"use client";

export default function PopUp({ isOpen, onClose, title, description, age, breed }) {
  if (!isOpen) return null; // If not open, render nothing

  return (
  
    <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm bg-black/30">
      <div className="bg-white rounded-xl shadow-lg p-6 max-w-md w-11/12 relative">
       
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-900 text-xl font-bold"
        >
          x
        </button>

       
        {title && <h2 className="text-2xl font-bold text-[palevioletred] mb-4">{title}</h2>}
        {description && <p className="mb-2 text-gray-700">{description}</p>}
        {age && <p className="mb-1 text-gray-600">Age: {age}</p>}
        {breed && <p className="mb-1 text-gray-600">Breed: {breed}</p>}
      </div>
    </div>
  );
}