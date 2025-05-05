import { HeaderInputType } from '@/types/HeaderInputType'
import React, { FC, useEffect } from 'react'

const HeaderInput:FC<HeaderInputType> =({placeholder, type, extraStyle, value, name, onChange, onBlur, onFocus})=> {
  return (
    <input type={type} name={name} onChange={onChange} onBlur={onBlur} onFocus={onFocus} value={value} placeholder={placeholder} className={` py-[14px] pl-[26px] outline-none rounded-[6px] border border-[#EBEFF3] bg-[#EBEFF3] transition-all duration-300 ${extraStyle}`}/>
  )
}

export default HeaderInput