import React from 'react';

const Categories = ({ filterItems }) => {
  return (

    <div className= 'btn-container'>
      <button className='filter-btn' onClick={() =>
       filterItems('UX')}     
      >UX</button>
    </div>
  )
}

export default Categories;