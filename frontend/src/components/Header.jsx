import React, { useState } from "react";

export default function Header({ onOpenLogin, user }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const categories = [
    "NEW ARRIVAL",
    "RINGS",
    "EARRINGS",
    "PENDANTS",
    "BRACELETS & BANGLES",
    "SOLITAIRES",
    "GOLD COINS",
    "ALL JEWELLERY",
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-30 w-full">

      <div className="md:hidden w-full px-4 py-3 flex items-center justify-between">
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <img src="/icons/menu.png" className="w-7" alt="menu" />
        </button>

        <img src="/icons/Group 7787.png" alt="Gemlay" className="h-10" />

        <div className="flex items-center gap-4">
          <button>
            <img src="/icons/search.svg" className="w-5" alt="search" />
          </button>

          <button>
            <img src="/icons/wishlist.svg" className="w-5" alt="wishlist" />
          </button>

          <button className="relative">
            <img src="/icons/cart.svg" className="w-5" alt="cart" />
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-[#F7F8F8] border-t ${
          mobileMenuOpen ? "max-h-[500px] py-3" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-6 gap-3 text-[14px] font-medium text-[#333]">
          {categories.map((cat, idx) => (
            <button key={idx} className="text-left py-2 border-b border-gray-200">
              {cat}
            </button>
          ))}

          {user ? (
            <button className="text-left py-2 font-medium text-emerald-700">
              Hi, {user.displayName || user.email}
            </button>
          ) : (
            <button
              onClick={onOpenLogin}
              className="text-left py-2 font-medium text-emerald-700"
            >
              Login
            </button>
          )}
        </nav>
      </div>

      <div className="hidden md:block">
        <div className="bg-white border-b">
          <div className="px-6 py-3 flex items-center justify-between">
            <img src="/icons/Group 7787.png" alt="Gemlay" className="h-12" />

            <div className="flex-1 flex justify-center">
              <div className="relative w-full max-w-lg">
                <input
                  placeholder="Search Products…"
                  className="w-full rounded-full border border-[#21414D] py-1.5 pl-9 pr-4 text-sm outline-none"
                />
              </div>
            </div>

            <div className="flex items-center gap-8 text-gray-700">
              {[
                { icon: "/icons/gsp.svg", label: "GSP" },
                { icon: "/icons/offers.svg", label: "OFFERS" },
                { icon: "/icons/wishlist.svg", label: "WISHLIST" },
                { icon: "/icons/cart.svg", label: "CART" },
                { icon: "/icons/verify.svg", label: "VERIFY REPORT" },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center text-center w-16">
                  <img src={item.icon} className="h-6 mb-1" alt={item.label} />
                  <span className="text-[11px] font-medium">{item.label}</span>
                </div>
              ))}

              {user ? (
                <span className="text-sm font-medium text-emerald-700">
                  Hi, {user.displayName || user.email}
                </span>
              ) : (
                <button
                  onClick={onOpenLogin}
                  className="text-sm font-medium text-emerald-700"
                >
                  Login
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="w-full bg-[#F7F8F8] border-b">
          <nav className="w-full px-12 py-[10px] flex items-center justify-between text-[12px] font-semibold text-[#4A4A4A]">
            {categories.map((cat, idx) => (
              <button key={idx}>{cat}</button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
