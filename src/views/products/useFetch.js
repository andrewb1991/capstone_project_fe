import {useState, useEffect} from 'react'

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [smartphone, setSmartphone] = useState(null)
    const [tablet, setTablet] = useState(null)
    const [accessori, setAccessori] = useState(null)
    useEffect(()=>{
    setLoading(true)
    fetch(url)
    .then((res)=> res.json())
    .then((response)=> {
        setData(response)
        setLoading(false)
    })
    .catch((err)=> setError(err.message))
   } , [url])

   return { data, loading, error }


}

export default useFetch