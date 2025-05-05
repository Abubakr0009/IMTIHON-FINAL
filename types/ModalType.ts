import { ReactNode } from "react"

export interface ModalPropsType {
    isModalOpen?: boolean,
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
    children?: ReactNode,
    title?: string
}