import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Product1 from '../Product1';
import '../assets/ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const product = Product1.find((item) => item.id === parseInt(id));
  const navigate = useNavigate();

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-details-container">
      <img src={product.image_url} alt={product.name} className="product-details-image" />
      <button className="back-button" onClick={() => navigate(-1)}>Back</button> 
        <h2>{product.name}</h2>
        <p>Desciption: {product.description}</p>
        <p className="product-details-price">Price: ${product.price}</p>
      </div>
    
  );
};

export default ProductDetails;
