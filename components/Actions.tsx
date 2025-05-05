"use client"
import { ActionsButtonType } from '@/types/ButtonType'
import { useRouter } from 'next/navigation'
import React, { FC } from 'react'

const ActionButton:FC<ActionsButtonType> = ({id, icon, to, count , extraStyle, title, onClick})=> {
  return (
    <button type='button' onClick={onClick} className={`w-[54px] text-[#545D6A] cursor-pointer h-[54px] flex justify-center items-center gap-[10px] relative rounded-[6px] bg-[#EBEFF3] ${extraStyle}`}>
        {icon}
        {!count || count !== 0 && <span className='w-[20px] h-[20px] bg-[#E81504] text-white font-bold text-[10px] rounded-[50%] flex items-center justify-center absolute top-[-10px] right-[-10px]' >{count}</span>}
        {title}
    </button>
  )
}

export default ActionButton