import React, { useEffect, useState } from 'react';
import { fetchCurrentUser, logoutUser } from './auth/googleClient.js';

import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import CategoryCarousel from './components/CategoryCarousel.jsx';
import Promotions from './components/Promotions.jsx';
import CollectionsGrid from './components/CollectionsGrid.jsx';
import ProductCarousel from './components/ProductCarousel.jsx';
import CategoryCards from './components/CategoryCards.jsx';
import GenderCards from './components/GenderCards.jsx';
import Testimonials from './components/Testimonials.jsx';
import MediaCards from './components/MediaCards.jsx';
import NewsletterFooter from './components/NewsletterFooter.jsx';
import Footer from './components/Footer.jsx';
import LoginPopup from './components/LoginPopup.jsx';

const SAMPLE_PRODUCTS = [
  {
    id: 1,
    title: "Yemeraly Wings Diamond...",
    price: 22323,
    badge: "BEST SELLER",
    image: "/images/p1.png",
  },
  {
    id: 2,
    title: "Moonlit Gold Ring...",
    price: 22523,
    badge: "NEW",
    image: "/images/p2.png",
  },
  {
    id: 3,
    title: "Sparkle Stone Bracelet...",
    price: 22723,
    badge: "TRENDING",
    image: "/images/p3.png",
  },
  {
    id: 4,
    title: "Elegant Diamond Pendant...",
    price: 22923,
    badge: "TRENDING",
    image: "/images/p4.png",
  },
  {
    id: 5,
    title: "Rose Gold Classic Ring...",
    price: 23123,
    badge: "BEST SELLER",
    image: "/images/p5.png",
  },
  {
    id: 6,
    title: "Pearl Shine Earrings...",
    price: 23323,
    badge: "NEW",
    image: "/images/p1.png",
  },
  {
    id: 7,
    title: "Luxury Mangalsutra...",
    price: 23523,
    badge: "TRENDING",
    image: "/images/p2.png",
  },
  {
    id: 8,
    title: "Royal Gold Bangles...",
    price: 23723,
    badge: "BEST SELLER",
    image: "/images/p3.png",
  },
];

function TopStrip() {
  return (
    <div className="bg-[#009278] text-white text-[11px]">
      <div className="max-w-7xl mx-auto px-4 py-1 flex items-center justify-between">
        <p className="w-full text-center">
          Refer and earn extra discount{" "}
          <a href="#" className="text-[#2E4FA4]">
            Click here...
          </a>
        </p>
        <div className="flex items-center gap-2 absolute right-4">
          <span className="opacity-90">Pincode</span>
          <img className='w-4 h-4' src="/icons/location.svg" alt="loc" />
          <img
            src="/icons/flag.png"
            alt="IN"
            className="w-4 h-4 rounded-full border border-white/50"
          />
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [user, setUser] = useState(null);
  const [loginOpen, setLoginOpen] = useState(false);

  useEffect(() => {
    fetchCurrentUser().then(setUser).catch(() => setUser(null));
  }, []);

  const handleSignOut = async () => {
    await logoutUser();
    setUser(null);
  };

  return (
    <div className="min-h-screen bg-gemLight">
      <TopStrip />
      <Header onOpenLogin={() => setLoginOpen(true)} user={user} onSignOut={handleSignOut} />
      <Hero />
      <CategoryCarousel />
      <Promotions />
      <CollectionsGrid />

      <ProductCarousel title="TRENDING PRODUCTS" products={SAMPLE_PRODUCTS} bgColor="#FBFBFB" />
      <ProductCarousel title="BEST SELLERS" products={SAMPLE_PRODUCTS} bgColor="#FAFEFD" />

      <CategoryCards />
      <GenderCards />
      <Testimonials />
      <MediaCards />
      <NewsletterFooter />
      <Footer />

      <LoginPopup open={loginOpen} onClose={() => setLoginOpen(false)} />
    </div>
  );
}
