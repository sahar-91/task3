"use client";
import { useState } from "react";
import Grid2 from "@/components/Grid2";
import Banner from "@/components/Banner";
import Choice from "@/components/choice";
import CategoryFilter from "@/components/CategoryFilter";
import According from "@/components/according";

export default function CatCare() {
  const [category, setCategory] = useState("All");

  const facts = [
    { title: "Nutrition", description: "Feed your cat a balanced diet with high-quality cat food. Fresh water is essential.", category: "Health" },
    { title: "Grooming", description: "Brush your cat regularly to reduce shedding and prevent hairballs.", category: "Care" },
    { title: "Exercise", description: "Provide toys and climbing spaces to keep your cat active and healthy.", category: "Health" },
    { title: "Healthcare", description: "Schedule regular vet check-ups and vaccinations for a long, happy life.", category: "Health" },
    { title: "Litter Box", description: "Keep the litter box clean and in a quiet place to encourage good habits.", category: "Care" },
    { title: "Socialization", description: "Spend quality time with your cat to build trust and reduce stress.", category: "Behavior" },
    { title: "Hydration", description: "Always provide fresh water and monitor your cat’s drinking habits.", category: "Health" },
    { title: "Safe Spaces", description: "Provide hiding spots and quiet areas where your cat can relax.", category: "Environment" },
    { title: "Scratching Posts", description: "Offer scratching posts to maintain claws and prevent furniture damage.", category: "Behavior" },
    { title: "Playtime", description: "Interactive play strengthens your bond and stimulates your cat’s mind.", category: "Behavior" },
    { title: "Temperature Comfort", description: "Ensure your cat has warm and cool spots for comfort.", category: "Environment" },
    { title: "Dental Care", description: "Brush your cat’s teeth or provide dental treats to prevent oral issues.", category: "Health" },
  ];

  const according = [
    {id: 1, title: "Dr. Jane Smith, Veterinarian", description: "Regular vet visits are crucial for early detection of health issues." },
    {id: 2, title: "Emily Johnson, Cat Behaviorist", description: "Understanding your cat’s behavior can improve your relationship and their well-being." },
    {id: 3, title: "Dr. Mark Davis, Feline Nutritionist", description: "A balanced diet tailored to your cat’s needs promotes longevity and vitality." },
  ]


  const categories = ["All", ...new Set(facts.map(f => f.category))];
  const filteredFacts = category === "All" ? facts : facts.filter(f => f.category === category);

  return (
    <>
      <Banner
        title="Cat Care Tips"
        description="Essential tips to keep your cat happy, healthy, and loved."
        bgImage="/cat-banner.jpeg"
      />

    
      <CategoryFilter
        categories={categories}
        selected={category}
        onChange={setCategory}
      />

      

      <Grid2 items={filteredFacts} cardType="card2" />
      <According array={according} />
      <Choice facts={facts} />
    </>
  );
}