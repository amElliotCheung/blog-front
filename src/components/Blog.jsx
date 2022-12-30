import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import AddComment from './AddComment'
import axiosInstance from '../context/axios'
const Blog = (props) => {
    const [blog, setBlog] = useState({})
    let {id} = useParams()

    useEffect(() => {
        const getBlog = async () => {
            const res = await axiosInstance.get(`/blogs/${id}`)
            console.log("res.data", res.data)
            setBlog(res.data)
            console.log("blog", blog)
        }
        getBlog()
    }, [id])

    const deleteBlog = () => {
        axiosInstance.delete(`/blogs/${id}`)
    }

    return (
        <div>
            <span><button type='submit' onClick={deleteBlog}>delete</button></span>
            <h2>{blog.title}</h2>
            <small>released at: <em>{blog.release_date}</em></small>
            <br />
            <ReactMarkdown>{blog.content}</ReactMarkdown>
            <br />
            <AddComment id={id}/>
            {
                Array.isArray(blog.comments) && blog.comments.length > 0 && blog.comments.map((c)=> 
                    <div>
                        <ReactMarkdown>{c.content}</ReactMarkdown>
                        <small>commented at: <em>{c.release_date}</em></small>
                    </div>
                )
            }
        </div>
        
    )
}

export default Blog
