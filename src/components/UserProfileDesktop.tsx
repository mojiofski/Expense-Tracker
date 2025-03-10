"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
const UserProfileDesktop = () => {
  return (
    <div className="flex items-center justify-center gap-2 p-2">
      <div className="relative w-12 h-12 rounded-full overflow-hidden   ">
        <Image
          src={"/images/UnknownPerson.jpg"}
          alt=""
          fill
          sizes="100%"
          priority
          className="object-cover"
        />
      </div>
      {}
      <div className="flex items-center justify-center gap-2">
        <p>
          خوش آمدید ، لطفا برای استفاده از قابلیت های  برنامه وارد حساب کاربری خودتون بشین
        </p>
        <Link
          href={"/login"}
          className="py-1 px-6 rounded-md bg-red-500 text-white text-md"
        >
          ورود
        </Link>
      </div>
    </div>
  );
};

export default UserProfileDesktop;
