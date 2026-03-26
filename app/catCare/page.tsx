export default function CatCare() {
  const facts = [
    {title: "Nutrition", description: "Feed your cat a balanced diet with high-quality cat food. Fresh water is essential.",},
    {title: "Grooming",description: "Brush your cat regularly to reduce shedding and prevent hairballs.",},
    {title: "Exercise",description: "Provide toys and climbing spaces to keep your cat active and healthy.",},
    {title: "Healthcare",description: "Schedule regular vet check-ups and vaccinations for a long, happy life." },
    {title: "Litter Box",description: "Keep the litter box clean and in a quiet place to encourage good habits.",},
    {title: "Socialization",description: "Spend quality time with your cat to build trust and reduce stress.",},
  ];

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-[palevioletred] mb-4">Cat Care Tips</h1>
        <p className="text-lg text-gray-700">
          Essential tips to keep your cat happy, healthy, and loved.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {facts.map((fact, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-xl font-bold text-[palevioletred] mb-2">{fact.title}</h2>
            <p className="text-gray-600">{fact.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}