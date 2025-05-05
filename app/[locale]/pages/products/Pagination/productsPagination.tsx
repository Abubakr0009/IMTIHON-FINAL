// Utility function to update the page in URL and set the new page in state
const updatePageInUrl = (page: number, searchParams: URLSearchParams, router: any, setPage: (value: number) => void) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', String(page)); // set the new page in URL
    router.push(`?${params.toString()}`); // update the URL with new page
    setPage(page); // update the page in state
}

// Previous page handler
export const handlePrev = (
    page: number | string, 
    searchParams: URLSearchParams, 
    router: any, 
    setPage: (value: number) => void
) => {
    const newPage = Math.max(Number(page) - 1, 1); // prevent going below 1
    updatePageInUrl(newPage, searchParams, router, setPage); // update the page
};

// Next page handler
export const handleNext = (
    page: number | string, 
    searchParams: URLSearchParams, 
    router: any, 
    setPage: (value: number) => void, 
    totalPages: number
) => {
    const newPage = Math.min(Number(page) + 1, totalPages); // prevent going beyond total pages
    updatePageInUrl(newPage, searchParams, router, setPage); // update the page
};

// Set specific page handler (page number is 1-based)
export const handleSetPage = (
    i: number, 
    searchParams: URLSearchParams, 
    router: any, 
    setPage: (value: number) => void
) => {
    const page = i + 1; // convert index to 1-based page
    updatePageInUrl(page, searchParams, router, setPage); // update the page
};
