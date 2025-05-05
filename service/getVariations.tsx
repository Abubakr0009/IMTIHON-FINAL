"use client"
import { instance } from "@/hooks/instance"
import { useQuery } from "@tanstack/react-query"

export const getProductVariations = (id:number | string) => { 
    const {data = [], isLoading, isFetching, isError} = useQuery(({
        queryKey: ["product_variations", id],
        queryFn: () => instance().get(`/variations/${id}`).then(res => res.data)
    }))
    return {data, isLoading, isFetching, isError}
}