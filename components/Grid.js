export default function Grid() {

  const imgTxt = [
    { src: "/cat-sleep.jpg", text: "cat sleeping peacefully" },
    { src: "/cat-sleep.jpg", text: "cat sleeping peacefully" },
    { src: "/cat-sleep.jpg", text: "cat sleeping peacefully" },
    { src: "/cat-sleep.jpg", text: "cat sleeping peacefully" },
  ]

    return (

      <div className="container mx-auto px-4 text-[palevioletred]">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
 
      {imgTxt.map((item, index) => (
        <div className="grid-item group" key={index}>
          <div className="overflow-hidden">
          <img src={item.src} alt={item.text}
            className="w-full h-125 object-cover group-hover:scale-110 ease-in-out transition-transform duration-500" />
            </div>
          <p className="color-pa text-center mt-2 group-hover:underline hover:cursor-pointer">{item.text}</p>
        </div>

      ))}
        
      </div>
    </div>
  
  );
  }
