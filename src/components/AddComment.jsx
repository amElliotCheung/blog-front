import React from 'react'
import { useState } from 'react'
import axiosInstance from '../context/axios'

const AddComment = (props) => {
    const [body, setBody] = useState({
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
        axiosInstance.post(`/comments/${props.id}`, body)
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <fieldset>
            <label>
            Content:
            <textarea name="content" value={body.content} onChange={handleInputChange} style={{height:100, width:1000, fontSize:32}}/>
            </label>

        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default AddComment
