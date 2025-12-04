import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const ITEMS = [
  { label: "Rings", img: "/images/rings.png" },
  { label: "Earrings", img: "/images/earring.png" },
  { label: "Tanmaniya", img: "/images/Tanmaniya.jpg" },
  { label: "Bangles", img: "/images/bangles.jpg" },
  { label: "Bracelets", img: "/images/bracelets.jpg" },
  { label: "Pendants", img: "/images/pendants.jpg" },
  { label: "Rings", img: "/images/rings.png" },
];

export default function CategoryCarousel() {
  return (
    <section className="bg-white w-full py-10 flex items-center justify-center">
      <div className="w-full px-4">
        <div className="md:hidden relative">
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md w-8 h-8 rounded-full flex items-center justify-center swiper-button-prev-custom"
          >
            <span className="text-emerald-700 text-xl">‹</span>
          </button>
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md w-8 h-8 rounded-full flex items-center justify-center swiper-button-next-custom"
          >
            <span className="text-emerald-700 text-xl">›</span>
          </button>

          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            slidesPerView={2.3}
            spaceBetween={20}
            loop={true}
          >
            {ITEMS.map((item, idx) => (
              <SwiperSlide key={idx}>
                <div className="flex flex-col items-center">
                  <div className="bg-gradient-to-b from-emerald-900 to-emerald-500 p-[3px] rounded-full">
                    <div className="w-24 h-24 rounded-full bg-white shadow-md flex items-center justify-center overflow-hidden">
                      <img src={item.img} alt={item.label} className="w-16 h-16 object-contain" />
                    </div>
                  </div>
                  <div className="text-[13px] font-medium text-gray-700 mt-2">{item.label}</div>
                  <div className="w-5 h-[3px] bg-emerald-700 rounded mt-1 mb-2"></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="hidden md:flex gap-10 justify-center flex-wrap">
          {ITEMS.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="bg-gradient-to-b from-emerald-900 to-emerald-500 p-[3px] rounded-full">
                <div className="w-28 h-28 rounded-full bg-white shadow-md flex items-center justify-center overflow-hidden">
                  <img src={item.img} alt={item.label} className="w-20 h-20 object-contain" />
                </div>
              </div>
              <div className="text-[14px] font-medium text-gray-700 mt-2">{item.label}</div>
              <div className="w-6 h-[3px] bg-emerald-700 rounded mt-1 mb-2"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
