import React from "react";
import Image from "next/image";
import HeroWelcome from "./HeroWelcome";

const Hero = () => {
  return (
    <div className="flex w-full lg:flex ">
      <div className="relative w-full h-[350px] md:h-[470px] lg:h-[577px]">
        <Image
          src={"/images/accounting4.jpg"}
          alt=""
          fill
          sizes="100%"
          priority
          className="object-cover"
        />
        <div className="absolute top-0 bottom-0 right-0 left-0 bg-black opacity-30 lg:opacity-70 "></div>
        {/* hero welocome */}
        <HeroWelcome />
      </div>
    </div>
  );
};

export default Hero;
