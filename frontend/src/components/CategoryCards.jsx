import React from "react";

const TOP_CARDS = [
  { label: "RINGS", img: "/images/rings-2.png", bg: "#FAD4BF" },
  { label: "EARRINGS", img: "/images/earrings-2.png", bg: "#FAD4BF" },
];

const SMALL_CARDS = [
  { label: "BANGLES", img: "/images/bangles.png" },
  { label: "PENDANT", img: "/images/pendant.png" },
  { label: "BRACELET", img: "/images/bracelet.png" },
  { label: "MANGALSUTRA", img: "/images/mangalsutra.png" },
];

export default function CategoryCards() {
  return (
    <section
      className="w-full py-2"
      style={{ background: "linear-gradient(to bottom, #F5FFFB, white)" }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-6 mb-1">
            <div className="h-px w-12 bg-[#0A8A68]" />
            <p className="text-[15px] font-semibold uppercase tracking-wide text-[#2A2A2A]">
              CATEGORY
            </p>
            <div className="h-px w-12 bg-[#0A8A68]" />
          </div>
          <p className="text-[11px] tracking-[0.2em] text-[#7A7A7A]">
            DISCOVER YOUR WORLD OF JEWELLERY
          </p>
        </div>

        <div className="hidden md:block">
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {TOP_CARDS.map((card, i) => (
              <div
                key={i}
                className="relative h-[260px] rounded-[26px] overflow-hidden shadow-sm"
                style={{ backgroundColor: card.bg }}
              >
                <img
                  src={card.img}
                  alt={card.label}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="absolute bottom-6 right-6">
                  <p className="text-[30px] font-semibold tracking-wide text-[#333]">
                    {card.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-4 gap-6">
            {SMALL_CARDS.map((card) => (
              <div
                key={card.label}
                className="rounded-[20px] overflow-hidden shadow-md bg-white"
              >
                <div className="h-[225px] bg-black">
                  <img
                    src={card.img}
                    alt={card.label}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="w-full bg-[#071A14] py-3 text-center">
                  <p className="text-white text-[13px] tracking-[0.25em] font-medium">
                    {card.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="md:hidden space-y-8">
          <div
            className="relative h-[260px] rounded-[26px] overflow-hidden shadow-sm"
            style={{ backgroundColor: TOP_CARDS[0].bg }}
          >
            <img
              src={TOP_CARDS[0].img}
              alt="RINGS"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute bottom-6 right-6">
              <p className="text-[28px] font-semibold text-[#333]">RINGS</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[SMALL_CARDS[0], SMALL_CARDS[1]].map((card) => (
              <div
                key={card.label}
                className="rounded-[20px] overflow-hidden shadow-md bg-white"
              >
                <div className="h-[200px] bg-black">
                  <img
                    src={card.img}
                    alt={card.label}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="w-full bg-[#071A14] py-3 text-center">
                  <p className="text-white text-[12px] tracking-[0.22em] font-medium">
                    {card.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div
            className="relative h-[260px] rounded-[26px] overflow-hidden shadow-sm"
            style={{ backgroundColor: TOP_CARDS[1].bg }}
          >
            <img
              src={TOP_CARDS[1].img}
              alt="EARRINGS"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute bottom-6 right-6">
              <p className="text-[28px] font-semibold text-[#333]">
                EARRINGS
              </p>
            </div>
          </div>
        </div>
        <div className="text-center mt-12">
          <button className="px-12 py-3 rounded-full text-[12px] text-[#0A8A68]">
            DISCOVER ALL ▶︎
          </button>
        </div>

      </div>
    </section>
  );
}
