import { useEffect, useState } from 'react'

export const useFetch = (url, method = 'GET', headers = {}, body = '') => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState()
    const [error, setError] = useState()

    useEffect(() => {
        fetch(url)
            .then((data) => data.json())
            .then(setData)
            .then(() => setLoading(false))
            .catch(setError)
    }, [url, method, headers, body])

    return { data, loading, error }
}
