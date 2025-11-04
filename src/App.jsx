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
  const isHome = location.pathname === "/";

  return (
    <div className="app-root">
      <Header />

      <main>
        {isHome && (
          <>
            <HeroSlider />
            <OverviewSection />
            <FeaturedProducts />
            <CompanyInfoSection />
          </>
        )}
        <AppRoutes />
      </main>
    </div>
  );
}
