"use client";

import { useRouter } from "next/navigation";
import React from "react";

const IsUserExist = () => {
  const router = useRouter();
  return (
    <>
    {}
      <div className="flex flex-col w-full bg-white text-gray-700 mt-2 rounded-lg lg:hidden">
        <p className="text-sm p-2">
          خوش آمدید ، لطفا برای استفاده از قابلیت های برنامه وارد حساب کاربری
          خودتون بشین
        </p>
        <button
          onClick={() => {
            router.push("/login");
          }}
          className="bg-red-500 text-white rounded-md w-1/3 mx-auto py-1 mb-1 text-sm"
        >
          ورود
        </button>
      </div>
    </>
  );
};

export default IsUserExist;
