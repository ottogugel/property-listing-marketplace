import React from 'react'
import './ListingItem.css'
import { Link } from 'react-router-dom'

function ListingItem() {
  return (
    <div className='listing-item'>
      <img className='listing-img' src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg" />
      <div className='listing-details'>
        <div className='listing-categories'>
          <span className='listing-category'>Buy</span>
          <span className='listing-category'>Sell</span>
        </div>
        <Link to="/details/1" style={{ textDecoration: 'none' }}><span className='listing-title'>Awesome property</span></Link>
        <hr />
        <span className='listing-time'>2 days ago</span>
      </div>
      <p className='listing-description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
    </div>
  )
}

export default ListingItem