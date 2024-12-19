import React, { useState } from 'react';
import MenuDisplay from './components/MenuDisplay';
import Cart from './components/Cart';
import Order from './components/Order';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const addToCart = (item) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(i => i.id === item.id);
      if (existingItem) {
        return prevItems.map(i =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prevItems, { ...item, quantity: 1 }];
    });
  };

  const placeOrder = () => {
    setOrderPlaced(true);
  };

  return (
    <div className="app">
      <header>
        <h1>Restaurant Menu</h1>
      </header>
      <main>
        {!orderPlaced ? (
          <div className="content">
            <MenuDisplay addToCart={addToCart} />
            <Cart items={cartItems} onPlaceOrder={placeOrder} />
          </div>
        ) : (
          <Order items={cartItems} />
        )}
      </main>
    </div>
  );
}

export default App; 