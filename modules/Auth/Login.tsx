"use client"
import Button from '@/components/Button';
import HeaderInput from '@/components/HeaderInput';
import { postAuth } from '@/service/postAuth';
import { AuthPropsTypes, ErrorType, LoginUserType } from '@/types/AuthType';
import React, { FC, useState } from 'react'

const Login: FC<AuthPropsTypes> = ({ isLoginOpen, setIsModalOpen }) => {
    const [user, setUser] = useState<LoginUserType>({ email: '', password: '' });
    const [errors, setErrors] = useState<ErrorType>({ email: false, password: false });
    const [errorMsg, setErrorMsg] = useState('');
    const { mutate, isPending } = postAuth('/auth/login');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newErrors: ErrorType = { email: user.email.trim() === '', password: user.password.trim() === '', };
        setErrors(newErrors);
        const isValid = !newErrors.email && !newErrors.password;
        if (!isValid) return;

        mutate(user, {
            onSuccess: () => { setIsModalOpen(false) },
            onError: (err: any) => { setErrorMsg(err?.response?.data?.message || 'Xatolik yuz berdi'); },
        });
    };
    const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };
    return (
        <div className={`transition-all duration-300 overflow-hidden ${isLoginOpen ? 'w-full' : 'w-0'}`}>
            <form onSubmit={handleSubmit}>
                <label className='relative'>
                    <HeaderInput name="email" placeholder='Enter Your Email' type="email" extraStyle={`w-full mt-5 max-[350px]:py-1 max-[350px]:text-[15px] max-[350px]:rounded-[3px] ${errors.email && 'border-red-500 placeholder:text-red-500'}`} value={user.email} onChange={handleChangeValue} />
                </label>
                <label className='realtive]'>
                    <HeaderInput name="password" placeholder='Enter your Password' type="password" extraStyle={`w-full mt-5 max-[350px]:py-1 max-[350px]:text-[15px] max-[350px]:rounded-[3px] ${errors.password && 'border-red-500 placeholder:text-red-500'} `} value={user.password} onChange={handleChangeValue} />
                </label>
                {errorMsg && (<p className="text-red-500 text-sm mt-4 w-[400px] overflow-hidden">{errorMsg}</p>)}
                <Button loading={isPending} title='Login' extraStyle='w-full mt-[110px] max-[350px]:py-1 max-[350px]:text-[15px] max-[350px]:rounded-[3px] ' />
            </form>
        </div>

    )
}

export default Login