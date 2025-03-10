import IsUserExist from "@/components/IsUserExist";
import MobileMenu from "@/components/MobileMenu";
import Navbar from "@/components/Navbar";
import SlideMenu from "@/components/SlideMenu";
import React from "react";

const Home = () => {
  return (
    <div className="px-2 py-2">
      <Navbar />
      <IsUserExist />

      <MobileMenu />
      <SlideMenu />
    </div>
  );
};

export default Home;
