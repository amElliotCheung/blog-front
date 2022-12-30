import React from 'react'
import { useState } from 'react'
import axiosInstance from '../context/axios'

const AddBlog = () => {
    const [body, setBody] = useState({
        title:"",
        content:"",
        release_date:"",
    })
    const handleInputChange = (e) => {
        // not [] !!!
        const {name, value} = e.target
        setBody({...body, [name]:value})
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        body.release_date = new Date()
        console.log(body);
        axiosInstance.post("blogs/createBlog", body)
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <fieldset>

            <label>
            Title:
            <input type="text" name="title" value={body.title} onChange={handleInputChange} style={{height:25, width:1000, fontSize:32}}/>
            </label>
            <br />

            <label>
            Content:
            <textarea name="content" value={body.content} onChange={handleInputChange} style={{height:500, width:1000, fontSize:32}}/>
            </label>

        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default AddBlog
