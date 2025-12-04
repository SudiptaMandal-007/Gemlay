import React from "react";

const CARDS = [
  { id: 1, img: "/images/women.png", alt: "Women" },
  { id: 2, img: "/images/men.png", alt: "Men" },
  { id: 3, img: "/images/kids.png", alt: "Kids" },
  { id: 4, img: "/images/unisex.png", alt: "Unisex" },
];

export default function GenderCards() {
  return (
    <section
      className="w-full py-2"
      style={{
        background: "linear-gradient(to bottom, #FCFAF8, #FFF7EA)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-6 mb-1">
            <div className="h-px w-12 bg-[#0A8A68]" />
            <p className="text-[16px] font-semibold uppercase tracking-wide text-[#2A2A2A]">
              SHOP BY GENDER
            </p>
            <div className="h-px w-12 bg-[#0A8A68]" />
          </div>

          <p className="text-[11px] tracking-[0.2em] text-[#7A7A7A]">
            DISCOVER YOUR WORLD OF JEWELLERY
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {CARDS.map((card) => (
            <div
              key={card.id}
              className="relative bg-[#F4F1E7] rounded-[26px] h-[260px] shadow-sm flex items-center justify-center overflow-hidden"
            >
              <img
                src={card.img}
                alt={card.alt}
                className="object-contain pointer-events-none"
              />
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button
            className="px-12 py-3 rounded-full text-[12px] text-[#0A8A68]"
          >
            DISCOVER ALL ▶︎
          </button>
        </div>
      </div>
    </section>
  );
}
