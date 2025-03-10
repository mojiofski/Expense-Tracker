import React from "react";
import Image from "next/image";
const Hero = () => {
  return (
    <div className="flex w-full lg:flex ">
      <div className="relative w-full h-[362px] md:h-[400px] lg:h-[577px] -z-50">
        <Image
          src={"/images/accounting4.jpg"}
          alt=""
          fill
          sizes="100%"
          priority
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
