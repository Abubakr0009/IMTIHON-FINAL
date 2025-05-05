import {
  Cart16Icon,
  Compare16Icon,
  Compare24Icon,
  HeartOutline24Icon,
} from "@/assets/icons";
import { calculateNasiya } from "@/hooks/calculateNasiya";
import { formatNumberWithSpaces } from "@/hooks/formatNumberwithSpace";
import { API } from "@/hooks/getEnv";
import { ProductType } from "@/types/ProductType";
import Image from "next/image";
import React from "react";
import Button from "../Button";
import { ShoppingBag } from "lucide-react";
import { useRouter } from "@/i18n/navigation";

function ProductCard({
  product,
  extraStyle,
  extraStyleForImg,
}: {
  product: ProductType;
  extraStyle?: string;
  extraStyleForImg?: string;
}) {
  const router = useRouter();
  const handleGo = () => {
    router.push(`${product.category.name}/${product.id}`);
  };
  return (
    <div
      className={`w-[270px] max-[1200px]:w-[250px] max-[901px]:w-[250px] max-[640px]:w-[100%] max-[1100px]:w-[230px] max-[840px]:w-[230px] max-[1000px]:w-[200px] max-[770px]:w-[200px] !mx-[15px] max-[690px]:!mx-0 group transition-all !duration-500 ${extraStyle}`}
    >
      <div
        className={`bg-[#EBEFF3]  w-full flex justify-center items-center h-[270px] max-[1200px]:h-[250px] max-[901px]:h-[250px] max-[410px]:h-[200px] max-[1100px]:h-[230px] max-[640px]:h-[250px] max-[840px]:h-[230px] max-[1000px]:h-[200px] max-[770px]:h-[200px] rounded-[6px] overflow-hidden relative ${extraStyleForImg}`}
      >
        <Image
          onClick={handleGo}
          src={`${API}/uploads/${product.image}`}
          alt={product.name}
          width={202}
          height={202}
          className="w-[80%] h-auto group-hover:scale-[1.1] duration-300 cursor-pointer"
        ></Image>
        <button className="absolute top-5 right-5 text-gray-500 text-[25px] cursor-pointer">
          <HeartOutline24Icon />
        </button>
      </div>
      <p
        onClick={handleGo}
        className=" line-clamp-2 text-[14px] text-[#545D6A] mt-[16px] mb-[28px] max-[1000px]:mb-[17px] max-[520px]:text-[12px]"
      >
        {product.description}
      </p>
      <div className="flex items-end justify-between max-[1100px]:hidden">
        <div onClick={handleGo}>
          <strong className="text-xl font-bold text-[#0A1729]">
            {formatNumberWithSpaces(product.price)} uzs
          </strong>
          <div className="bg-[#F02C961A] rounded-[3px] text-[#F02C96] py-[7px] px-2.5 text-[14px]">
            {product.nasiya} /{" "}
            {formatNumberWithSpaces(
              calculateNasiya(product.price, product.nasiya)
            )}{" "}
            uzs
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button
            icon={<Compare24Icon />}
            iconPosition="left"
            extraStyle="bg-transparent !text-[#545D6A] !border-[#545D6A] h-[50px] !p-0 w-[50px]"
          />
          <Button
            icon={<ShoppingBag size={24} />}
            iconPosition="left"
            extraStyle="!border-[#545D6A] h-[50px] !p-0 w-[50px]"
          />
        </div>
      </div>
      <div className="flex items-end justify-between min-[1100px]:hidden flex-col">
        <div onClick={handleGo} className="w-full flex justify-between mb-3">
          <strong className="text-lg font-bold text-[#0A1729] max-[1000px]:text-[14px]">
            {formatNumberWithSpaces(product.price)}
            <span className="text-xs">uzs</span>
          </strong>
          <div className="bg-[#F02C961A] rounded-[3px] text-[#F02C96] py-[3px] px-2.5 text-[14px] max-[1000px]:text-[10px]">
            {product.nasiya} /{" "}
            {formatNumberWithSpaces(
              calculateNasiya(product.price, product.nasiya)
            )}
            <span className="max-[400px]:hidden">uzs</span>
          </div>
        </div>
        <div className="flex items-center justify-between w-full gap-[8px]">
          <Button
            icon={<Compare16Icon />}
            iconPosition="left"
            extraStyle="bg-transparent !text-[#545D6A] !border-[#545D6A] h-[50px] !p-0 !w-[50px] max-[1000px]:h-[40px] !min-w-[40px max-[350px]:text-[8px] max-[350px]:h-[30px]"
          />
          <Button
            icon={<Cart16Icon />}
            iconPosition="right"
            title="Savatcha"
            extraStyle="!border-[#545D6A] h-[50px] text-sm max-w-[90%] max-[1000px]:h-[40px] max-[435px]:px-[10px] max-[350px]:text-[8px] max-[350px]:h-[20px] max-[520px]:text-xs"
          />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
