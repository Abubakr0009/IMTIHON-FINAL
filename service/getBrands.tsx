"use client"
import { instance } from "@/hooks/instance"
import { useQuery } from "@tanstack/react-query"

export const getBrands = () => { 
    const {data = [], isLoading, isFetching, isError} = useQuery(({
        queryKey: ["brands"],
        queryFn: () => instance().get('/brands/all').then(res => res.data)
    }))
    return {data, isLoading, isFetching, isError}
}