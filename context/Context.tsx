"use client"
import { ContextType } from "@/types/ContextType";
import { createContext, FC, ReactNode, useState } from "react"

export const Context = createContext<ContextType>({
    showCategory: false,
    setShowCategory: () => false,
});

export const CotegoryContext: FC<{ children: ReactNode }> = ({ children }) => {
    const [showCategory, setShowCategory] = useState<boolean>(false)
 return(
    <Context.Provider value={{setShowCategory, showCategory}}>{children}</Context.Provider>
 )
} 