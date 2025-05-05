import { ButtonType } from '@/types/ButtonType'
import React, { FC } from 'react'

const Button: FC<ButtonType> = ({ icon, iconPosition, title, extraStyle, loading, onClick }) => {
  return (
    <button onClick={onClick} disabled={loading} className={`bg-[#134E9B] ${loading ? 'opacity-50 cursor-not-allowed' : 'opacity-100 hover:opacity-85 cursor-pointer'}  text-white text-base border border-[#134E9B] py-[14px] px-[25px] rounded-[6px] flex justify-center items-center gap-[20px]  duration-500 ${extraStyle}`}>
      {loading && <div className="flex justify-center items-center">
        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
      </div>}
      {icon && iconPosition === 'left' && icon}
      {title}
      {icon && iconPosition === 'right' && icon}
    </button>
  )
}

export default Button