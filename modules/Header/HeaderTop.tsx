"use client"
import { LocationIcon } from '@/assets/icons'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import React, { useState } from 'react'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { usePathname, useRouter } from '@/i18n/navigation'
import { getCookie } from 'cookies-next'

function HeaderTop() {
  const t = useTranslations("HeaderTop");
  const router = useRouter();
  const pathname = usePathname();
  const [lang, setLang] = useState<'uz' | 'ru' | 'en' | any>(() => {
    const cookieLang = getCookie('NEXT_LOCALE');
    return (cookieLang === 'ru' || cookieLang === 'en' || cookieLang === 'uz') ? cookieLang : 'uz';
  });

  return (
    <div className="text-sm py-[10px] bg-[#EBEFF3] duration-500 relative z-[1] max-sm:hidden">
      <div className='containers flex justify-between items-center'>
        <nav className='flex items-center gap-[28px]'>
          <Link href={'/pages/location'} className='flex items-center gap-[10px] duration-300 text-[#545D6A] hover:text-[#134E9B]'>
            <LocationIcon />
            <span>{t('address')}</span>
          </Link>
          <Link href={'/pages/aboutUS'} className='duration-300 text-[#545D6A] hover:text-[#134E9B]'>
            <span>{t('aboutUs')}</span>
          </Link>
          <Link href={'/pages/contacts'} className='duration-300 text-[#545D6A] hover:text-[#134E9B]'>
            <span>{t('contact')}</span>
          </Link>
          <Link href={'/pages/products'} className='duration-300 text-[#545D6A] hover:text-[#134E9B]'>
            <span>{t('products')}</span>
          </Link>
        </nav>
        <div className='flex justify-end items-center gap-[18px]'>
          <Link href={`tel:++998711234567`} className='duration-300 text-[#545D6A] hover:text-[#134E9B]'>
            +998 (71) 123-45-67
          </Link>
          <Select value={lang} onValueChange={(e) => { setLang(e); router.push(pathname, { locale: e }); }}>
            <SelectTrigger className='duration-300 border-none shadow-none text-[#545D6A] hover:text-[#134E9B]'>
              <SelectValue defaultValue={lang} placeholder="Select a language" />
            </SelectTrigger>
            <SelectContent className='relative z-[101] border-none shadow-2xl text-[#545D6A] hover:text-[#134E9B] shadow-black bg-white duration-300'>
              <SelectGroup>
                <SelectItem value="uz">uz</SelectItem>
                <SelectItem value="ru">ru</SelectItem>
                <SelectItem value="en">en</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  )
}
export default HeaderTop
