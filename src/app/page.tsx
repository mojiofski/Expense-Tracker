import Hero from "@/components/Hero";
import IsUserExist from "@/components/IsUserExist";
import Navbar from "@/components/Navbar";

import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col ">
      <Navbar />
    

      <Hero />
    </div>
  );
};

export default Home;
