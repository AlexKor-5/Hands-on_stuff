import { useEffect, useState } from 'react'

export const useFetch = (
    url,
    method = 'GET',
    headers = undefined,
    body = undefined
) => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState()
    const [error, setError] = useState(undefined)

    useEffect(() => {
        fetch(url, {
            method,
            ...(headers && headers), //conditional field
            ...(method !== 'GET' && body), //conditional field
        })
            .then((data) => {
                return data.ok || data.status === 200 ? data.json() : data.error()
            })
            .then((data) => {
                if (data) {
                    console.log('data ok')
                    setData(data)
                    return data
                }
                if (!data) {
                    console.log('data false')
                    setError(new Error('Data has not been found!'))
                }
            })
            .then(() => setLoading(false))
            .catch((err) => {
                setLoading(false)
                return err
            })
            .catch(setError)
    }, [url, method, headers, body])

    return { data, loading, error }
}
