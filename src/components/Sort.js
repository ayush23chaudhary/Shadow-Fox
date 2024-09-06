import React from 'react';
import './Sort.css';


const Sort = ({ onSortChange }) => {
  return (
    <div className="sort">
      <label htmlFor="sort">Sort by: </label>
      <select id="sort" onChange={(e) => onSortChange(e.target.value)}>
        <option value="name">Name</option>
        <option value="price">Price</option>
      </select>
    </div>
  );
};

export default Sort;
