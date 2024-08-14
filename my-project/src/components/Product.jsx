import React, { useState } from 'react';
import ProductCard from '../components/ProductCard'; 
import Product from '../Product';
import SearchBar1 from '../components/Searchbar1'; 
import '../assets/Product.css';

const Products = () => {
  const [filteredProducts, setFilteredProducts] = useState(Product);

  return (
    <div className="products-container">
      <SearchBar1 items={Product} setFilteredItems={setFilteredProducts} />
      <div className="product-list">
      {filteredProducts.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
      </div>
    </div>
  );
};

export default Products;
