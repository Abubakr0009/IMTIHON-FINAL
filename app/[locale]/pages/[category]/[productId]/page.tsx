"use client"
import {  CompareIcon } from '@/assets/icons'
import Products from '@/components/Products/Products'
import { IMG_API } from '@/hooks/getEnv'
import { Link } from '@/i18n/navigation'
import { getSingleProduct } from '@/service/getSingleProduct'
import { getProductVariations } from '@/service/getVariations'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import React from 'react'

const SinglePage = () => {
    const params: { id: string } = useParams()
    const { data: singleProduct } = getSingleProduct(params.id)
    const { data: variations } = getProductVariations(params.id)

    return (
        <>
            <div className="containers !mt-[10px] ">
                <div className="flex gap-[15px]">
                    <Link className='text-[15px] text-[#B6BABF] gap-[15px] flex ' href={"/"}>
                        <span>Bosh sahifa</span>
                        <span>/</span>
                    </Link>
                    <Link className='text-[15px] text-[#B6BABF] gap-[15px] flex ' href={"/"}>
                        <span>Smartfonlar</span>
                        <span>/</span>
                    </Link>
                    <Link className='text-[15px] text-[#B6BABF]  ' href={"/"}>{singleProduct.name}</Link>
                </div>
                <div className="">
                    <h2 className='my-[27px] text-[32px] font-bold'>{singleProduct.name}</h2>
                    <div className=" justify-between flex flex-col md:flex-row">
                        <div className="w-[47%] h-[430px] bg-[#EBEFF3] flex items-center justify-center relative">
                            <Image className='w-[341px] h-[341px] object-contain' src={`${IMG_API}/${singleProduct.image}`} alt='Single img' width={341} height={341} />
                            <div className="absolute top-[26px] right-[31px] flex gap-[20px] ">
                                <button><CompareIcon /></button>
                                {/* <button><LikeIcon /></button> */}
                            </div>
                        </div>
                        <div className="w-[47%]">
                            <div className="flex items-center gap-[20px] mt-[31px]">
                                <span className='text-[16px] text-[#515D6C] font-normal'>Narxi</span>
                                <p className='text-[32px] font-bold text-[#06172D]'>{singleProduct.price}</p>
                                <span className='text-[24px] text-[#06172D] font-semibold'>UZS</span>
                            </div>
                            <p className='py-[19px] px-[97px] mt-[36px] mb-[10px] bg-[#EBEFF3] text-[#545D6A] text-[16px] font-normal rounded-[6px]'>Oyiga 456 999 uszdan muddatli to’lov</p>
                            <div className="flex gap-[14px] mb-[43px]">
                                <button className='bg-[#ffffff] text-[#134E9B] text-[16px] font-normal rounded-[6px] border-[1px]  py-[18px] px-[55px] '>Savatga qo‘shish</button>
                                <button className='bg-[#134E9B] text-[#ffffff] text-[16px] font-normal rounded-[6px] py-[18px] px-[71px]'>Xarid qilish</button>
                            </div>
                            <div className="flex gap-[16px]">
                                <Image className='w-[24px] h-[24px]' src={"/images/SingleIcon1.png"} alt='1' width={24} height={24} priority/>
                                <p className='text-[16px] font-normal text-[#06172DB2]'>Yetkazib berish O’zbekiston bo’ylab</p>
                            </div>
                            <div className="flex gap-[16px] mt-[20px]">
                                <Image className='w-[24px] h-[24px]' src={"/images/SingleIcon2.png"} alt='1' width={24} height={24} priority/>
                                <p className='text-[16px] font-normal text-[#06172DB2]'>Do’kondi o’zidan olib ketishingiz mumkin</p>
                            </div>
                            <div className="flex gap-[16px] mt-[20px]">
                                <Image className='w-[24px] h-[24px]' src={"/images/SingleIcon3.png"} alt='1' width={24} height={24} priority/>
                                <p className='text-[16px] font-normal text-[#06172DB2]'>Tahminiy yetkazib berish vaqti 1 kundan 3 kungacha......</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-[80px] ">
                        <div className="flex items-center gap-[85px] mb-[45px] ">
                            <strong>Telfon xususiyatlari</strong>
                            <strong>Mijozlarni fikirlari</strong>
                        </div>
                        <div className="w-[45%] mb-[100px] ">
                            {variations?.options?.map((item: any) => (
                                <div key={item.id} className="py-[5px] border-b-[2px] text-[#545D6A] text-[18px] border-slate3400 border-dashed flex justify-between">
                                    <div className="w-[50%]">{variations.name}</div>
                                    <div className="w-[50%]">{item?.value}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Products api='/products' title='Oxirgi ko’rgan mahsulotlar' />
        </>
    )
}

export default SinglePage