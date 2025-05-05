export interface LoginData {
    email: string;
    password: string;
}
export type LoginUserType = {
    email: string,
    password: string
}
export type ErrorType = {
    email: boolean,
    password: boolean,
    fullname?: boolean
}

export type RegisterUserType = {
    email: string,
    password: string,
    fullname: string
}

export interface AuthPropsTypes {
    isLoginOpen: boolean,
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}