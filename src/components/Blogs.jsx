import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        const getBlogs = async () => {
            const res = await axios.get('http://13.231.114.243:8080/', {headers:{"Access-Control-Allow-Origin": "*"}})
            console.log(res)
            setBlogs(res.data.items)
        }
        getBlogs()},  [])

    return (
        <div>
            {blogs.length ===0 && <h3>No</h3>}
            {blogs.map((blog) => 
                <h3>yes</h3>
            )}
        </div>
    )
}

export default Blogs
