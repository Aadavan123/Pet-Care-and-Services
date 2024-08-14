import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'; 
import { addItemToCart } from '../redux/CartSlice'; 
import '../assets/ProductCard.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  const handleAddToCart = (e) => {
    e.stopPropagation(); // Prevent card click event when clicking the button
    dispatch(addItemToCart(product));
    toast.success('Item added to cart!',{
      position: "bottom-right",
      autoClose: 1000,
      theme: 'dark',
  });
  };

  const handleCardClick = () => {
    navigate(`/products/${product.id}`); // Navigate to product details page
  };

  return (
    <div className="product-card" onClick={handleCardClick}>
      <img src={product.image_url} alt={product.name} className="product-image" />
      <div className="product-details">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">${product.price}</p>
        <button className="buy-button" onClick={handleAddToCart}>Buy</button>
      </div>
    </div>
  );
};

export default ProductCard; // Ensure the default export is used
