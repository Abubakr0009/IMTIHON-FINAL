"use client";
import React, { useContext, useEffect, useState } from "react";
import { ArrowDownIcon, SearchIcon } from "@/assets/icons";
import HeaderInput from "./HeaderInput";
import { Context } from "@/context/Context";
import { instance } from "@/hooks/instance";
import debounce from "@/hooks/debounse";
import Button from "./Button";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import { useRouter } from "@/i18n/navigation";

const HeaderForm = () => {
    const searchParams = useSearchParams()
    const router = useRouter()
    const { showCategory, setShowCategory } = useContext(Context);
    const [searchValue, setSearchValue] = useState<string>('');
    const [searchData, setSearchData] = useState([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isOpenSearchModal, setIsOpenSearchModal] = useState<boolean>(false);
    const t = useTranslations('HeaderCenter')
    const handleFocus = () => setIsOpenSearchModal(true);
    const handleBlur = () => setIsOpenSearchModal(false);
    const [currentValue, setCurrentValue] = useState<string>('')
    const debouncedValue = debounce(searchValue, 500);

    useEffect(() => {
        if (!debouncedValue) {
            setSearchData([]);
            const params = new URLSearchParams(searchParams.toString())
            params.set('search', String(''))
            router.push(`/pages/products?${params.toString()}`)
            return;
        }
        if (currentValue !== debouncedValue) {
            setIsLoading(true);
            instance().get(`/categories/search`, { params: { name: debouncedValue } })
                .then((res) => { setSearchData(res.data); })
                .finally(() => { setIsLoading(false); });
        }
    }, [debouncedValue]);

    const hanldeGoToSearch = () => {
        const params = new URLSearchParams(searchParams.toString())
        params.set('search', String(debouncedValue))
        router.push(`/pages/products?${params.toString()}`)
    }

    const handleSetValue = (item: any) => {
        setIsOpenSearchModal(false);
        setSearchData([]);
        setSearchValue(item.name);
        setCurrentValue(item.name);
        const params = new URLSearchParams(searchParams.toString())
        params.set('category', String(item.id))
        router.push(`/pages/products?${params.toString()}`)
    }
    return (
        <div className="flex items-center gap-[10px] relative">
            <Button onClick={() => setShowCategory(!showCategory)} title={t('categoryBtn')} icon={<ArrowDownIcon className={`${showCategory ? "rotate-180" : "rotate-0"} duration-500`} />} iconPosition="right" />
            <div className="xl:w-[520px] w-full relative bg-[#EBEFF3] rounded-[6px]">
                <HeaderInput value={searchValue} onChange={(e) => setSearchValue(e.target.value)} placeholder={t('placeholder')} type="text" extraStyle="w-full !pr-[65px] z-[30] relative" onFocus={handleFocus} onBlur={handleBlur} />
                <Button icon={<SearchIcon />} iconPosition="left" onClick={hanldeGoToSearch} extraStyle="!p-0 w-[60px] absolute top-0 right-0 h-full max-h-[64px] z-[50]" />
                <div className={`w-full absolute rounded-b-[6px] bg-[#EBEFF3] z-[11] left-0 ${isOpenSearchModal && isLoading || searchData?.length ? 'max-h-[300px] pt-[10px] overflow-y-scroll shadow-lg top-[90%]' : 'h-[0px] pt-[0px] overflow-hidden top-[50%]'} duration-500 bg-[#EBEFF3]`}>
                    {isLoading ? (
                        <div className="w-full text-left border-t-[1px] border-t-[#B6BABF4D]/30 px-[40px] py-[14px]"><div className="h-[25px] loading"></div></div>
                    ) : (
                        searchData?.map((item: any) => (
                            <div key={item.id} onClick={() => handleSetValue(item)} className="w-full cursor-pointer text-left border-t-[1px] border-t-[#B6BABF4D]/60 pl-[40px] py-[14px] hover:bg-[#B6BABF4D]/90 duration-300" >
                                {item.name}
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default HeaderForm;