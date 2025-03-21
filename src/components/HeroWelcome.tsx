import Link from "next/link";
import React from "react";

const HeroWelcome = () => {
  return (
    <div className="hidden lg:flex absolute bottom-15 left-15  px-4 py-2 rounded bg-purple-500 text-white z-50">
      <div className="flex flex-col gap-2">
        <p>سلام ،‌ خیلی خوش اومدی :)</p>
        <div>
          {" "}
          <p>
            دخل و خرجتو خیلی راحت با این برنامه می تونی مدیریت کنی و در کنارش
            کلی کار های جذاب دیگه هم میتونی انجام بدی
          </p>
        </div>
        <div className="flex flex-col gap-2">
          {" "}
          <span>
            اول{" "}
            <Link className="text-blue-300 underline" href={"/register"}>
              ثبت نام
            </Link>{" "}
            کن بعدش خیلی راحت از امکانات برنامه استقاده کن
          </span>
          <span>
            اگرم قبلا ثبت نام کردی{" "}
            <Link className="text-blue-300 underline" href={"/login"}>
              از اینجا
            </Link>{" "}
            وارد حسابت شو
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeroWelcome;
