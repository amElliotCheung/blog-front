import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import axiosInstance from '../context/axios'

const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => 
    {
        const getBlogs = async () => {
            const res = await axiosInstance.get("/")
            console.log(res.data)
            setBlogs(res.data)
        }
        getBlogs()
    },  [])
    return (
        <div>
            {blogs.length ===0 && <h3>fetch blog failed</h3>}

            {
            blogs.map((b) => 
                <div key = {b.id}>
                    <h2><Link to={`/blogs/${b.id}`}>
                        {b.title}
                    </Link></h2>
                    <br />
                    <span>{b.release_date}</span>
                    <p>{b.text}</p>
                    <br />
                </div>
            )
            }
        </div>
    )
}

export default Blogs
