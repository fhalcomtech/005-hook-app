import {useEffect, useState} from "react";

export const useFetch = (url) =>
{
    const [data, setData] = useState({data: null, loading: true, error: null});
    useEffect(() => {
        fetch(url)
            .then(data => data.json())
            .then(json => {
                console.log(json);
                setData({data: json, loading: false, error: false});
            })
    }, [url]);
    return data;
}