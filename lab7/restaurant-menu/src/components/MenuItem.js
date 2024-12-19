import React from 'react';
import './MenuItem.css';

function MenuItem({ item, onAddToCart }) {
  return (
    <div className="menu-item">
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <p className="price">${item.price.toFixed(2)}</p>
      <button onClick={onAddToCart}>Add to Cart</button>
    </div>
  );
}

export default MenuItem; 