import React from 'react';
import { Link } from 'react-router-dom';
import MultiRangeSlider from './MultiRangeSlider';

const products = [
  { id: 1, name: 'Product 1', description: 'Description of Product 1' },
  { id: 2, name: 'Product 2', description: 'Description of Product 2' },
  // Add more products as needed
];

function ProductList() {
  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>{product.name}</Link>

            <MultiRangeSlider />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
