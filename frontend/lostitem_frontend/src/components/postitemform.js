import React from 'react'
import Navbar from './navbarafterlogin'
import "../css/postnewitem.css"
function postitemform() {
  return (
    <div>
       <Navbar/> 
       <div className='form-container'>
       <h1 className='heading'><span>Post New Item</span></h1>
       <h4 className='headingtext'>Please provide genuine information only and don't provide any private information.</h4>
       <div className='box'>
       <form>
       <div className='inputbox'>
          <label htmlFor="type">Type:</label>
          <select id="type" name="type">
            <option value="lost">Lost</option>
            <option value="found">Found</option>
          </select>
        </div>
        <div className='inputbox'>
          <label htmlFor="category">Category:</label>
          <select id="category" name="category">
            <option value="mobile">Mobile</option>
            <option value="document">Document</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className='inputbox'>
          <label htmlFor="description">Description:</label>
          <textarea id="description" name="description" rows="4" cols="50"></textarea>
        </div>
        <div className='inputbox'>
          <label htmlFor="dateLost">Date Lost:</label>
          <input type="date" id="dateLost" name="dateLost" />
        </div>
        <div className='inputbox'>
          <label htmlFor="image">Image:</label>
          <input type="file" id="image" name="image" accept="image/*" />
        </div>
        <div className='buttoncontainer'>
          <button type="submit">Post</button>
        </div>
      </form>
      </div>
      </div>
    </div>
  )
}

export default postitemform
