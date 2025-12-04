import React from "react";

export default function Hero() {
  return (
    <section
      className="w-full bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage: "url('/images/hero.png')",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-20 lg:py-28">
        <p className="text-sm tracking-[0.25em] text-[#D4D4D4] uppercase">
          Unlock prosperity this
        </p>
        <h1 className="mt-3 text-5xl lg:text-6xl font-semibold tracking-wide leading-tight">
          <span className="text-[#F6C168]">AKSHAYA TRITIYA</span>
        </h1>
        <p className="mt-6 text-lg tracking-wider text-[#EAEAEA] uppercase">
          With timeless jewellery
        </p>
        <p className="mt-8 text-2xl font-medium text-[#F6C168] tracking-wide">
          Upto 100% Off
        </p>
        <p className="text-sm text-[#EDEDED] tracking-wider mt-1">
          On making charges
        </p>

      </div>
    </section>
  );
}
