import React from "react";

const ITEMS = [
  { label: "BusinessLine", img: "/images/business.jpg" },
  { label: "The Economic Times", img: "/images/time.jpg" },
  { label: "India Today", img: "/images/ind.png" },
  { label: "BusinessLine", img: "/images/business.jpg" },
];

export default function MediaCards() {
  return (
    <section
      className="w-full py-10"
      style={{
        background: "linear-gradient(to right, #FDFDFD, #FEFFFC)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <header className="text-center mb-8">
          <div className="flex items-center justify-center gap-6 mb-1">
            <div className="h-px w-10 bg-[#0A8A68]"></div>
            <p className="text-[14px] font-semibold tracking-wide text-[#2A2A2A]">
              STAY UPDATED WITH US
            </p>
            <div className="h-px w-10 bg-[#0A8A68]"></div>
          </div>

          <p className="text-[11px] tracking-[0.15em] text-[#0A8A68]">
            DISCOVER YOUR WORLD OF JEWELLERY
          </p>
        </header>
        <div className="grid md:grid-cols-4 gap-12 justify-center">

          {ITEMS.map((item, idx) => (
            <article
              key={idx}
              className={`bg-white rounded-3xl px-4 pb-2 pt-10 border border-[#CDEFE7]
                flex flex-col items-center text-center h-[260px] justify-between
                ${
                  idx === 0
                    ? "block"
                    : "hidden md:flex"
                }`}
            >
              <img
                src={item.img}
                alt={item.label}
                className="h-20 object-contain mt-2"
              />
              <p className="text-[11px] text-[#444] leading-relaxed px-2">
                Ratan Tata-backed Garnet Lanee valuation tops $410M in latest round.
              </p>
              <button
                className="px-16 py-4 rounded-xl text-[11px] font-medium text-[#333]
                shadow-sm border border-[#E1F7EF]
                hover:scale-[1.03] transition-all duration-200
                bg-[linear-gradient(to_right,#FFFFFF,#D6FAF0)] mb-2"
              >
                READ MORE
              </button>
            </article>
          ))}

        </div>
        <div className="text-center mt-10">
          <button className="text-[#0A8A68] text-[11px] font-semibold tracking-wide flex items-center gap-1 mx-auto">
            DISCOVER ALL <span>▶︎</span>
          </button>
        </div>

      </div>
    </section>
  );
}
