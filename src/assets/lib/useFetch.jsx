import { useEffect, useState } from "react";

function useFetch() {
    const [data, setData] = useState(null);
    useEffect(()=> {
        const fetchData = async() => {
            const res = await fetch('https://dummyjson.com/products');
            const result = await res.json();
            setData(result)
        }
        fetchData();
    },[])
    return data?.products;
}

export default useFetch;