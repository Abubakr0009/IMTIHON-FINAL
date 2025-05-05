"use client";
import { instance } from "@/hooks/instance";
import { LoginData } from "@/types/AuthType";
import { useMutation } from "@tanstack/react-query";
import { setCookie } from "cookies-next";
import toast from "react-hot-toast";

export const postAuth = (api: string) => {
  return useMutation({
    mutationFn: (data: LoginData) =>
      instance().post(api, data)
        .then((res) => {
          setCookie('NEXT_TOKEN', res?.data?.accessToken);
          toast.success(res?.data?.message || 'Success!');
          return res.data; 
        })
        .catch((error) => {
          toast.error(error?.response?.data?.message || 'Xatolik yuz berdi');
          throw error; 
        })
  });
};
