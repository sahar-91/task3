export default function ContactForm({ fields, buttonText }) {
  return (
    <form className="flex flex-col gap-4">
      {fields.map((f, idx) =>
        f.type === "textarea" ? (
          <textarea
            key={idx}
            placeholder={f.placeholder}
            rows={f.rows || 5}
            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[palevioletred]"
          />
        ) : (
          <input
            key={idx}
            type={f.type}
            placeholder={f.placeholder}
            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[palevioletred]"
          />
        )
      )}
      <button
        type="submit"
        className="px-4 py-2 bg-[palevioletred] cursor-pointer text-white rounded-lg hover:scale-105 transform transition-transform duration-300"
      >
        {buttonText}
      </button>
    </form>
  );
}