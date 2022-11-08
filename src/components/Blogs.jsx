import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        const getBlogs = async () => {
            const res = await axios.get('https://url/blogs')
            setBlogs(res.data.items)
        }
        getBlogs()},  [])

    return (
        <div>
            {blogs.length ===0 && <h3>haha</h3>}
            {blogs.map((blog) => 
                <h3>blog.title</h3>
            )}
        </div>
    )
}

export default Blogs
