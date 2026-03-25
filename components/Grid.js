export default function Grid() {

  const imgTxt = [
    { src: "/cat-sleep.jpg", text: "cat sleeping peacefully" },
    { src: "/cat-sleep.jpg", text: "cat sleeping peacefully" },
    { src: "/cat-sleep.jpg", text: "cat sleeping peacefully" },
    { src: "/cat-sleep.jpg", text: "cat sleeping peacefully" },
  ]

    return (

      <div className="max-w-[1440px] mx-auto px-4">
      <div className="grid grid-cols-4 gap-4">
 
      {imgTxt.map((item, index) => (
        <div className="grid-item" key={index}>
          <img src={item.src} alt={item.text}
            className="w-full h-[500px] object-cover" />
          <p className="color-pa text-center text-pink-400 mt-2">{item.text}</p>
        </div>
      ))}
        
      </div>
    </div>
  
  );
  }
