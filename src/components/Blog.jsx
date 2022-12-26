import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import ReactMarkdown from 'react-markdown'
const Blog = (props) => {
    const [blog, setBlog] = useState({})
    let {id} = useParams()

    useEffect(() => {
        const getBlog = async () => {
            const res = await axios.get(`http://ec2-13-231-114-243.ap-northeast-1.compute.amazonaws.com:8080/blogs/${id}`)
            console.log("res", res)
            console.log("res.data", res.data)
            setBlog(res.data.data)
            console.log("blog", blog)
        }
        getBlog()
    }, [id])

    
    return (
        <div>
            <h2>{blog.title}</h2>
            <small>released at: <em>{blog.release_date}</em></small>
            <hr />
            <ReactMarkdown>{blog.content}</ReactMarkdown>
            <h1>asdf</h1>
        </div>
        
    )
}

export default Blog
