import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Blogs = () => {
    axios.defaults.baseURL = 'http://ec2-13-231-114-243.ap-northeast-1.compute.amazonaws.com:8080';
    // axios.defaults.baseURL = 'http://fucky';
    // const instance = axios.create({
    //     baseURL: 'http://ec2-13-231-114-243.ap-northeast-1.compute.amazonaws.com:8080'});
    const [blogs, setBlogs] = useState([])
    useEffect(() => 
    {
        const getBlogs = async () => {
            const res = await axios.get("/")
            console.log(res.data.data)
            setBlogs(res.data.data)
        }
        getBlogs()
    },  [])
    return (
        <div>
            {blogs.length ===0 && <h3>fetch blog failed</h3>}

            {
            blogs.map((b) => 
                <div key = {b.id}>
                    <Link to={`/blogs/${b.id}`}>
                        {b.title}
                    </Link>
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
