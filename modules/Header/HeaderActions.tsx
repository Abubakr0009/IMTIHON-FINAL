"use client"
import React, { useState } from 'react'
import { useTranslations } from 'next-intl'
import HeaderActions from '../../components/Actions'
import { CartIcon, CompareIcon, HeartOutlineIcon, MenuIcon, UserIcon } from '@/assets/icons'
import Modal from '@/components/Modal'
import Auth from '../Auth'
import { getCookie } from 'cookies-next'
import { useRouter } from '@/i18n/navigation'

function HeaderActionButtons() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const t = useTranslations('HeaderCenter')
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
    const router = useRouter();
    const handleGoProfile = ()=>{
       const token = getCookie('NEXT_TOKEN') || null
       if(token)router.push('pages/profile')
        else setIsModalOpen(true)

   }
    
    const buttons = [{ id: 1, title: t('compare'), icon: <CompareIcon />, count: 7, to: '/compare' }, { id: 2, title: t('wishlist'), icon: <HeartOutlineIcon />, count: 11, to: '/liked' }, { id: 3, title: t('cart'), icon: <CartIcon />, count: 7, to: '/cart' }, { id: 4, title: t('profile'), icon: <UserIcon />, count: 0, to: '/profile', onClick:handleGoProfile}]

    return (
        <>
            <div className='flex gap-[15px] max-sm:hidden'>{buttons?.map(item => <HeaderActions key={item.id} icon={item.icon} count={item.count} to={item.to} id={item.id} onClick={item.onClick} />)}</div>
            <div className='sm:hidden' tabIndex={0} onFocus={() => setIsOpen(true)} onBlur={() => setIsOpen(false)}><MenuIcon /></div>
            <div className={`fixed max-w-[300px] w-full h-screen bg-white shadow-2xl z-[51] top-0 ${isOpen ? 'right-0' : 'right-[-300px]'} duration-500 `}>
                <div className='w-full h-[100px] bg-gray-400 flex items-center px-5'>
                    {/* profl malumtorlar */}
                    <div className='w-[70px] h-[70px] rounded-[50%] bg-slate-50'></div>
                </div>
                <div className={`flex flex-col justify-start items-center gap-[10px] px-5 mt-5`}>
                    {buttons?.map(item => <HeaderActions key={item.id} title={item.title} icon={item.icon} count={item.count} to={item.to} id={item.id} onClick={item.onClick} extraStyle={'!w-full !justify-start !px-5 hover:bg-[#15509E]/30 duration-300'} />)}
                </div>
            </div>
            <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}><Auth setIsModalOpen={setIsModalOpen}/></Modal>

        </>
    )
}

export default HeaderActionButtons