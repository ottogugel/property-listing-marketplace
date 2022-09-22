import React from 'react'
import './ListingDetail.css'

function ListingDetail() {
  return (
    <div className='listing-detail'>
      <div className='listing-detail-content'>
        <img className='listing-detail-img' src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg" />
        <h1 className='listing-detail-title'>
        Awesome property
        <div className='listing-detail-action'>
        <i className="listing-detail-action-icon fa-solid fa-pen-to-square"></i>
        <i className="listing-detail-action-icon fa-solid fa-trash"></i>
        </div>
        </h1>
        <div className='listing-detail-meta-info'>
          <span className='listing-detail-author'>Author - <strong>Jane Doe</strong></span>
          <span className='listing-detail-time'>1 day ago</span>
        </div>
        <p className='listing-detail-description'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel ullamcorper tellus. Integer nisl nulla, tincidunt varius feugiat facilisis, ultrices nec massa. Phasellus dictum orci cursus diam egestas vulputate. Pellentesque nec pulvinar augue, posuere auctor ante. Sed pulvinar, erat at semper varius, odio arcu mollis diam, vel porttitor ex augue sit amet turpis. Praesent sed sem arcu. Cras tempor lacinia turpis at interdum. Curabitur quis nunc neque.

        Nulla ullamcorper consequat blandit. Nullam et risus non tortor convallis eleifend. Mauris ultrices sagittis ipsum sollicitudin pretium. Morbi condimentum nisi ipsum, quis fringilla nulla lobortis non. Etiam maximus sed ante at tempor. Quisque id lorem nec ante suscipit finibus. Pellentesque sed rutrum odio. Proin consequat diam metus, non tincidunt sem porta at. Quisque nec odio ac purus lacinia ullamcorper ut eget velit. Proin nulla erat, dapibus varius semper nec, ultrices sit amet nulla. Curabitur eu est turpis. Suspendisse elementum, lorem sit amet pretium venenatis, nunc sapien accumsan eros, at auctor sapien lectus vel risus. 
        </p>
      </div>
    </div>
  )
}

export default ListingDetail