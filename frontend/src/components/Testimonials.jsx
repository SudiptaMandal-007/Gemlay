import React from "react";

const ITEMS = new Array(3).fill(0).map((_, i) => ({
  id: i + 1,
  author: "Himesh",
  date: "May 25 ,2022",
  text:
    "Talk about a range of elements, including customer service. Be detailed, specific, and honest. Leave outlinks and personal information.",
}));

export default function Testimonials() {
  return (
    <section
      className="w-full pb-2 pt-10"
      style={{
        background: "linear-gradient(to bottom, #FAFAFA, #FFF7EA)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-6 mb-1">
            <div className="h-px w-12 bg-[#0A8A68]"></div>
            <p className="text-[16px] font-semibold uppercase tracking-wide text-[#2A2A2A]">
              CUSTOMER REVIEWS
            </p>
            <div className="h-px w-12 bg-[#0A8A68]"></div>
          </div>

          <p className="text-[11px] tracking-[0.2em] text-[#0A8A68]">
            KNOW ABOUT WHAT OTHERS THINK
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-10">

          {ITEMS.map((review, idx) => (
            <div
              key={review.id}
              className={`
                relative bg-white h-[300px] px-10 py-10 rounded-[32px]
                shadow-[0_8px_20px_rgba(0,0,0,0.08)] border border-[#F1F1F1]
                ${idx === 0 ? "block" : "hidden md:block"}
              `}
            >
              <div
                className="absolute left-0 top-[65px] w-6 h-6 bg-white 
                border-l border-b border-[#EAEAEA]
                rounded-br-2xl transform -translate-x-1/2 rotate-45"
              ></div>
              <div className="absolute right-10 top-8 text-[55px] font-bold text-[#90E3D6] leading-none">
                ”
              </div>
              <p className="text-[#2A2A2A] font-semibold text-[13px]">
                {review.author}
              </p>
              <p className="text-[10px] text-[#7C7C7C] mt-[2px] mb-4">
                {review.date}
              </p>
              <p className="text-[12px] text-[#474747] leading-relaxed max-w-[90%]">
                {review.text}
              </p>
              <div className="absolute bottom-10 left-10 right-10 flex items-center justify-between">
                <img src="/icons/google.png" className="w-4" />

                <div className="flex items-center gap-1">
                  <span className="text-[#0A8A68] text-[14px]">★</span>
                  <span className="text-[#d3d3d3] text-[14px]">★</span>
                  <span className="text-[#d3d3d3] text-[14px]">★</span>
                  <span className="text-[#d3d3d3] text-[14px]">★</span>
                  <span className="text-[#d3d3d3] text-[14px]">★</span>
                </div>
              </div>
            </div>
          ))}

        </div>
        <div className="text-center mt-10">
          <button
            className="mx-auto px-2 py-3 text-[12px] font-medium text-[#0A8A68]"
          >
            READ MORE ▶︎
          </button>
        </div>

      </div>
    </section>
  );
}
