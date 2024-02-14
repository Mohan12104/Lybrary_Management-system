import React from 'react';

const ShoppingCart = ({ cart }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.map((item) => (
        <div key={item.id}>
          {item.name} - ${item.price}
        </div>
      ))}
    </div>
  );
};

export default ShoppingCart