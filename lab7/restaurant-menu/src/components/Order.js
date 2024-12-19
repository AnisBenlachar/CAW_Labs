import React from 'react';
import './Order.css';

function Order({ items }) {
  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="order">
      <h2>Order Confirmation</h2>
      <div className="order-items">
        {items.map(item => (
          <div key={item.id} className="order-item">
            <span>{item.name}</span>
            <span>x{item.quantity}</span>
            <span>${(item.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}
      </div>
      <div className="order-total">
        <strong>Total Amount: ${total.toFixed(2)}</strong>
      </div>
      <p className="thank-you">Thank you for your order!</p>
    </div>
  );
}

export default Order; 