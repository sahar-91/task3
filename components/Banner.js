export default function Banner({ title, description, bgImage, titleClass=""}) {
  return (
    <div
      className={`bg-cover p-20 text-white flex items-center`}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="container mx-auto px-4">
        <h1 className={`text-4xl font-bold mb-4 ${titleClass}`}>{title}</h1>
        <p className="max-w-100 w-full text-lg">{description}</p>
      </div>
    </div>
  );
}