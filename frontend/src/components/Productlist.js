import React from 'react';
const ProductList = ({ products, cart, addToCart }) => {
  return (
    <div>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <span>{product.name} - Rs {product.price}</span>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ProductList;