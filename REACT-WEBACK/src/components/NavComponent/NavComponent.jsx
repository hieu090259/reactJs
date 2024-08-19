import React from 'react';
import './NavComponent.scss'; // Import file SCSS để style

function NavComponent() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><a href="#home">PHIM MỚI</a></li>
        <li><a href="#about">PHIM LẺ</a></li>
        <li><a href="#services">PHIM BỘ</a></li>
        <li><a href="#category">THỂ LOẠI</a></li>
        <li><a href="#nation">QUỐC GIA</a></li>
        <li><a href="#YORelease">NĂM PHÁT HÀNH</a></li>
        <li><a href="#movie">PHIM CHIẾU RẠP</a></li>
        <li><a href="#trailer">TRAILER</a></li>
        <li className="TopMovie"><a href="#topMovie">TOP PHIM</a></li>
      </ul>
    </nav>
  );
}

export default NavComponent;
