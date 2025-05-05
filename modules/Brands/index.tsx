"use client"
import React from 'react'
import { getBrands } from '@/service/getBrands'
import Image from 'next/image'
import { BrandsType } from '@/types/BrandsType'
import { IMG_API } from '@/hooks/getEnv'
import "./style.css"

const Brands = () => {
  const { data: brands } = getBrands()

  return (
    <div className="containers brands-wrapper grid">
      {brands.map((item: BrandsType) => (
        <div key={item.id} className="brands-iteam">
          {item.image == null ? (
            <span>{item.name}</span>
          ) : (
            <Image
              className="max-w-[80px] w-full h-auto object-contain"
              src={`${IMG_API}/${item.image}`}
              alt={item.name}
              width={150}
              height={60}
              priority
            />
          )}
        </div>
      ))}
    </div>
  )
}

export default Brands
