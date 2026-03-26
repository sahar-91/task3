import Grid2 from "@/components/Grid2";
import Banner from "@/components/Banner";

const facts = [
  { title: "Nutrition", description: "Feed your cat a balanced diet with high-quality cat food. Fresh water is essential." },
  { title: "Grooming", description: "Brush your cat regularly to reduce shedding and prevent hairballs." },
  { title: "Exercise", description: "Provide toys and climbing spaces to keep your cat active and healthy." },
  { title: "Healthcare", description: "Schedule regular vet check-ups and vaccinations for a long, happy life." },
  { title: "Litter Box", description: "Keep the litter box clean and in a quiet place to encourage good habits." },
  { title: "Socialization", description: "Spend quality time with your cat to build trust and reduce stress." },
];

export default function CatCare() {
  return (
    <>
      <Banner
        title="Cat Care Tips"
        description="Essential tips to keep your cat happy, healthy, and loved."
        bgImage="/cat-banner.jpeg"
      />
      <Grid2 items={facts} cardType="card2" />
    </>
  );
}