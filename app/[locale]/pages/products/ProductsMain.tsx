"use client"
import ProductCard from '@/components/Products/ProductCard'
import { ProductType } from '@/types/ProductType'
import React, { Dispatch, FC, SetStateAction, useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'
import { useSearchParams } from 'next/navigation'
import { useRouter } from '@/i18n/navigation'

const ProductsMain = ({ products, setPage }: { products: ProductType[], setPage: Dispatch<SetStateAction<string | number>> }) => {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [sort, setSort] = useState(searchParams.get('sort') || '')
  const [limit, setLimit] = useState(searchParams.get('limit') || '8')
  const t = useTranslations('Products')

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString())
    sort === '--' ? params.delete('sort') : params.set('sort', String(sort))
    params.set('limit', String(limit))
    params.set('page', String(1))
    setPage(1)
    router.push(`?${params.toString()}`)
  }, [sort, limit])

  return (
    <>
  
      <div className='grid grid-cols-3 max-[950px]:grid-cols-2 gap-[10px]'>
        {products?.map((product) => (<ProductCard key={product.id} product={product} extraStyle='mb-[30px] max-[1060px]:w-[200px] max-[951px]:w-[250px] max-[680px]:w-[100%]' extraStyleForImg='max-[1060px]:h-[200px] max-[951px]:h-[250px] max-[680px]:h-[300px]' />))}
      </div>
    </>
  )
}

export default ProductsMain