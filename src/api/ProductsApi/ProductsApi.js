import React, { useEffect,useState } from "react";

export default function ProductApi() {
    const [data, setData]=useState(null);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(null);

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(data=>console.log(data))
        .catch((err)=>{
            console.log(err.message)
        })
        },[]);




}



