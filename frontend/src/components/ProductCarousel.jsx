import React, { useState } from "react";

function formatINR(value) {
  return value.toLocaleString("en-IN");
}

function ProductCard({ product }) {
  const [liked, setLiked] = useState(false);

  return (
    <article className="bg-white rounded-[24px] shadow-[0px_4px_25px_rgba(0,0,0,0.08)] pt-6 relative text-xs w-[235px] border border-[#F2F2F2] shrink-0">

      {product.badge && (
        <div
          className={`absolute left-4 top-3 px-3 py-[4px] rounded-full text-[10px] font-semibold uppercase tracking-wide
            ${
              product.badge === "BEST SELLER"
                ? "bg-gradient-to-r from-[#FFE7E1] to-[#FFD4C9] text-[#E66A4E]"
                : product.badge === "NEW"
                ? "bg-gradient-to-r from-[#E8F2FF] to-[#D8E9FF] text-[#3B75B8]"
                : "bg-gradient-to-r from-[#E7F4FF] to-[#CDEBFF] text-[#4C8EC9]"
            }`}
        >
          {product.badge}
        </div>
      )}
      <button onClick={() => setLiked(!liked)} className="absolute right-4 top-3">
        {liked ? (
          <svg width="20" height="20" fill="#FF4D6D" viewBox="0 0 24 24">
            <path d="M12 21s-8.5-5.25-8.5-11.5S7.36 1 12 6c4.64-5 8.5-1 8.5 3.5S12 21 12 21z" />
          </svg>
        ) : (
          <svg width="20" height="20" stroke="#111" fill="none" viewBox="0 0 24 24">
            <path
              strokeWidth="1.6"
              d="M12.1 8.64 12 8.77l-.1-.13C10.14 6.34 6.4 6.13 4.62 8.3c-1.55 1.89-1.24 4.72.7 6.44L12 21l6.68-6.27c1.94-1.72 2.25-4.55.7-6.44-1.78-2.17-5.52-1.96-7.28.35z"
            />
          </svg>
        )}
      </button>
      <div className="mt-7 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="w-[155px] h-[155px] object-contain drop-shadow-[0_22px_22px_rgba(0,0,0,0.25)]"
        />
      </div>
      <div className="px-4 mt-4 flex items-baseline gap-1">
        <span className="font-semibold text-[15px] text-[#1A1A1A]">
          ₹{formatINR(product.price)}
        </span>
        <span className="line-through text-[11px] text-[#373636]">
          ₹{formatINR(product.price + 2000)}
        </span>
      </div>
      <p className="px-4 text-[12px] text-[#4A4A4A] mt-[2px] truncate">
        {product.title}
      </p>
      <p className="px-4 text-[11px] text-[#009B74] mt-[2px] font-medium leading-tight">
        10 % off on Making Charges
      </p>
      <div className="absolute right-3 top-[215px] flex flex-col gap-1 items-end">
        <span className="w-[14px] h-[14px] rounded-full bg-[#FBC15E] border border-gray-300"></span>
        <span className="w-[14px] h-[14px] rounded-full bg-[#E16D61] border border-gray-300"></span>
        <span className="w-[14px] h-[14px] rounded-full bg-[#C0C0C0] border border-gray-300"></span>
      </div>
      <div className="mt-6 flex w-full items-center overflow-hidden rounded-full relative">
        <button className="flex-1 border border-[#DCDCDC] bg-white py-[10px] text-[11px] text-[#444444] font-medium rounded-l-full">
          View Similar
        </button>

        <button className="flex-1 bg-[#0A8A68] text-white font-semibold text-[11px] py-[10px] rounded-r-full relative">
          Buy Now
          <span className="absolute right-0 top-0 h-full w-[22px] bg-[#085E4A] skew-x-[-25deg]"></span>
        </button>
      </div>

    </article>
  );
}

export default function ProductCarousel({ title, products, bgColor }) {
  return (
    <section className="w-full py-12" style={{ backgroundColor: bgColor }}>
      <div className="max-w-7xl mx-auto px-4">
        <header className="text-center mb-6">
          <p className="text-xs tracking-[0.25em] uppercase text-[#0A8A68] font-semibold">
            {title}
          </p>
          <p className="text-[11px] text-[#0A8A68] mt-1 tracking-wide">
            DISCOVER YOUR WORLD OF JEWELLERY
          </p>
          <div className="w-14 h-[3px] bg-[#0A8A68] mx-auto mt-2 rounded"></div>
        </header>
        <div className="flex justify-center gap-6 flex-nowrap">
          <div className="flex md:hidden gap-6 overflow-x-auto px-1">
            {products.slice(0, 5).map((p) => (
              <div key={p.id} className="shrink-0 w-[235px]">
                <ProductCard product={p} />
              </div>
            ))}
          </div>
          <div className="hidden md:flex gap-6">
            {products.slice(0, 5).map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>

        </div>
        <button className="mt-10 flex items-center mx-auto gap-2 text-[#0A8A68] font-semibold text-[13px]">
          DISCOVER ALL <span className="text-[15px]">▶︎</span>
        </button>

      </div>
    </section>
  );
}
