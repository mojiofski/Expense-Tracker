import Link from "next/link";
import React from "react";

const HeroWelcomeMobile = () => {
  return (
    <div className="flex bg-white text-gray-700 p-2 w-full h-[214px] text-sm lg:hidden">
      <div className="flex flex-col gap-2 ">
        <p className="text-purple-500">سلام ،‌ خیلی خوش اومدی :)</p>
        <p>
          دخل و خرجتو خیلی راحت با این برنامه می تونی مدیریت کنی و در کنارش کلی
          کار های جذاب دیگه هم میتونی انجام بدی
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
  );
};

export default HeroWelcomeMobile;
