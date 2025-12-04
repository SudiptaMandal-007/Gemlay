import React from "react";

export default function NewsletterFooter() {
  return (
    <>
      <section
        className="w-full py-10"
        style={{ background: "linear-gradient(to right, #FDFDFD, #FEFDF8)" }}
      >
        <div className="max-w-6xl mx-auto px-4">

          <div className="w-full rounded-3xl bg-white shadow-[0_4px_25px_rgba(0,0,0,0.08)] px-6 md:px-10 py-8 md:py-10">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <p className="text-[15px] font-semibold text-[#0A4D3C]">
                  SIGN UP TO BE A GARNET LANEE INSIDER
                </p>
                <p className="text-[12px] text-gray-600 mt-2 leading-relaxed">
                  Get promotions, inspirations and the latest news about brands
                  and jewellery items directly in your inbox.
                </p>
              </div>
              <form className="flex flex-col gap-4 w-full">
                <div className="flex gap-2 w-full">
                  <input
                    type="email"
                    placeholder="Enter Email ID"
                    className="flex-1 border border-gray-300 rounded-lg px-4 py-2 text-[12px] outline-none"
                  />
                  <button
                    type="submit"
                    className="px-6 py-2 rounded-lg bg-gemGreen text-white text-[12px] font-medium"
                  >
                    SUBMIT
                  </button>
                </div>
                <div className="flex items-center gap-8 text-gray-700">
                  <label className="flex items-center gap-2 text-[13px] cursor-pointer">
                    <img src="/icons/female.svg" className="w-4" /> Female
                    <input type="radio" name="gender" className="accent-gemGreen" />
                  </label>

                  <label className="flex items-center gap-2 text-[13px] cursor-pointer">
                    <img src="/icons/male.svg" className="w-4" /> Male
                    <input type="radio" name="gender" className="accent-gemGreen" />
                  </label>
                </div>

              </form>
            </div>
          </div>

        </div>
      </section>
      <section className="bg-white py-12 text-center">
        <p className="text-[13px] text-[#222] tracking-wide mb-6">
          WE WOULD LOVE TO MEET YOU ON OUR HANDLES
        </p>

        <div className="flex justify-center gap-6">
          <a href="#"><img src="/icons/facebook.png" className="w-8" /></a>
          <a href="#"><img src="/icons/social.png" className="w-8" /></a>
          <a href="#"><img src="/icons/youtube.png" className="w-8" /></a>
        </div>
      </section>
      <section
        className="py-10"
        style={{ background: "linear-gradient(to right, #FAF9F7, #FAFAFA)" }}
      >
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-[1fr,2fr] gap-12">
          <div>
            <ul className="text-[12px] text-[#4A4A4A] w-full">

              {[
                "Buy Gold Jewellery Online in India",
                "Variety of options",
                "Pay as per your convenience",
                "Customize as you like",
                "Crowd-free Buying Diamond Jewellery Online in India",
              ].map((item, i) => (
                <li
                  key={i}
                  className="py-4 border-b border-gray-300 flex items-center gap-3 cursor-pointer hover:text-gemGreen"
                >
                  <span className="text-[14px] font-semibold text-[#2E2C2D]">▶︎</span>
                  {item}
                </li>
              ))}

            </ul>
          </div>

          <div className="hidden md:block text-[12px] leading-relaxed text-[#4A4A4A]">
            <h3 className="font-semibold text-[#0A4D3C] mb-4 text-[15px]">
              Buy Gold Jewellery Online in India
            </h3>

            <p className="mb-4">
              Buying Jewellery Online in India is becoming common these days.
              Though many people are still sceptical of doing so. Yet, the trend
              of shopping online for anything and everything is surging
              exponentially.
            </p>

            <p>
              Garnet Lanee delivers all kinds of diamond and gold jewellery
              direct to your home – Rings, Necklaces, Bracelets, Pendants, and more.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
