import React from 'react';
import './SearchComponent.scss'; // Import file SCSS để style

function SearchComponent() {
  return (
    <>
      <form method="GET" id="form-search" action="tim-kiem/" class="BoxSearch">
       <input placeholder="Tìm tên phim, diễn viên..."  name="keyword" className="Search_Input"/> 
        <i className="fa-solid fa-magnifying-glass" id="Search"></i>
      </form>
    </>
  );
}

export default SearchComponent;


