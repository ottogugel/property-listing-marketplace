import React from 'react'
import './TopBar.css'
import { NavLink } from 'react-router-dom'


// React component returns JSX kind on markup
function TopBar(props) {
  console.log(props)
  return (
    <div className="topbar">
      <div className="topbar-left">
        <i className="topbar-social-icon fa-brands fa-instagram"></i>
        <i className="topbar-social-icon fa-brands fa-facebook"></i>
        <i className="topbar-social-icon fa-brands fa-linkedin"></i>
        <i className="topbar-social-icon fa-brands fa-twitter"></i>
      </div>
      <div className="topbar-center">
        <ul className="topbar-list">
          <li className="topbar-list-item"><NavLink to="/" style={{ textDecoration: 'none' }}>HOME</NavLink></li>
          <li className="topbar-list-item"><NavLink to="/aboutus" style={{ textDecoration: 'none' }}>ABOUT US</NavLink></li>
          <li className="topbar-list-item"><NavLink to="/contactus" style={{ textDecoration: 'none' }}>CONTACT US</NavLink></li>
          <li className="topbar-list-item"><NavLink to="/create" style={{ textDecoration: 'none' }}>CREATE PROPERTY</NavLink></li>
          <li className="topbar-list-item">LOGOUT</li>
        </ul>
      </div>
      <div className="topbar-right">

        <img onClick={() => {props.setModalOpen(true)}} className="topbar-profile-pic" src="https://images.pexels.com/photos/610293/pexels-photo-610293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <i className='topbar-search fa-solid fa-magnifying-glass'></i>
      </div>
    </div>
  )
}

export default TopBar
