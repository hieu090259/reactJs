import React from 'react';
import './Category.scss'; // Import file SCSS để style

const categories = [
  'Phim Hành Động', 'Phim Võ Thuật', 'Phim Tình Cảm', 'Phim Hoạt Hình',
  'Phim Hài Hước', 'Phim Viễn Tưởng', 'Phim Cổ Trang', 'Phim Phiêu Lưu',
  'Phim Tâm Lý', 'Phim Khoa Học', 'Phim Hình Sự', 'Phim Ma - Kinh Dị',
  'Phim Chiến Tranh', 'Phim Âm Nhạc', 'Phim Thể Thao', 'Phim Thần Thoại',
  'Game Show', 'Phim Truyền Hình', 'Phim Chiếu Rạp', 'Phim Anime',
  'Phim Sắp Chiếu', 'Phim Thuyết Minh'
];

const MovieCategories = () => {
  return (
    <div className="movie-categories">
      <div className="categories-list">
        {categories.map((category, index) => (
          <div key={index} className="category-item">{category}</div>
        ))}
      </div>
    </div>
  );
};

export default MovieCategories;
