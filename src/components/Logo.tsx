"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();
  return (
    <div
      onClick={() => {
        router.push("/");
      }}
      className="flex justify-end items-center cursor-pointer w-1/2 "
    >
      <span className="text-2xl font-semibold text-purple-600 mt-2 cursor-pointer">
        Jibja
      </span>
      <div className="relative w-15 h-15 bg-white">
        <Image
          src={"/images/Accounting-logo-design-price.jpg"}
          alt=""
          priority
          fill
          sizes="100%"
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Logo;
