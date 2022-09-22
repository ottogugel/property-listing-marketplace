import React from 'react'
import './ContactPage.css'

function ContactPage() {
  return (
    <div>
     <div className='contact-page-info'>
      <h2 className='contact-page-title'>Contact Page</h2>
      </div>
      <form className='form-container'>
            <label htmlFor='email'>Email Address</label>
            <input type={'email'} name='email' className='txtEmail' placeholder='example@gmail.com'/>
            
            <p>We'll never share your email with anyone else.</p>

            <label htmlFor='name'>Name</label>
            <input type={'text'} name='name' className='txtName' placeholder='Name'/>

            <label htmlFor='query'>Your Query</label>
            <textarea name='form-control' cols={30} rows={3} className='txtQuery'></textarea>
      </form>
        <div className='container-btn'>
        <button type="submit" className="contact-page-btn">
          Submit
        </button>
        </div>
    </div>
  )
}

export default ContactPage


