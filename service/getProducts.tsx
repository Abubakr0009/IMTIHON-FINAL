"use client"
import { instance } from "@/hooks/instance"
import { useQuery } from "@tanstack/react-query"

export const getProducts = (api:string) => { 
    const {data = [], isLoading, isFetching, isError} = useQuery(({
        queryKey: ["products"],
        queryFn: () => instance().get(`/${api}`).then(res => res.data.items)
    }))
    return {data, isLoading, isFetching, isError}
}