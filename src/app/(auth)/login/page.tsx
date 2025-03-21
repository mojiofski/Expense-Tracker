"use client";

import React, { useState } from "react";
import Image from "next/image";
import Logo from "@/components/Logo";
import Link from "next/link";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="flex w-full h-[100vh] items-center justify-center">
      {/* Mobile login */}
      <div className="flex flex-col w-full bg-white max-w-xs mx-auto rounded-lg p-4 md:max-w-md lg:hidden ">
        <div className="flex w-full text-sm ">
          <Link href={"/"}>بازگشت به صفحه اصلی</Link>
        </div>
        <div className="flex w-full items-center justify-end px-2 mb-8 border-b-2 border-b-gray-300">
          <Logo />
        </div>
        <form className="flex flex-col w-full gap-2">
          <p className="mb-2 text-center">
            ورود به <span className="text-purple-500">جیب جا</span>
          </p>
          <input
            type="text"
            value={email}
            placeholder="ایمیل"
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-600 rounded-md text-sm px-2 py-2 focus:outline-none focus:border focus:border-blue-400"
          />
          <input
            type="email"
            value={password}
            placeholder="رمز عبور"
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-600 rounded-md text-sm px-2 py-2 focus:outline-none focus:border focus:border-blue-400"
          />
          <button className="bg-blue-500 text-white rounded-md py-2 ">
            ورود
          </button>
        </form>
        <p className="text-gray-600 text-sm text-center mt-4">
          رمز عبور خود را فراموش کرده اید؟!{" "}
          <Link href={"/forget-password"} className="font-semibold ">
            بازیابی رمز عبور
          </Link>{" "}
        </p>
        <p className="text-sm text-gray-600 text-center mt-8 ">
          اگر ثبت نام نکرده اید ،{" "}
          <Link href={"/register"} className="font-semibold">
            همین حالا ثبت نام کنید
          </Link>
        </p>
      </div>
      {/* Desktop Login */}
      <div className="hidden lg:flex bg-white w-[1000px] rounded-md ">
        {/* Right Section */}
        <div className="flex flex-col items-center w-1/2 px-8 py-4">
          {/* nav */}
          <div className="flex items-center justify-between w-full text-md font-semibold border-b-2 border-gray-300">
            <Link href={"/"}>بازگشت به صفحه اصلی</Link>
            <Logo />
          </div>
          {/* Form */}
          <div className="flex flex-col w-full max-w-xs mx-auto rounded-lg p-4 mt-30 ">
            <p className="mb-2 text-center">
              ورود به <span className="text-purple-500">جیب جا</span>
            </p>
            <form className="flex flex-col w-full gap-2">
              <input
                type="text"
                value={email}
                placeholder="ایمیل"
                onChange={(e) => setEmail(e.target.value)}
                className="border border-gray-600 rounded-md text-sm px-2 py-2 focus:outline-none focus:border focus:border-blue-400"
              />
              <input
                type="email"
                value={password}
                placeholder="رمز عبور"
                onChange={(e) => setPassword(e.target.value)}
                className="border border-gray-600 rounded-md text-sm px-2 py-2 focus:outline-none focus:border focus:border-blue-400"
              />
              <button className="bg-blue-500 text-white rounded-md py-2 ">
                ورود
              </button>
            </form>
            <p className="text-gray-600 text-sm text-center mt-4">
              رمز عبور خود را فراموش کرده اید؟!{" "}
              <Link href={"/forget-password"} className="font-semibold ">
                بازیابی رمز عبور
              </Link>{" "}
            </p>
            <p className="text-sm text-gray-600 text-center mt-8 ">
              اگر ثبت نام نکرده اید ،{" "}
              <Link href={"/register"} className="font-semibold">
                همین حالا ثبت نام کنید
              </Link>
            </p>
          </div>
        </div>
        {/* Left Section */}
        <div className="flex w-1/2 ">
          {/* Image */}
          <div className="relative w-full h-[550px] rounded-l-md  overflow-hidden">
            <Image
              src={"/images/accounting3.jpg"}
              alt=""
              priority
              fill
              sizes="100%"
              className="object-cover  "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
