import MobileMenu from "@/components/MobileMenu";
import Navbar from "@/components/Navbar";
import SlideMenu from "@/components/SlideMenu";
import React from "react";

const Home = () => {
  return (
    <div className="px-4 py-2">
      <Navbar />
      <MobileMenu />
      <SlideMenu />
    </div>
  );
};

export default Home;
