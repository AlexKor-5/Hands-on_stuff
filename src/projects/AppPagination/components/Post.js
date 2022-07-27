import React from 'react'
import PropTypes from 'prop-types'

const Posts = ({ posts, loading }) => {
    if (loading) {
        return <h2>Loading...</h2>
    }

    return (
        <ul className="list-group mb-4">
            {posts.map((post) => (
                <li key={post.id} className="list-group-item">
                    {post.title}
                </li>
            ))}
        </ul>
    )
}

export default Posts
Posts.propTypes = {
    posts: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
}
