import React, { useState, useEffect } from 'react'
import axios from 'axios'

export const AppPagination = () => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(10)
    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true)
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
            setPosts(res.data)
            setLoading(false)
        }
        fetchPosts()
    }, [])
    console.log(posts)
    return <h1>AppPagination</h1>
}