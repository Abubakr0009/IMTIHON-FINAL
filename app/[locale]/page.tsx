import Products from "@/components/Products/Products";
import Brands from "@/modules/Brands";
import CategoryBrands from "@/modules/CategoryBrands";
import Hero from "@/modules/Hero";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations()
  return (
    <>
    <Hero/>
    <Brands/>
    <Products title={t('mostPopularProducts')} api="products"/>
    <div className='max-[690px]:hidden'><Products title={t('mostPopularProducts')} api="products"/></div>
    <div className='max-[690px]:hidden'><Products title={t('mostPopularProducts')} api="products"/></div>
    <CategoryBrands/>
    </>
  );
}
