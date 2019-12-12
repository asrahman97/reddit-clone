import React from 'react';


const CreatePost = (props) => {
  return (
    <form onSubmit={props.postSubmit} className='post-form'>
      <input type='text' name='title' value={props.title} placeholder='title' onChange={props.onContentChange}/>
      <textarea type='textarea' name='content' value={props.content} placeholder='posts It' onChange={props.onContentChange} rows='6' />
      <input type='submit' value='posts' />
  
    </form>
  )
}




export default CreatePost;