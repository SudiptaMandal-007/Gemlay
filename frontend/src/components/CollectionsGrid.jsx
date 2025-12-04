import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const COLLECTIONS = [
  {
    title: "UNVEILING COSMIC ELEGANCE",
    subtitle: "DISCOVER THE CELESTIAL SPLENDOR",
    img: "/images/cosmic.png",
  },
  {
    title: "FEATHER LIGHT FASHION",
    subtitle: "GRACEFUL GLAMOUR",
    img: "/images/feather.png",
  },
  {
    title: "LOVE IN JUST TEN BEATS",
    subtitle: "CAPTIVATING",
    img: "/images/tenbeats.png",
  },
  {
    title: "TIME ELEVATED",
    subtitle: "DAZZLING ACCENTS",
    img: "/images/time.png",
  },
  {
    title: "EFFORTLESS STYLE",
    subtitle: "ENDLESS BEAUTY ON YOUR FINGER",
    img: "/images/style.png",
  },
  {
    title: "DIAMOND COLLECTION",
    subtitle: "SOLITAIRE",
    img: "/images/diamond.png",
  },
];

export default function CollectionsGrid() {
  return (
    <section className="w-full bg-gradient-to-b from-[#FAFAFA] to-[#F6FFFC] py-10 flex flex-col items-center">
      <header className="text-center mb-10">
        <p className="text-[14px] tracking-[0.25em] uppercase text-[#166A4B] font-medium">
          Collections
        </p>
        <div className="w-12 h-[3px] bg-[#166A4B] mx-auto mt-2 rounded"></div>
        <p className="text-[12px] text-[#066B57] mt-2 tracking-wide">
          DISCOVER YOUR WORLD OF JEWELLERY
        </p>
      </header>

      <div className="w-full max-w-7xl px-6 md:hidden">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
        >
          {COLLECTIONS.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div
                className="rounded-[30px] overflow-hidden h-52 relative"
                style={{
                  backgroundImage: `url(${item.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute bottom-4 left-6 text-white">
                  <p className="text-xs tracking-wide opacity-90">{item.subtitle}</p>
                  <p className="text-lg font-semibold max-w-[180px] leading-tight">
                    {item.title}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="hidden md:grid max-w-7xl w-full grid-cols-3 gap-6 px-6">
        {COLLECTIONS.map((item, idx) => (
          <div
            key={idx}
            className="rounded-[30px] overflow-hidden h-52 bg-cover bg-center"
            style={{
              backgroundImage: `url(${item.img})`,
            }}
          ></div>
        ))}
      </div>
      <button className="mt-10 px-6 py-2 text-[#007C5E] font-semibold flex items-center gap-2">
        DISCOVER ALL <span>▶︎</span>
      </button>
    </section>
  );
}
