import React from 'react';
import ListingDetail from '../../components/listing-detail/ListingDetail';
import Sidebar from '../../components/sidebar/Sidebar';
import './Details.css';

function Details() {
  return (
    <div className='detail-page'>
      <ListingDetail />
      <Sidebar />
    </div>
  )
}

export default Details