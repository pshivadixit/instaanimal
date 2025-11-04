import React from "react";
import { useLocation } from "react-router-dom";
import AppRoutes from "./routes";
import Header from "./components/Header";
import HeroSlider from "./components/HeroSlider";
import OverviewSection from "./components/OverviewSection";
import FeaturedProducts from "./components/FeaturedProducts";
import CompanyInfoSection from "./components/CompanyInfoSection";

export default function App() {
  const location = useLocation();

  // ✅ Consider both root and GitHub Pages-style paths as home
  const isHome =
    location.pathname === "/" ||
    location.pathname === "/instaanimal" ||
    location.pathname === "/instaanimal/";

  return (
    <div className="app-root">
      <Header />

      <main>
        {isHome && (
          <>
            {/* Hero section with slider */}
            <HeroSlider />

            {/* Key home sections */}
            <OverviewSection />
            <FeaturedProducts />
            <CompanyInfoSection />
          </>
        )}

        {/* Routes for About, Products, Contact, etc. */}
        <AppRoutes />
      </main>
    </div>
  );
}
