import Button from '@/components/Button';
import HeaderInput from '@/components/HeaderInput';
import { postAuth } from '@/service/postAuth';
import { AuthPropsTypes, ErrorType, RegisterUserType } from '@/types/AuthType';
import React, { useState } from 'react';

function Register({ isLoginOpen, setIsModalOpen}: AuthPropsTypes) {
  const [user, setUser] = useState<RegisterUserType>({ email: '', password: '', fullname: '', })
  const [errors, setErrors] = useState<ErrorType>({ email: false, password: false, fullname: false, });
  const [errorMsg, setErrorMsg] = useState('');
  const { mutate, isPending, isError, data } = postAuth('/auth/register');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors: ErrorType = { email: user.email.trim() === '', password: user.password.trim() === '', fullname: user.fullname.trim() === '', };
    setErrors(newErrors);

    const isValid = !newErrors.email && !newErrors.password && !newErrors.fullname;
    if (!isValid) return;

    mutate(user, {
      onSuccess: () => {setIsModalOpen(false);},
      onError: (err: any) => {setErrorMsg(err?.response?.data?.message || 'Xatolik yuz berdi');},
    });
  };

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <div className={`transition-all duration-300 overflow-hidden ${isLoginOpen ? 'w-0' : 'w-full'}`}>
      <form onSubmit={handleSubmit}>
        <label className="relative">
          <HeaderInput name="fullname" placeholder="Enter Your Full Name" type="text" extraStyle={`w-full mt-5 max-[350px]:py-1 max-[350px]:text-[15px] max-[350px]:rounded-[3px] ${errors.fullname && 'border-red-500 placeholder:text-red-500'}`} value={user.fullname} onChange={handleChangeValue} />
        </label>

        <label className="relative">
          <HeaderInput name="email" placeholder="Enter Your Email" type="email" extraStyle={`w-full mt-5 max-[350px]:py-1 max-[350px]:text-[15px] max-[350px]:rounded-[3px] ${errors.email && 'border-red-500 placeholder:text-red-500'}`} value={user.email} onChange={handleChangeValue} />
        </label>

        <label>
          <HeaderInput name="password" placeholder="Enter your Password" type="password" extraStyle={`w-full mt-5 max-[350px]:py-1 max-[350px]:text-[15px] max-[350px]:rounded-[3px] ${errors.password && 'border-red-500 placeholder:text-red-500'}`} value={user.password} onChange={handleChangeValue} />
        </label>

        {errorMsg && (<p className="text-red-500 text-sm mt-4 w-[400px] overflow-hidden">{errorMsg}</p>)}
        <Button loading={isPending} title="Register" extraStyle="w-full mt-10 max-[350px]:py-1 max-[350px]:text-[15px] max-[350px]:rounded-[3px]" />
      </form>
    </div>
  );
}

export default Register;
