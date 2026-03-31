"use client";

export default function PopUp({ isOpen, onClose, title, description }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-11/12 max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-900 font-bold text-xl"
        >
          ×
        </button>
        <h2 className="text-xl font-bold text-[palevioletred] mb-4">{title}</h2>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
}