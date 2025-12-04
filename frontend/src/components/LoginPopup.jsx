import React, { useState } from 'react';
import { beginGoogleLogin } from '../auth/googleClient.js';

export default function LoginPopup({ open, onClose }) {
  const [phone, setPhone] = useState('');
  const countryCode = '+91';

  if (!open) return null;

  const handleGetOtp = (e) => {
    e.preventDefault();
    // Placeholder for OTP backend call
    alert(`OTP flow not implemented. Entered: ${countryCode} ${phone}`);
  };

  const handleGoogleClick = () => {
    beginGoogleLogin();
  };

  return (
    <div className="fixed inset-0 z-40 bg-black/30 flex items-center justify-center px-4">
      <div className="bg-white rounded-3xl w-full max-w-md px-8 py-10 relative text-xs">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 text-lg"
        >
          ×
        </button>

        <div className="flex flex-col items-center mb-8 mt-2">
          <img src="/icons/Group 7787.svg" alt="" />
        </div>

        <p className="text-center text-[11px] text-gemGreen font-semibold tracking-[0.2em] uppercase mb-4">
          Login / Sign Up
        </p>

        <form onSubmit={handleGetOtp} className="space-y-4">
          <div className="flex items-center bg-white border border-gray-200 rounded-full overflow-hidden">
            <div className="flex items-center gap-1 pl-4 pr-2 border-r border-gray-200 h-11">
              <img className='w-4 h-4' src="/icons/world.png" alt="" />
              <span className="text-[11px] text-gray-600">{countryCode}</span>
            </div>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter mobile number"
              className="flex-1 px-3 text-[11px] outline-none h-11"
            />
          </div>

          <p className="text-[10px] text-center text-gray-500">
            By continuing, I agree to the{' '}
            <span className="text-gemGreen underline cursor-pointer">
              Terms of Use
            </span>{' '}
            &amp;{' '}
            <span className="text-gemGreen underline cursor-pointer">
              Privacy Policy
            </span>
            .
          </p>

          <button
            type="submit"
            className="w-full h-11 rounded-full bg-gemGreen text-white text-[11px] font-semibold tracking-[0.2em] uppercase"
          >
            Get OTP
          </button>
        </form>

        <div className="mt-6 text-center text-[11px] text-gray-500">
          <div className="flex items-center mb-3">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="px-3 text-[11px] text-gray-400">Or</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>
          <p>
            Do not have an account?{' '}
            <span className="text-gemGreen font-semibold cursor-pointer">
              Sign up
            </span>
          </p>
        </div>

        <div className="mt-5 text-center text-[11px] text-gray-500">
          <p className="mb-3">Continue with social media</p>
          <button
            type="button"
            onClick={handleGoogleClick}
            className="mx-auto w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center shadow-sm"
          >
            <img src="/icons/google.png" alt="" />
          </button>
        </div>

        <p className="mt-6 text-center text-[10px] text-gray-400">
          Having trouble in logging in?{' '}
          <span className="text-gemGreen cursor-pointer">Get Help</span>
        </p>
      </div>
    </div>
  );
}
