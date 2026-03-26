export default function Card2({ title, description }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
      {title && <h2 className="text-xl font-bold text-[palevioletred] mb-2">{title}</h2>}
      {description && <p className="text-gray-600">{description}</p>}
    </div>
  );
}