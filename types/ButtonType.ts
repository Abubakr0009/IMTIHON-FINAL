import { MouseEventHandler, ReactNode } from "react";

export interface ButtonType {
    icon?: ReactNode,
    iconPosition? : "left" | "right",
    title?: string
    extraStyle?:string
    loading?:boolean
    onClick?: MouseEventHandler<HTMLButtonElement> 
}

export interface ActionsButtonType {
    icon: ReactNode,
    id: number,
    count?: number,
    to: string,
    extraStyle?:string
    title?:string
    onClick?: MouseEventHandler<HTMLButtonElement> 
}