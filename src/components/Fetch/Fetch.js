import React, { useEffect } from 'react'
import { useFetch } from '../../hocs/useFetch'

export const Fetch = () => {
    // const { data, loading, error } = useFetch('/users')
    // if (!loading) console.log(data)
    // if (error) console.error(error)

    useEffect(() => {
        fetch('/users')
            .then((data) => data.json())
            .then((data) => console.log(data))
            .catch((e) => console.log(e))
    })

    console.log('render')

    return <h1>Hello Fetch</h1>
}
