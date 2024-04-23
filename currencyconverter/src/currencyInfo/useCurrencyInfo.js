import { useEffect, useState } from "react";

function useCurrencyInfo (currency) {
   const [data, setData] = useState({})
     useEffect(() => {
        fetch(`https://v6.exchangerate-api.com/v6/b9f2c7e5e64c9752c3a124aa/latest/${currency}`)
        .then((res) => res.json)
        .then((res) => setData(res[currency]))
        console.log(data);
     },[currency])
     return data
} 
export default useCurrencyInfo;