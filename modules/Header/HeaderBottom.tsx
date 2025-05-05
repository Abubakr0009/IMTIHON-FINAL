"use client"
import { getCategories } from '@/service/getCategories'
import { HeaderCategoriesType } from '@/types/HeaderButtonType';
import Link from 'next/link';
import React from 'react'

const HeaderBottom = () => {

  const {data:categories, isLoading, isError} = getCategories();


  
  return (
    <div className='flex items-center justify-between containers'>
      {isLoading ? "Lodding..." : categories.map((item:HeaderCategoriesType) => <Link className='text-[#545D6A] text-[16px] hover:text-[#134E9B] duration-300' key={item.id} href={'/'}>{item.name}</Link>)}
    </div>
  )
}

export default HeaderBottom