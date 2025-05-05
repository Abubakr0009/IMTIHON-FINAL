"use client"
import React, { FC, SetStateAction, useState } from 'react'
import Login from './Login';
import Register from './Register';
import { ModalPropsType } from '@/types/ModalType';

const Auth:FC<ModalPropsType> =({setIsModalOpen}) =>{
    const [isLoginOpen, setIsLoginOpen] = useState<boolean>(true);
    return (
        <>
            <div className={`w-full flex bg-gray-50 rounded p-2 relative z-0 justify-between`}>
                <button onClick={()=> setIsLoginOpen(true)} className={` cursor-pointer z-[2] rounded-sm p-2 px-5 w-[49%] duration-75 ${isLoginOpen ? '' : 'hover:bg-gray-100'}`}>Login</button>
                <button onClick={()=> setIsLoginOpen(false)} className={` cursor-pointer z-[2] rounded-sm p-2 px-5 w-[49%] duration-75 ${isLoginOpen && 'hover:bg-gray-100'}`}>Register</button>
                <div className={`absolute top-2 bg-gray-200 rounded-sm w-[48%] h-[40px] transition-all duration-300 z-[1]`} style={{ left: isLoginOpen ? '0.5rem' : 'calc(100% - 0.5rem - 47.8%)' }}></div>
            </div>

            <div className='flex justify-between items-start'>
                <Login isLoginOpen={isLoginOpen} setIsModalOpen={setIsModalOpen}/>
                <Register isLoginOpen={isLoginOpen} setIsModalOpen={setIsModalOpen}/>
            </div>

        </>
    )
}

export default Auth