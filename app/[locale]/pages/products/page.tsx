"use client"
import debounce from '@/hooks/debounse';
import { formatNumberWithSpaces } from '@/hooks/formatNumberwithSpace';
import { Link, useRouter } from '@/i18n/navigation';
import { getBrands } from '@/service/getBrands';
import { getCustomProducts } from '@/service/getCustomProducts'
import { BrandsType } from '@/types/BrandsType';
import * as RadixSlider from "@radix-ui/react-slider";
import { useTranslations } from 'next-intl';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import ProductsMain from './ProductsMain';
import { handleNext, handlePrev, handleSetPage } from './Pagination/productsPagination';
import { getCategories } from '@/service/getCategories';
import { HeaderCategoriesType } from '@/types/HeaderCategoriesType';
import Products from '@/components/Products/Products';
import { FilterIcon } from '@/assets/icons';
import Button from '@/components/Button';
import Modal from '@/components/Modal';

function ProductsPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const t = useTranslations("Products");
  const [page, setPage] = useState(searchParams.get('page') || 1)
  const [price, setPrice] = useState<[number, number]>([parseInt(searchParams.get('min') ?? '0') || 0, parseInt(searchParams.get('max') ?? '5000000') || 5000000])
  const brand_id = searchParams.get('brand') || '';
  const category_id = searchParams.get('category') || '';
  const { data: products } = getCustomProducts();
  const { data: brands } = getBrands()
  const { data: categories } = getCategories()
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const debouncedPrice = debounce(price, 1100);
  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString())
    if (price[0] === 0) params.delete('min'); else params.set('min', String(price[0]))
    if (price[1] === 5000000) params.delete('max'); else params.set('max', String(price[1]))
    params.set('page', String(1))
    setPage(1)
    router.push(`?${params.toString()}`)
  }, [debouncedPrice])

  const BrandParams = (id: number | string) => {
    const params = new URLSearchParams(searchParams.toString())
    if (id === '') { params.delete('brand') } else { params.set('brand', String(id)) }
    params.set('page', String(1)); setPage(1)
    router.push(`?${params.toString()}`)
  }
  const CategoryParams = (id: number | string) => {
    const params = new URLSearchParams(searchParams.toString())
    if (id === '') { params.delete('category') } else { params.set('category', String(id)) }
    params.set('page', String(1)); setPage(1)
    router.push(`?${params.toString()}`)
  }

  return (
    <>
      <div className='containers'>
        <div className='flex gap-3 text-[#B6BABF] text-[14px] font-normal my-[20px] mb-[32px]'>
          <Link href={'/'}>{t('main')}</Link> <span>/</span> <p>{t('products')} </p> <span>/</span></div>
        <div className='flex justify-between items-start gap-[21px] max-[680px]:flex-col max-[680px]:gap-[10px]'>
          <div className='flex justify-between gap-[10px] items-center w-full min-[680px]:hidden '>
            <Button title={t('filter')} onClick={() => setIsModalOpen(true)} iconPosition='right' icon={<FilterIcon />} extraStyle='text-[14px] !py-[11px] !px-[20px] min-[680px]:hidden' />
          </div>
          <div className={`min-w-[280px] w-[280px] bg-[#EBEFF3] p-[18px] rounded-[8px] max-[800px]:min-w-[220px] max-[680px]:hidden`}>
            <h3 className='text-[16px] font-medium mb-[15px]'>{t('price')}</h3>
            <div className='flex gap-[4px]'>
              <div className='w-full flex flex-col'>
                <span className='text-[12px] text-[#00000066] mb-[6px]'>{t('from')}</span>
                <div className='w-full rounded-[5px] bg-[#FFFFFF] text-[14px] p-2'>{formatNumberWithSpaces(price[0])} uzs</div>
              </div>
              <div className='w-full flex flex-col'>
                <span className='text-[12px] text-[#00000066] mb-[6px]'>{t('to')}</span>
                <div className='w-full rounded-[5px] bg-[#FFFFFF] text-[14px] p-2'>{formatNumberWithSpaces(price[1])} uzs</div>
              </div>
            </div>
            <RadixSlider.Root className="relative flex w-full touch-none select-none items-center h-5 my-[26px]" min={0} max={5000000} step={10} value={price} onValueChange={(value) => setPrice([value[0], value[1]])}>
              <RadixSlider.Track className="relative h-[3px] w-full grow rounded-full bg-gray-300">
                <RadixSlider.Range className="absolute h-full bg-[#15509E] rounded-full" />
              </RadixSlider.Track>
              <RadixSlider.Thumb className="block h-5 cursor-pointer w-5 rounded-full bg-[#EBEFF3] border-[3px] border-[#15509E] shadow-md focus:outline-none" />
              <RadixSlider.Thumb className="block h-5 cursor-pointer w-5 rounded-full bg-[#EBEFF3] border-[3px] border-[#15509E] shadow-md focus:outline-none " />
            </RadixSlider.Root>
            <h3 className='text-[16px] font-medium mb-[15px]'>{t('category')}</h3>
            <div className='flex flex-wrap gap-[5px]'>
              {categories?.map((category: HeaderCategoriesType) => (
                <div onClick={() => CategoryParams(category.id)} key={category.id} className={`rounded-[30px] max-[800px]:w-full ${category.id === Number(category_id) ? "bg-[#134E9B] text-white" : "bg-[#FFFFFF] text-[#0A1729]"} text-[12px] duration-500 cursor-pointer py-[7px] px-[18px] hover:bg-[#15509E] hover:text-white`}>
                  {category.name}
                </div>
              ))}
              <div onClick={() => CategoryParams('')} className={`rounded-[30px] ${"" === category_id ? "bg-[#134E9B] text-white" : "bg-[#FFFFFF] text-[#0A1729]"} text-[12px] duration-500 cursor-pointer py-[7px] px-[18px] max-[800px]:w-full hover:bg-[#15509E] hover:text-white`}>{t('all')}</div>
            </div>
            <h3 className='text-[16px] font-medium mt-[20px] mb-[15px]'>{t('brands')}</h3>
            <div className='flex flex-wrap gap-[5px]'>
              {brands?.map((brand: BrandsType) => (
                <div onClick={() => BrandParams(brand.id)} key={brand.id} className={`rounded-[30px] ${brand.id === Number(brand_id) ? "bg-[#134E9B] text-white" : "bg-[#FFFFFF] text-[#0A1729]"} text-[12px] duration-500 cursor-pointer py-[7px] px-[18px] hover:bg-[#15509E] hover:text-white`}>
                  {brand.name}
                </div>
              ))}
              <div onClick={() => BrandParams('')} className={`rounded-[30px] ${"" === brand_id ? "bg-[#134E9B] text-white" : "bg-[#FFFFFF] text-[#0A1729]"} text-[12px] duration-500 cursor-pointer py-[7px] px-[18px]`}>{t('all')}</div>
            </div>
          </div>
          <div className='w-[100%]'>
            <ProductsMain products={products.items} setPage={setPage} />
          </div>
        </div>
        {products?.totalPages > 1 && (
          <div className={`flex justify-center gap-2 mt-8 flex-wrap`}>
            <button disabled={Number(page) <= 1} onClick={() => handlePrev(page, searchParams, router, setPage)} className="px-3 text-[12px] py-1 rounded bg-[#134E9B] text-white cursor-pointer disabled:opacity-50">
              <span>{t('prev')}</span>
            </button>
            {Array.from({ length: products.totalPages }, (_, i) => (
              <button key={i} onClick={() => handleSetPage(i, searchParams, router, setPage)} className={`px-3 py-1 rounded ${Number(page) === i + 1 ? 'bg-[#134E9B] text-white' : 'bg-[#EBEFF3] cursor-pointer hover:bg-[#134E9B]/30'}`} >
                {i + 1}
              </button>
            ))}
            <button disabled={Number(page) >= products.totalPages} onClick={() => { handleNext(page, searchParams, router, setPage, products.totalPages) }} className="px-3 py-1 text-[12px] rounded bg-[#134E9B] cursor-pointer text-white disabled:opacity-50" >
              <span>{t('next')}</span>
            </button>
          </div>
        )}
      </div>
      <Products title={t('productsTitle')} api='products' />
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        <div className={`w-full bg-[#EBEFF3] p-[18px] rounded-[8px]`}>
          <h3 className='text-[16px] font-medium mb-[15px]'>{t('price')}</h3>
          <div className='flex gap-[4px]'>
            <div className='w-full flex flex-col'>
              <span className='text-[12px] text-[#00000066] mb-[6px]'>{t('from')}</span>
              <div className='w-full rounded-[5px] bg-[#FFFFFF] text-[14px] p-2'>{formatNumberWithSpaces(price[0])} uzs</div>
            </div>
            <div className='w-full flex flex-col'>
              <span className='text-[12px] text-[#00000066] mb-[6px]'>{t('to')}</span>
              <div className='w-full rounded-[5px] bg-[#FFFFFF] text-[14px] p-2'>{formatNumberWithSpaces(price[1])} uzs</div>
            </div>
          </div>
          <h3 className='text-[16px] font-medium mb-[15px]'>{t('category')}</h3>
          <div className='flex flex-wrap gap-[5px]'>
            {categories?.map((category: HeaderCategoriesType) => (
              <div onClick={() => CategoryParams(category.id)} key={category.id} className={`rounded-[30px] max-[340px]:w-full ${category.id === Number(category_id) ? "bg-[#134E9B] text-white" : "bg-[#FFFFFF] text-[#0A1729]"} text-[12px] duration-500 cursor-pointer py-[7px] px-[18px] hover:bg-[#15509E] hover:text-white`}>
                {category.name}
              </div>
            ))}
            <div onClick={() => CategoryParams('')} className={`rounded-[30px] ${"" === category_id ? "bg-[#134E9B] text-white" : "bg-[#FFFFFF] text-[#0A1729]"} text-[12px] duration-500 cursor-pointer py-[7px] px-[18px] max-[340px]:w-full hover:bg-[#15509E] hover:text-white`}>{t('all')}</div>
          </div>
          <h3 className='text-[16px] font-medium mt-[20px] mb-[15px]'>{t('brands')}</h3>
          <div className='flex flex-wrap gap-[5px]'>
            {brands?.map((brand: BrandsType) => (
              <div onClick={() => BrandParams(brand.id)} key={brand.id} className={`rounded-[30px] ${brand.id === Number(brand_id) ? "bg-[#134E9B] text-white" : "bg-[#FFFFFF] text-[#0A1729]"} text-[12px] duration-500 cursor-pointer py-[7px] px-[18px] hover:bg-[#15509E] hover:text-white`}>
                {brand.name}
              </div>
            ))}
            <div onClick={() => BrandParams('')} className={`rounded-[30px] ${"" === brand_id ? "bg-[#134E9B] text-white" : "bg-[#FFFFFF] text-[#0A1729]"} text-[12px] duration-500 cursor-pointer py-[7px] px-[18px]`}>{t('all')}</div>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default ProductsPage;
