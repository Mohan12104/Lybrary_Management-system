import React from 'react';

const Product = ({ product, addToCart }) => {
  return (
    <div>
      <li>{product.name} - ${product.price}
      <button onClick={() => addToCart(product)}>Add to Cart</button></li>
    </div>
  );
};

export default Product;