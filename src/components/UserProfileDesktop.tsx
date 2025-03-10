"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const UserProfileDesktop = () => {
  return (
    <div className="flex items-center justify-center gap-2 p-2">
      <Link href={"/dashboard"}>
        <div className="relative w-12 h-12 rounded-full overflow-hidden">
          <Image
            src={"/images/UnknownPerson.jpg"}
            alt=""
            fill
            sizes="100%"
            priority
            className="object-cover"
          />
        </div>
      </Link>

      <p>خوش آمدید :)</p>
    </div>
  );
};

export default UserProfileDesktop;
