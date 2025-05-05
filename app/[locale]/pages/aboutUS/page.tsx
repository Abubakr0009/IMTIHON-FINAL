"use client"
import { Printer16Icon, PrinterIcon, Share16Icon, ShareIcon } from '@/assets/icons';
import Products from '@/components/Products/Products';
import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
import React from 'react'

function AboutUS() {
  const t = useTranslations('AboutUs');
  return (
    <>
      <div className='containers'>
        <div className='flex gap-2 text-[#B6BABF] text-[14px] font-normal mt-[20px] mb-[50px]'><Link href={'/'}>{t('about.main')}</Link> / <p>{t('about.title')} / </p></div>
        <div className='flex justify-between items-start gap-[32px]'>
          <div className='max-w-[375px] w-full bg-[#EBEFF3] rounded-[6px] max-[900px]:hidden'>
            {['about', 'nasiya', 'paymentMethods', 'delivery', 'garranty', 'help'].map((key) => (
              <div key={key} className='px-[36px] pt-[30px] pb-[40px]'>
                <h3 className='font-bold text-[#0A1729] mt-[10px] text-[18px]'>{t(`${key}.title`)}</h3>
                <p className='leading-[19px] text-[#545D6A] text-[14px]'>{t(`${key}.des`)}</p>
              </div>
            ))}
          </div>
          <div className='w-full'>
            <h2 className='text-[#06172D] font-bold text-[32px] mb-[29px] leading-[70%] '>{t('about.title')}</h2>
            <div className='w-full text-[150px] max-[1100px]:text-[100px] max-[400px]:text-[59px] max-[400px]:p-[25px] max-[600px]:text-[69px] max-[600px]:p-[32px] font-black text-white bg-[#6F73EE] rounded-[10px] text-center p-[40px] min-[600px]:mb-[14px]'>Ashyo</div>
            {['1', '2', '3', '4'].map((key) => (<p key={key} className='text-lg max-[600px]:text-sm max-[400px]:text-[12px] text-[#515D6C] leading-[145%] pl-2 min-[600px]:pr-5 mt-[30px] max-[600px]:mt-[25px] max-[400px]:mt-[13px]'>{t(`des${key}`)}</p>))}
            <div className='flex gap-[30px] mt-[29px] pl-2 max-[600px]:hidden'><PrinterIcon /> <ShareIcon /></div>
            <div className='flex gap-[14px] mt-[29px] pl-2 min-[600px]:hidden max-[600px]:justify-end'><div className='max-[600px]:bg-[#EBEFF3] max-[600px]:p-[14px] rounded-[3px]'><Printer16Icon /></div> <div className='max-[600px]:bg-[#EBEFF3] max-[600px]:p-[14px] rounded-[3px]'><Share16Icon /></div></div>
          </div>
        </div>
      </div>
      <Products title={t('productsTitle')} api='products' />
    </>
  )
}

export default AboutUS