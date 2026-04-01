'use client';
import 'swiper/css';
import 'swiper/css/navigation';
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import { useEffect } from 'react';


export default function SwiperComp({swipe}) {
  useEffect(() => {
    new Swiper(".swiper-container", {
      modules: [Navigation], 
      spaceBetween: 16,      
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }, 
      keyboard: { enabled: true },
      grabCursor: true,    
      slidesPerView: 1,
      breakpoints: {
        640: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
      }

    });
  }, []);

  return (
    <div className="swiper-container overflow-x-auto whitespace-nowrap py-4">
      <div className="swiper-wrapper flex space-x-4">
        {swipe.map((img, index) => (
          <div key={index} className="swiper-slide inline-block">
            <img
              src={img.image}  
              alt={img.title} 
              className="w-full h-100 rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
}