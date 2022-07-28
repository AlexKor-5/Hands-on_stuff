import React, { useState, useEffect } from 'react'
import { fetchPosts } from './services/fetchPosts'
import { Posts } from './components/Posts'
import st from './PaginationApp.module.scss'
import { PaginationBar } from './components/Pagination'

export const PaginationApp = () => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage] = useState(10)

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    useEffect(() => {
        fetchPosts(setPosts, setLoading)
    }, [])

    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

    return (
        <div className={st.wrapper}>
            <h1>Pagination</h1>
            <div>
                <Posts posts={currentPosts} loading={loading} />
            </div>

            <PaginationBar postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
        </div>
    )
}
