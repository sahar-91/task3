export default function Adopt() {
      const imgAdopt = [
    { src: "/cute-tabby-cat.avif",alt: "cat1" ,catName: "Whisker", aboutCat: "A playful and affectionate tabby cat looking for a loving home." },
    { src: "/Larry.webp", alt: "cat2", catName: "Larry", aboutCat: "A sleek and mysterious black cat with a heart full of love." },
    { src: "/cute-white-cat.webp", alt: "cat3", catName: "Snowball", aboutCat: "A fluffy white cat with a gentle personality, perfect for cuddles." },
    { src: "/cute-orange-cat.jpg", alt: "cat4", catName: "Pumpkin", aboutCat: "A vibrant orange cat with a playful spirit and a love for adventure." },
  ]
    return (
        <div className="container mx-auto px-4 text-gray-700 ">
      
        
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold mb-4 text-[palevioletred]">Adopt a Cat!</h1>
            <p className="text-lg mb-8">Find your new feline friend today!</p>
            <a href="#CatsAvailable" className="px-6 py-3 bg-[palevioletred] text-white rounded-lg hover:text-pink-600 transition duration-300">
                View Available Cats
            </a>
        </div>
        <div id="CatsAvailable">
                <h2 className="text-2xl font-bold mb-4 text-[palevioletred]">Available Cats</h2>
                <p className="text-lg mb-8">Check out our adorable cats available for adoption!</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                     {imgAdopt.map((item, index) => (
        <div className="grid-item group" key={index}>
           <div className="bg-white rounded-lg shadow-md group-hover:shadow-xl p-4">
            <div className="overflow-hidden">
                <img src={item.src} alt={item.alt} className="w-full h-48 transition duration-300 group-hover:scale-110 object-cover rounded-md mb-4" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-[palevioletred] group-hover:text-pink-600">{item.catName}</h3>
                <p className="mb-4 text-gray-700">{item.aboutCat}</p>
                <a href="#" className="inline-block px-4 py-2 bg-[palevioletred] text-white rounded-lg group-hover:scale-110 transform duration-300 ease-in-out"> 
                    Adopt {item.catName}
                </a>
            
            </div>
            </div>
            
         ))}
       </div>
       </div>
       
    );
}