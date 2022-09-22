import React from 'react'
import './Sidebar.css'


function Sidebar() {
  return (
    <div className='sidebar-section'>
        <div className='sidebar-subsection'>
            <span className="sidebar-title">About Me</span>
            <img className="sidebar-img" src="https://images.pexels.com/photos/610293/pexels-photo-610293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <p>My name is Jane Doe and I am graduated in systems analysis and development with a main focus on the technological environment and the development of web systems, using up-to-date technologies on the market.</p>
        </div>
        <div className='sidebar-subsection'>
            <span className="sidebar-title">Categories</span>
            <ul className='sidebar-categories'>
              <li className='sidebar-category'>Buy</li>
              <li className='sidebar-category'>Sell</li>
              <li className='sidebar-category'>Rent</li>
              <li className='sidebar-category'>Hostel</li>
              <li className='sidebar-category'>B & B</li>
              <li className='sidebar-category'>Hotel</li>
            </ul>
        </div>
        <div className='sidebar-subsection'>
            <span className='sidebar-title'>Follow Us</span>
            <div className='sidebar-social-icons'>
            <i className="sidebar-social-icon fa-brands fa-instagram"></i>
            <i className="sidebar-social-icon fa-brands fa-facebook"></i>
            <i className="sidebar-social-icon fa-brands fa-linkedin"></i>
            <i className="sidebar-social-icon fa-brands fa-twitter"></i>
            </div>
        </div>  
    </div>
  )

}

export default Sidebar