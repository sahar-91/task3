import Banner from "@/components/Banner";
import Grid2 from "@/components/Grid2";

const catData = [
  { image: "/cute-tabby-cat.avif", title: "Whisker", description: "Playful tabby cat", buttonText: "Adopt Whisker" },
  { image: "/Larry.webp", title: "Larry", description: "Sleek black cat", buttonText: "Adopt Larry" },
  { image: "/cute-white-cat.webp", title: "Snowball", description: "A fluffy white cat with a gentle personality, perfect for cuddles.", buttonText: "Adopt Snowball" },
  { image: "/cute-orange-cat.jpg", title: "Pumpkin", description: "A vibrant orange cat with a playful spirit and a love for adventure.", buttonText: "Adopt Pumpkin" },
];

export default function Adopt() {
  return (
    <>
      <Banner
        title="Adopt a Cat!"
        description="Find your new feline friend today and give them a loving home."
        bgImage="/cat-banner.jpeg"
      />
      <Grid2 items={catData} cardType="card1" />
    </>
  );
}