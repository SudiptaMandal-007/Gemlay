import React, { useState } from "react";

export default function Footer() {
  const [open, setOpen] = useState(null);

  const toggle = (id) => {
    setOpen(open === id ? null : id);
  };

  return (
    <footer className="bg-[#F6FFFC] text-[#1A1A1A] pt-6">
      <div className="max-w-7xl mx-auto px-6 py-10 
                      flex flex-col md:flex-row 
                      items-start justify-between gap-10">
        <div className="flex-1 w-full">
          <button
            className="md:hidden w-full flex justify-between items-center py-3 border-b"
            onClick={() => toggle(1)}
          >
            <span className="font-semibold text-[15px] text-[#007451]">OUR SERVICES</span>
            <span>{open === 1 ? "▲" : "▼"}</span>
          </button>

          <div className={`${open === 1 ? "block" : "hidden"} md:block mt-4`}>
            <p className="hidden md:block font-semibold text-[15px] mb-4 text-[#007451]">OUR SERVICES</p>
            <ul className="space-y-3 text-[10px] text-[#4A4A4A]">
              <li className="flex items-center gap-2"><img src="/icons/interest-rate.png" className="w-4" /> GOLD RATES</li>
              <li className="flex items-center gap-2"><img src="/icons/gift-box.png" className="w-4" /> DIGITAL GOLD</li>
              <li className="flex items-center gap-2"><img src="/icons/payment.png" className="w-4" /> VARIOUS PAYMENT METHOD</li>
              <li className="flex items-center gap-2"><img src="/icons/finance.png" className="w-4" /> FINANCING OPTIONS</li>
              <li className="flex items-center gap-2"><img src="/icons/shield.png" className="w-4" /> GARNET LANEE ASSURANCE</li>
              <li className="flex items-center gap-2"><img src="/icons/franchise.png" className="w-4" /> FRANCHISE ENQUIRY</li>
            </ul>
          </div>
        </div>
        <div className="hidden md:block h-64 w-[1px] bg-gray-300/60" />
        <div className="flex-1 w-full">
          <button
            className="md:hidden w-full flex justify-between items-center py-3 border-b"
            onClick={() => toggle(2)}
          >
            <span className="font-semibold text-[15px] text-[#007451]">OUR POLICIES</span>
            <span>{open === 2 ? "▲" : "▼"}</span>
          </button>

          <div className={`${open === 2 ? "block" : "hidden"} md:block mt-4`}>
            <p className="hidden md:block font-semibold text-[15px] mb-4 text-[#007451]">OUR POLICIES</p>
            <ul className="space-y-3 text-[10px] text-[#4A4A4A]">
              <li className="flex items-center gap-2"><img src="/icons/policy.png" className="w-4" /> 15-DAY RETURNS</li>
              <li className="flex items-center gap-2"><img src="/icons/delivery-truck.png" className="w-4" /> FREE SHIPPING</li>
              <li className="flex items-center gap-2"><img src="/icons/loop-arrow.png" className="w-4" /> LIFETIME EXCHANGE POLICY</li>
              <li className="flex items-center gap-2"><img src="/icons/money.png" className="w-4" /> RETURN & REFUND POLICY</li>
              <li className="flex items-center gap-2"><img src="/icons/term-and-condition.png" className="w-4" /> TERMS & CONDITIONS ON OFFERS</li>
            </ul>
          </div>
        </div>

        <div className="hidden md:block h-64 w-[1px] bg-gray-300/60" />
        <div className="flex-1 w-full">
          <button
            className="md:hidden w-full flex justify-between items-center py-3 border-b"
            onClick={() => toggle(3)}
          >
            <span className="font-semibold text-[15px] text-[#007451]">JEWELLERY KNOWLEDGE</span>
            <span>{open === 3 ? "▲" : "▼"}</span>
          </button>

          <div className={`${open === 3 ? "block" : "hidden"} md:block mt-4`}>
            <p className="hidden md:block font-semibold text-[15px] mb-4 text-[#007451]">JEWELLERY KNOWLEDGE</p>
            <ul className="space-y-3 text-[10px] text-[#4A4A4A]">
              <li className="flex items-center gap-2"><img src="/icons/gold-bars.png" className="w-4" /> GOLD GUIDE</li>
              <li className="flex items-center gap-2"><img src="/icons/diamond.png" className="w-4" /> DIAMOND GUIDE</li>
              <li className="flex items-center gap-2"><img src="/icons/jewelry.png" className="w-4" /> JEWELLERY GUIDE</li>
              <li className="flex items-center gap-2"><img src="/icons/diamond-ring.png" className="w-4" /> SOLITAIRE DIAMOND GUIDE</li>
              <li className="flex items-center gap-2"><img src="/icons/gem.png" className="w-4" /> GEMSTONE GUIDE</li>
              <li className="flex items-center gap-2"><img src="/icons/medal.png" className="w-4" /> CERTIFICATION GUIDE</li>
            </ul>
          </div>
        </div>

        <div className="hidden md:block h-64 w-[1px] bg-gray-300/60" />
        <div className="flex-1 w-full">
          <button
            className="md:hidden w-full flex justify-between items-center py-3 border-b"
            onClick={() => toggle(4)}
          >
            <span className="font-semibold text-[15px] text-[#007451]">ABOUT US</span>
            <span>{open === 4 ? "▲" : "▼"}</span>
          </button>

          <div className={`${open === 4 ? "block" : "hidden"} md:block mt-4`}>
            <p className="hidden md:block font-semibold text-[15px] mb-4 text-[#007451]">ABOUT US</p>
            <ul className="space-y-3 text-[10px] text-[#4A4A4A]">
              <li className="flex items-center gap-2"><img src="/icons/vision.png" className="w-4" /> OUR VISION</li>
              <li className="flex items-center gap-2"><img src="/icons/ask.png" className="w-4" /> WHY GARNET</li>
              <li className="flex items-center gap-2"><img src="/icons/blog.png" className="w-4" /> BLOG</li>
              <li className="flex items-center gap-2"><img src="/icons/story.png" className="w-4" /> OUR STORY</li>
              <li className="flex items-center gap-2"><img src="/icons/settings.png" className="w-4" /> OUR PROCESS</li>
              <li className="flex items-center gap-2"><img src="/icons/interview.png" className="w-4" /> PRESS RELEASE</li>
            </ul>
          </div>
        </div>
        <div className="hidden md:block h-64 w-[1px] bg-gray-300/60" />
        <div className="flex-1 w-full">
          <button
            className="md:hidden w-full flex justify-between items-center py-3 border-b"
            onClick={() => toggle(5)}
          >
            <span className="font-semibold text-[15px] text-[#007451]">GET IN TOUCH</span>
            <span>{open === 5 ? "▲" : "▼"}</span>
          </button>

          <div className={`${open === 5 ? "block" : "hidden"} md:block mt-4`}>
            <p className="hidden md:block font-semibold text-[15px] mb-4 text-[#007451]">Get In Touch</p>
            <ul className="space-y-3 text-[13px] text-[#4A4A4A]">
              <li>Toll Free : 1800-202-0270</li>
              <li>Mon–Sat (10 AM to 7 PM)</li>
              <li className="flex items-center gap-2"><img src="/icons/whatsapp.png" className="w-4" /> 99888-98866</li>
              <li className="flex items-center gap-2">
                <img src="/icons/email.png" className="w-4" />
                <a href="mailto:info@garnetlanee.com" className="hover:text-[#007451]">info@garnetlanee.com</a>
              </li>
              <li className="flex items-start gap-2"> <img src="/icons/pin.png" className="w-4 mt-1" /> SCO 19, Sector 82 JLPL Mohali Airport Road, 160055 </li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-7 h-7 flex items-center justify-center border-2 border-gray-800 rounded-full">
                <img src="/icons/facebook.svg" className="w-2" />
              </a>
              <a href="#" className="w-7 h-7 flex items-center justify-center border-2 border-gray-800 rounded-full">
                <img src="/icons/instagram.svg" className="w-3" />
              </a>
              <a href="#" className="w-7 h-7 flex items-center justify-center border-2 border-gray-800 rounded-full">
                <img src="/icons/youtube.svg" className="w-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t pt-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-6">
          <div className="text-[10px] text-[#444]">
            SITE MAP | PRIVACY POLICY | TERMS AND CONDITIONS | FAQs
          </div>
          <div className="text-center md:text-right">
            <p className="text-[14px] font-medium text-[#4A4A4A] mb-2">Download Our Application</p>
            <div className="flex gap-3 justify-center md:justify-end">
              <img src="/icons/play.png" className="h-6" />
              <img src="/icons/app.png" className="h-6" />
            </div>
          </div>
        </div>

        <div className="bg-[#004737] text-center py-4 text-[11px] text-white pt-2">
          © {new Date().getFullYear()} Garnet Lane · All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
