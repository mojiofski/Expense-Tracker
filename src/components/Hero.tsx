import React from "react";
import Image from "next/image";
import Link from "next/link";
const Hero = () => {
  return (
    <div className="flex w-full lg:flex ">
      <div className="relative w-full h-[250px] md:h-[400px] lg:h-[577px] -z-50">
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
        <div className="hidden lg:flex absolute bottom-15 left-15  px-4 py-2 rounded bg-purple-500 text-white ">
          <div className="flex flex-col gap-2 ">
            <p>سلام ،‌ خیلی خوش اومدی :)</p>
            <p>
              دخل و خرجتو خیلی راحت با این برنامه می تونی مدیریت کنی و در کنارش
              کلی کار های جذاب دیگه هم میتونی انجام بدی
            </p>

            <p>
              اول{" "}
              <Link className="text-blue-300 underline" href={"/register"}>
                ثبت نام
              </Link>{" "}
              کن بعدش خیلی راحت از امکانات برنامه استقاده کن
            </p>
            <p>
              اگرم قبلا ثبت نام کردی{" "}
              <Link className="text-blue-300 underline" href={"/login"}>
                از اینجا
              </Link>{" "}
              وارد حسابت شو
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
