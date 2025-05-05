"use client"
import { instance } from "@/hooks/instance"
import { useQuery } from "@tanstack/react-query"
import { useSearchParams } from "next/navigation"

export const getCustomProducts = () => { 
    const searchParams = useSearchParams();
    const search = searchParams.get('search') || '';
    const sort = searchParams.get('sort') || '';
    const brand_id = searchParams.get('brand') || '';
    const min_price = searchParams.get('min') || '';
    const max_price = searchParams.get('max') || '';
    const page = searchParams.get('page') || '';
    const limit = searchParams.get('limit') || '8';
    const category_id = searchParams.get('category') || '';
    
    const { data = [], isLoading, isFetching, isError } = useQuery({
        queryKey: ["custom_products", category_id, search, sort, brand_id, min_price, max_price, page, limit],
        queryFn: () => instance().get(`/products`, {params:{category_id, search, sort, brand_id, min_price, max_price, limit, page}}).then(res => res.data)
    })

    return { data, isLoading, isFetching, isError }
}