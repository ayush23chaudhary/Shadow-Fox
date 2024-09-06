import React from 'react';
import './Product.css';

const Product = ({ name, price, imageUrl, addToCart }) => {
  const handleaddToCart = () => {
    addToCart({ name, price, imageUrl });
  };
  return (
    <div className="product">
      <img src={imageUrl} alt={name} className="product-image" />
      <h2>{name}</h2>
      <p>&#8377;{price}</p>
      <button onClick={handleaddToCart}>Add to Cart</button>
    </div>
  );
};

export default Product;
