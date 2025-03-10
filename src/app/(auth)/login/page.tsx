"use client";

import React, { useState } from "react";
import Image from "next/image";
import Logo from "@/components/Logo";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="flex w-full h-[100vh] items-center justify-center">
      {/* Mobile login */}
      <div className="flex flex-col w-full bg-white max-w-xs mx-auto rounded-lg p-4 md:max-w-md lg:hidden ">
        <div className="flex w-full items-center justify-end px-2 mb-8 border-b-2 border-b-gray-300">
          <Logo />
        </div>
        <form className="flex flex-col w-full gap-2">
          <input
            type="text"
            value={email}
            placeholder="ایمیل"
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded-md text-sm px-2 py-2 "
          />
          <input
            type="email"
            value={password}
            placeholder="رمز عبور"
            onChange={(e) => setPassword(e.target.value)}
            className="border rounded-md text-sm px-2 py-2 "
          />
          <button className="bg-blue-500 text-white rounded-md py-2 ">
            ورود
          </button>
        </form>
        <p className="text-gray-600 text-sm text-center mt-4">
          رمز عبور خود را فراموش کرده اید؟!{" "}
          <span className="font-semibold ">بازیابی رمز عبور</span>{" "}
        </p>
        <p className="text-sm text-gray-600 text-center mt-8 ">
          اگر ثبت نام نکرده اید ،{" "}
          <span className="font-semibold">همین حالا ثبت نام کنید</span>
        </p>
      </div>
      {/* Desktop Login */}
      <div className="hidden lg:flex bg-white w-[1000px] rounded-md ">
        {/* Image */}
        <div className="flex w-1/2  ">
          <div className="relative w-full h-[550px] rounded-r-md  overflow-hidden">
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
        {/* form */}
        <div className="flex flex-col items-center justify-around w-1/2 px-8">
          <div className="flex w-full items-center justify-end  border-b-2 border-b-gray-300">
            <Logo />
          </div>
          <div className="flex flex-col w-full max-w-xs mx-auto rounded-lg p-4 ">
            <form className="flex flex-col w-full gap-2">
              <input
                type="text"
                value={email}
                placeholder="ایمیل"
                onChange={(e) => setEmail(e.target.value)}
                className="border rounded-md text-sm px-2 py-2 "
              />
              <input
                type="email"
                value={password}
                placeholder="رمز عبور"
                onChange={(e) => setPassword(e.target.value)}
                className="border rounded-md text-sm px-2 py-2 "
              />
              <button className="bg-blue-500 text-white rounded-md py-2 ">
                ورود
              </button>
            </form>
            <p className="text-gray-600 text-sm text-center mt-4">
              رمز عبور خود را فراموش کرده اید؟!{" "}
              <span className="font-semibold ">بازیابی رمز عبور</span>{" "}
            </p>
            <p className="text-sm text-gray-600 text-center mt-8 ">
              اگر ثبت نام نکرده اید ،{" "}
              <span className="font-semibold">همین حالا ثبت نام کنید</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
