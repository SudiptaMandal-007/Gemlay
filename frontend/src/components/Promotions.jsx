import React from "react";

export default function Promotions() {
  return (
    <section className="w-full bg-[#FFFFFF] py-10 flex items-center justify-center">
      <div className="max-w-7xl w-full px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex items-center justify-between rounded-[100px] bg-gradient-to-b from-[#FDFDFD] to-[#F2F2F2] shadow-md px-20 pb-4">
          <div className="flex flex-col">
            <span className="text-[30px] font-semibold text-[#2D2D2D] leading-none">
              EXPRESS
            </span>
            <span className="text-[30px] font-bold text-[#007C5E] leading-none mt-1">
              DELIVERY
            </span>
          </div>

          <img
            src="/images/truck.png"
            alt="Express Delivery"
            className="w-32 h-auto"
          />
        </div>
        <div className="flex items-center justify-between rounded-[100px] bg-gradient-to-b from-[#FDFDFD] to-[#F2F2F2] shadow-md px-20">
          <img
            src="/images/discound.png"
            alt="Special Discount"
            className="w-32 h-auto"
          />

          <div className="flex flex-col text-right">
            <span className="text-[30px] font-semibold text-[#2D2D2D] leading-none">
              SPECIAL
            </span>
            <span className="text-[30px] font-bold text-[#007C5E] leading-none mt-1">
              DISCOUNT
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
