import React, { useState } from 'react';
import MenuItem from './MenuItem';
import './MenuDisplay.css';

const menuCategories = {
  Pizza: [
    { id: 1, name: 'Margherita', description: 'Classic tomato and mozzarella', price: 12.99 },
    { id: 2, name: 'Pepperoni', description: 'Spicy pepperoni with cheese', price: 14.99 },
  ],
  Sandwich: [
    { id: 3, name: 'Club Sandwich', description: 'Triple-decker with chicken and bacon', price: 9.99 },
    { id: 4, name: 'Veggie Delight', description: 'Grilled vegetables with pesto', price: 8.99 },
  ],
  'Main Courses': [
    { id: 5, name: 'Grilled Salmon', description: 'Fresh salmon with herbs', price: 22.99 },
    { id: 6, name: 'Beef Steak', description: 'Premium cut with garlic butter', price: 25.99 },
  ],
};

function MenuDisplay({ addToCart }) {
  const [selectedCategory, setSelectedCategory] = useState('Pizza');

  return (
    <div className="menu-display">
      <div className="category-nav">
        {Object.keys(menuCategories).map(category => (
          <button
            key={category}
            className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="menu-items">
        {menuCategories[selectedCategory].map(item => (
          <MenuItem
            key={item.id}
            item={item}
            onAddToCart={() => addToCart(item)}
          />
        ))}
      </div>
    </div>
  );
}

export default MenuDisplay; 