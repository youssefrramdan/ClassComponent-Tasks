import React from 'react';
import AddingComponent from './AddingCompnent'; 
import './Products.css'
import { products } from './../ProductData';

function Products(){
  return (
    <div className="products">
      {products.map((product) => (
        <div key={product.id} className="product">
          <img src={product.img} alt={product.name} className="productimage" />
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>${product.price}</p>
          <AddingComponent /> 
        </div>
      ))}
    </div>
  );
};

export default Products;
