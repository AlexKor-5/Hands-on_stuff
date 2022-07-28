import axios from 'axios'

export const fetchPosts = async (setPosts, setLoading) => {
    setLoading(true)
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
    setPosts(res.data)
    setLoading(false)
}
