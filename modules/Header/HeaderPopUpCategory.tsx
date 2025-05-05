"use client";
import { Context } from "@/context/Context";
import { IMG_API } from "@/hooks/getEnv";
import { Link } from "@/i18n/navigation";
import { getCategories } from "@/service/getCategories";
import { HeaderCategoriesType } from "@/types/HeaderCategoriesType";
import Image from "next/image";
import React, { useContext } from "react";

const HeaderPopapCategory = () => {
  const { showCategory } = useContext(Context);
  const { data: categories, isLoading } = getCategories();

  return (
    <div
      className={`${
        showCategory ? "h-[570px] z-50" : "h-0"
      } w-full duration-300 overflow-hidden absolute flex shadow-2xl bg-white top-[102px]`}
    >
      <div className="w-[30%] flex flex-col py-[43px] px-[32px] bg-[#EBEFF3]">
        {categories.map((item: HeaderCategoriesType) => (
          <Link
            key={item.id}
            href="/"
            className="
              group 
              py-[12px] 
              flex 
              items-center 
              gap-[15px] 
              pl-[40px] 
              mt-[5px] 
              text-[16px] 
              transition-all 
              duration-300 
              ease-in-out 
              rounded-md 
              hover:bg-[#134E9B] 
              hover:text-white 
              hover:shadow-md 
              hover:scale-[1.02]
            "
          >
            <Image
              className="w-[24px] h-[24px] transition duration-300 group-hover:invert"
              src={`${IMG_API}/${item.icon}`}
              alt="category icon"
              width={24}
              height={24}
              priority
            />
            <span>{item.name}</span>
          </Link>
        ))}
      </div>
      <div className="w-[70%] bg-[#ffffff]"></div>
    </div>
  );
};

export default HeaderPopapCategory;
