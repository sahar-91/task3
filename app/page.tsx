import Head from "next/head";
import Grid2 from '../components/Grid2';
import Banner from "@/components/Banner";
import SwiperComp from "@/components/swiper";



export default function Homepage() {
  const gridItems = [
  { image: "/cat-sleep.jpg", title: "Sleeping Cat", description: "Cute cat sleeping", buttonText: "See More", age: "2 years", breed: "Maine Coon" },
  { image: "/cat-sleep.jpg", title: "Sleeping Cat", description: "Cute cat sleeping", buttonText: "See More", age: "1 year", breed: "Siamese" },
  { image: "/cat-sleep.jpg", title: "Sleeping Cat", description: "Cute cat sleeping", buttonText: "See More", age: "3 years", breed: "Persian" },
  { image: "/cat-sleep.jpg", title: "Sleeping Cat", description: "Cute cat sleeping", buttonText: "See More", age: "2 years", breed: "British Shorthair" },
];
  
  const swiperImgs = [
    { image: "/cat-sleep.jpg", title: "Sleeping Cat1" },
    { image: "/cat-sleep.jpg", title: "Sleeping Cat2" },
    { image: "/cat-sleep.jpg", title: "Sleeping Cat3" },
    { image: "/cat-sleep.jpg", title: "Sleeping Cat4" },
    { image: "/cat-sleep.jpg", title: "Sleeping Cat5" },
    { image: "/cat-sleep.jpg", title: "Sleeping Cat6" },
  ];

  return (
    
    <>
        <Head>
        <title>Homepage</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Homepage description" />
      </Head>
    <Banner
        title="Welcome to Our Website"
        description="A place where you can find cute kitties and learn how to take proper care of them. Discover adoption options, nutrition tips, and more."
        bgImage="/cat-banner.jpeg"
        titleClass="text-yellow-300"
      />
      <SwiperComp swipe={swiperImgs}/>
    <Grid2 items={gridItems} />
    </>
  );
}