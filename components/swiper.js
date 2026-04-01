'use client';
import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/pagination"; 
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import { useEffect } from 'react';


export default function SwiperComp({swipe}) {
  useEffect(() => {
    new Swiper(".swiper-container", {
      modules: [Navigation, Pagination], 
      spaceBetween: 16,      
      keyboard: { enabled: true },
      grabCursor: true,    
      slidesPerView: 1,
      breakpoints: {
        640: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
      },
      navigation: true,
      pagination: { 
        el: '.swiper-pagination',
        clickable: true },

    });
  }, []);

  return (
    <div className="container max-w-[1440px] overflow-hidden mx-auto">
    <div className="swiper-container py-4">
      
      <div className="swiper-wrapper">
        {swipe.map((img, index) => (
          <div key={index} className="swiper-slide ">
            <img
              src={img.image}  
              alt={img.title} 
              className="w-full  h-64 object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
      <div className="swiper-pagination"></div>
    </div>
    </div>
  );
}