import React from "react";
import { Button } from "./components/ui/button";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Policies from "./components/Policies";
import ProductsListing from "./components/ProductsListing";
import Testimonials from "./components/Testimonials";
import Newsletter from "./components/Newsletter";

const App = () => {
  return (
    <div>
      <Navbar />

      <main className="py-6 px-40">
        <HeroSection />
        <Policies />
        <ProductsListing />
      </main>
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default App;
