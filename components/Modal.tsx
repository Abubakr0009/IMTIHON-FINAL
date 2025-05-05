import { ModalPropsType } from '@/types/ModalType'
import { X } from 'lucide-react'
import React, { FC, ReactNode } from 'react'

const Modal: FC<ModalPropsType> = ({ isModalOpen, setIsModalOpen, children , title}) => {
    return (
        <div onClick={() => setIsModalOpen(false)} className={`fixed  inset-0 flex justify-center items-center z-[100]  ${isModalOpen ? 'visible bg-black/40 backdrop-blur-[4px]' : 'invisible'} transition-all duration-700`}>
            <div onClick={(e) => e.stopPropagation()} className={`${isModalOpen ? 'opacity-100 bg-white shadow-lg scale-100' : 'invisible scale-120 opacity-0'} mx-5 rounded-lg py-10 px-4 duration-300 transition-all max-w-[600px] w-full`}>
                <h2>{title}</h2>
                {children}
                <button className={`absolute top-2 right-2 bg-white hover:bg-gray-200 cursor-pointer transition-colors duration-300 rounded-sm text-gray-400 hover:text-black`} onClick={() => setIsModalOpen(false)}><X/></button>
            </div>
        </div>
    )
}

export default Modal