"use client"
import { instance } from "@/hooks/instance"
import { useQuery } from "@tanstack/react-query"

export const getSingleProduct = (id:number | string) => { 
    const {data = [], isLoading, isFetching, isError} = useQuery(({
        queryKey: ["single_product", id],
        queryFn: () => instance().get(`/products/${id}`).then(res => res.data)
    }))
    return {data, isLoading, isFetching, isError}
}