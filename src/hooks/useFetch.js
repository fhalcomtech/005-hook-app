import {useEffect, useState} from "react";

export const useFetch = (url) =>
{
    const [data, setData] = useState({data: null, loading: true, error: false});
    useEffect(() => {
        setData({data: null, loading: true, error: null})
        fetch(url)
            .then(data => data.json())
            .then(json => {setData({data: json, loading: false, error: false});})
            .catch(err=>{setData({data: null, loading: false, error: true});})
    }, [url]);
    return data;
}