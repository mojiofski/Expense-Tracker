"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();
  return (
    <div className="flex justify-end items-center w-1/2">
      <span
        onClick={() => {
          router.push("/");
        }}
        className="text-2xl font-semibold text-purple-600 mt-2 cursor-pointer"
      >
        Jibja
      </span>
      <div
        onClick={() => {
          router.push("/");
        }}
        className="relative w-15 h-15 bg-white cursor-pointer"
      >
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
